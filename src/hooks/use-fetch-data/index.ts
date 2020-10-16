import { useState, useEffect } from "react";
import { AxiosRequestConfig, AxiosResponse } from "axios";
import { DataProfile } from "data-access";

const useFetchData = (
  endpoint: string,
  requestConfig: AxiosRequestConfig = {}
) => {
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const _fetchData = async () => {
      setStatus("pending");
      let res: AxiosResponse;
      try {
        res = await DataProfile.Get(endpoint, { ...requestConfig });
        await setData(res?.data);
        setStatus("resolved");
      } catch (error) {
        setStatus("rejected");
        setError(error);
      }
    };
    _fetchData();
  }, []);

  return {
    status,
    data,
    error,
  };
};

export default useFetchData;
