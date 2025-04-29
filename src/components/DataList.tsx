
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { usePaginatedApi } from "@/hooks/useApi";

interface DataListProps {
  entity: string;
  title: string;
  description: string;
}

export function DataList({ entity, title, description }: DataListProps) {
  const [page, setPage] = useState(1);
  const pageSize = 5;
  
  const { data, isLoading, error, refresh, totalPages } = usePaginatedApi(
    entity,
    page,
    pageSize
  );

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      
      <CardContent>
        {isLoading ? (
          <div className="space-y-4">
            {Array(pageSize)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              ))}
          </div>
        ) : error ? (
          <div className="bg-red-50 p-4 rounded-md text-red-700">
            <p>Error loading data: {error.message}</p>
            <Button 
              variant="outline" 
              onClick={() => refresh()} 
              className="mt-2"
            >
              Retry
            </Button>
          </div>
        ) : data && data.length > 0 ? (
          <div className="space-y-4">
            {data.map((item: any, index) => (
              <div key={index} className="border-b pb-4 last:border-0">
                <h4 className="font-semibold text-lg">
                  {item.title || item.name || `Item #${item.id}`}
                </h4>
                <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                  {item.description && (
                    <div className="col-span-2">
                      <span className="text-muted-foreground">Description: </span>
                      {item.description}
                    </div>
                  )}
                  {item.created_at && (
                    <div>
                      <span className="text-muted-foreground">Created: </span>
                      {formatDate(item.created_at)}
                    </div>
                  )}
                  {item.status && (
                    <div>
                      <span className="text-muted-foreground">Status: </span>
                      <span className={item.status === 'active' ? 'text-green-600' : 'text-amber-600'}>
                        {item.status}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center p-8 text-muted-foreground">
            No data available.
          </div>
        )}
      </CardContent>
      
      <CardFooter className="flex justify-between">
        <Button 
          variant="outline" 
          onClick={handlePrevPage} 
          disabled={page <= 1 || isLoading}
        >
          Previous
        </Button>
        <span className="text-sm text-muted-foreground">
          Page {page} of {totalPages}
        </span>
        <Button 
          variant="outline" 
          onClick={handleNextPage} 
          disabled={page >= totalPages || isLoading}
        >
          Next
        </Button>
      </CardFooter>
    </Card>
  );
}
