
import { supabase } from "@/integrations/supabase/client";

export class ApiClient {
  private static BASE_URL = "https://jklewwlnrlzomkaetjjo.supabase.co/functions/v1/api";

  private static async request<T>(
    method: string,
    entity: string,
    id?: string,
    data?: any,
    queryParams?: Record<string, string>
  ): Promise<T> {
    // Get the authenticated user's token
    const { data: authData } = await supabase.auth.getSession();

    // Build URL with query parameters
    let url = `${this.BASE_URL}/${entity}${id ? `/${id}` : ""}`;
    
    if (queryParams && Object.keys(queryParams).length > 0) {
      const params = new URLSearchParams();
      Object.entries(queryParams).forEach(([key, value]) => {
        params.append(key, value);
      });
      url += `?${params.toString()}`;
    }

    // Set up request options
    const options: RequestInit = {
      method,
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authData?.session?.access_token || ""}`,
      },
    };

    // Add body for POST and PUT requests
    if (["POST", "PUT"].includes(method) && data) {
      options.body = JSON.stringify(data);
    }

    // Make the request
    const response = await fetch(url, options);
    
    // Handle errors
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `API error: ${response.status}`);
    }

    // Return the data
    const responseData = await response.json();
    return responseData.data as T;
  }

  // CRUD methods
  static async getAll<T>(
    entity: string,
    page: number = 1,
    pageSize: number = 10,
    filters?: Record<string, string>
  ): Promise<T[]> {
    const queryParams = {
      page: page.toString(),
      pageSize: pageSize.toString(),
      ...(filters || {})
    };
    
    return this.request<T[]>("GET", entity, undefined, undefined, queryParams);
  }

  static async getById<T>(entity: string, id: string): Promise<T> {
    return this.request<T>("GET", entity, id);
  }

  static async create<T>(entity: string, data: Partial<T>): Promise<T> {
    return this.request<T>("POST", entity, undefined, data);
  }

  static async update<T>(entity: string, id: string, data: Partial<T>): Promise<T> {
    return this.request<T>("PUT", entity, id, data);
  }

  static async delete(entity: string, id: string): Promise<void> {
    await this.request<void>("DELETE", entity, id);
  }
}

// Type-safe entity accessor functions
export const suppliers = {
  getAll: (page?: number, pageSize?: number, filters?: Record<string, string>) => 
    ApiClient.getAll<any>("suppliers", page, pageSize, filters),
  getById: (id: string) => ApiClient.getById<any>("suppliers", id),
  create: (data: any) => ApiClient.create<any>("suppliers", data),
  update: (id: string, data: any) => ApiClient.update<any>("suppliers", id, data),
  delete: (id: string) => ApiClient.delete("suppliers", id)
};

export const assessments = {
  getAll: (page?: number, pageSize?: number, filters?: Record<string, string>) => 
    ApiClient.getAll<any>("assessments", page, pageSize, filters),
  getById: (id: string) => ApiClient.getById<any>("assessments", id),
  create: (data: any) => ApiClient.create<any>("assessments", data),
  update: (id: string, data: any) => ApiClient.update<any>("assessments", id, data),
  delete: (id: string) => ApiClient.delete("assessments", id)
};

export const initiatives = {
  getAll: (page?: number, pageSize?: number, filters?: Record<string, string>) => 
    ApiClient.getAll<any>("initiatives", page, pageSize, filters),
  getById: (id: string) => ApiClient.getById<any>("initiatives", id),
  create: (data: any) => ApiClient.create<any>("initiatives", data),
  update: (id: string, data: any) => ApiClient.update<any>("initiatives", id, data),
  delete: (id: string) => ApiClient.delete("initiatives", id)
};

export const reports = {
  getAll: (page?: number, pageSize?: number, filters?: Record<string, string>) => 
    ApiClient.getAll<any>("reports", page, pageSize, filters),
  getById: (id: string) => ApiClient.getById<any>("reports", id),
  create: (data: any) => ApiClient.create<any>("reports", data),
  update: (id: string, data: any) => ApiClient.update<any>("reports", id, data),
  delete: (id: string) => ApiClient.delete("reports", id)
};

export const risks = {
  getAll: (page?: number, pageSize?: number, filters?: Record<string, string>) => 
    ApiClient.getAll<any>("risks", page, pageSize, filters),
  getById: (id: string) => ApiClient.getById<any>("risks", id),
  create: (data: any) => ApiClient.create<any>("risks", data),
  update: (id: string, data: any) => ApiClient.update<any>("risks", id, data),
  delete: (id: string) => ApiClient.delete("risks", id)
};

export const alerts = {
  getAll: (page?: number, pageSize?: number, filters?: Record<string, string>) => 
    ApiClient.getAll<any>("alerts", page, pageSize, filters),
  getById: (id: string) => ApiClient.getById<any>("alerts", id),
  create: (data: any) => ApiClient.create<any>("alerts", data),
  update: (id: string, data: any) => ApiClient.update<any>("alerts", id, data),
  delete: (id: string) => ApiClient.delete("alerts", id)
};

export const cases = {
  getAll: (page?: number, pageSize?: number, filters?: Record<string, string>) => 
    ApiClient.getAll<any>("cases", page, pageSize, filters),
  getById: (id: string) => ApiClient.getById<any>("cases", id),
  create: (data: any) => ApiClient.create<any>("cases", data),
  update: (id: string, data: any) => ApiClient.update<any>("cases", id, data),
  delete: (id: string) => ApiClient.delete("cases", id)
};

export const partners = {
  getAll: (page?: number, pageSize?: number, filters?: Record<string, string>) => 
    ApiClient.getAll<any>("partners", page, pageSize, filters),
  getById: (id: string) => ApiClient.getById<any>("partners", id),
  create: (data: any) => ApiClient.create<any>("partners", data),
  update: (id: string, data: any) => ApiClient.update<any>("partners", id, data),
  delete: (id: string) => ApiClient.delete("partners", id)
};

export const metrics = {
  getAll: (page?: number, pageSize?: number, filters?: Record<string, string>) => 
    ApiClient.getAll<any>("metrics", page, pageSize, filters),
  getById: (id: string) => ApiClient.getById<any>("metrics", id),
  create: (data: any) => ApiClient.create<any>("metrics", data),
  update: (id: string, data: any) => ApiClient.update<any>("metrics", id, data),
  delete: (id: string) => ApiClient.delete("metrics", id)
};
