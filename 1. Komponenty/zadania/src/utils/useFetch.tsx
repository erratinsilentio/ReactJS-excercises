import { useEffect, useState } from "react";

export const useFetch = (url: string) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading((loading) => true);
    console.log("loading...");
    setData((data) => null);
    setError((error) => null);

    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setLoading((loading) => false);
        setData((data) => json);
        console.log("loading complete!");
        // console.log(data);
      })
      .catch((err) => {
        setLoading((loading) => false);
        setError((error) => err);
        console.log("error!");
      });
  }, []);

  return { data, loading, error };
};
