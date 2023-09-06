import { useEffect, useState } from "react";

export type ApiResponse<T> = {
  data: T;
  isLoading: boolean;
  error: Error | null;
};

function useApi<T>(url: string): ApiResponse<T> {
  const [data, setData] = useState<T>([] as T);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { data, isLoading, error };
}

export default useApi;
