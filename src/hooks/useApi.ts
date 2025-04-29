
import { useCallback, useEffect, useState } from "react";
import { ApiClient } from "@/utils/apiClient";
import { toast } from "@/components/ui/sonner";

type ApiState<T> = {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
  refresh: () => Promise<void>;
};

export function useApiGet<T>(entity: string, id?: string, initialFetch: boolean = true): ApiState<T> {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(initialFetch);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      let result;
      if (id) {
        result = await ApiClient.getById<T>(entity, id);
      } else {
        result = await ApiClient.getAll<T>(entity);
      }
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err : new Error(String(err)));
      toast.error(`Failed to load ${entity}: ${err instanceof Error ? err.message : String(err)}`);
    } finally {
      setIsLoading(false);
    }
  }, [entity, id]);

  useEffect(() => {
    if (initialFetch) {
      fetchData();
    }
  }, [fetchData, initialFetch]);

  return { data, isLoading, error, refresh: fetchData };
}

export function useApiMutation<T, D = Partial<T>>(
  entity: string,
  operation: "create" | "update" | "delete",
  id?: string
) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const mutate = useCallback(
    async (data?: D): Promise<T | null> => {
      setIsLoading(true);
      setError(null);
      try {
        let result = null;

        switch (operation) {
          case "create":
            result = await ApiClient.create<T>(entity, data as any);
            toast.success(`Successfully created ${entity}`);
            break;
          case "update":
            if (!id) throw new Error("ID is required for update operation");
            result = await ApiClient.update<T>(entity, id, data as any);
            toast.success(`Successfully updated ${entity}`);
            break;
          case "delete":
            if (!id) throw new Error("ID is required for delete operation");
            await ApiClient.delete(entity, id);
            toast.success(`Successfully deleted ${entity}`);
            break;
        }

        return result;
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : String(err);
        setError(err instanceof Error ? err : new Error(errorMessage));
        toast.error(`Operation failed: ${errorMessage}`);
        return null;
      } finally {
        setIsLoading(false);
      }
    },
    [entity, operation, id]
  );

  return { mutate, isLoading, error };
}

// Example usage of paginated data
export function usePaginatedApi<T>(
  entity: string, 
  page: number = 1, 
  pageSize: number = 10, 
  filters?: Record<string, string>
): ApiState<T[]> & { totalPages: number } {
  const [data, setData] = useState<T[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await ApiClient.getAll<T>(entity, page, pageSize, filters);
      setData(result);
      
      // This is an approximation - ideally your API would return total count
      // For now we're just estimating based on whether we got a full page
      if (result.length < pageSize && page === 1) {
        setTotalPages(1);
      } else if (result.length < pageSize) {
        setTotalPages(page);
      } else {
        setTotalPages(page + 1);
      }
    } catch (err) {
      setError(err instanceof Error ? err : new Error(String(err)));
      toast.error(`Failed to load ${entity}: ${err instanceof Error ? err.message : String(err)}`);
    } finally {
      setIsLoading(false);
    }
  }, [entity, page, pageSize, filters]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, error, refresh: fetchData, totalPages };
}
