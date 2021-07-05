import axios from "axios";
import { useState, useCallback } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const sendRequest = useCallback(
    async ({ method, url, ...otherConfig }, applyData) => {
      try {
        setIsLoading(true);
        const { data } = await axios({
          method,
          url,
          ...otherConfig
        });
        setIsLoading(false);
        if (applyData) applyData(data);
      } catch (e) {
        setError(new Error("Something Happened"));
      }
    },
    []
  );
  return {
    isLoading,
    error,
    sendRequest
  };
};

export default useHttp;
