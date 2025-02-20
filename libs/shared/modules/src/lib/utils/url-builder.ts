/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
export function buildUrl(
    filter: Record<string, any> | null,
    baseUrl: string
  ): string {
    if(filter){
    const queryString = Object.entries(filter)
      .filter(([_, value]) => value !== null && value !== undefined && value !== "")
      .map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
      )
      .join("&");
  
    return queryString ? `${baseUrl}?${queryString}` : baseUrl;
    }else{
        return "";
    }
  }
  