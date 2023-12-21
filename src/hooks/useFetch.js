import { useEffect, useState } from "react";

export default function useFetch({ url, config }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () =>
      await fetch(url, config)
        .then((res) => res.json())
        .then((res) => setData(res))
        .catch((err) => {
          setError(err.message);
          console.error(err);
        })
        .finally(() => setLoading(false));
    getData();
  }, [url, config?.body, config?.method]);

  return { data, error, loading };
}
