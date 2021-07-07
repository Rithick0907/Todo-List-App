import { useCallback, useState } from "react";

import { httpService } from "../service/httpConfig";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const sendRequest = useCallback(async ({ method, url, ...otherConfig }) => {
    try {
      setIsLoading(true);
      const response = await httpService({
        method,
        url,
        ...otherConfig,
      });
      setIsLoading(false);
      return response;
    } catch (e) {
      setError(new Error("Something Happened"));
    }
  }, []);
  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
