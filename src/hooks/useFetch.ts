import { useEffect, useState } from 'react';

export interface Cat {
  url: string;
  id: string;
  height: number;
  width: number;
  breeds: Array<any>;
  categories: { id: number; name: string }[];
}

interface Return {
  data: Cat[];
  setData: any;
  error: boolean;
  loading: boolean;
}

export const useFetch = (url: string): Return => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async (url: string) => {
      setLoading(true);
      const res = await fetch(url, {
        method: 'GET',
        headers: {
          'x-api-key': process.env.REACT_APP_API_KEY,
        } as any, // fix this
      });
      const data = await res.json();
      setData(data);
      setLoading(false);
    };
    fetchData(url);
  }, [url]);

  return {
    data,
    setData: (newState: Cat[]) => setData(newState),
    error,
    loading,
  };
};
