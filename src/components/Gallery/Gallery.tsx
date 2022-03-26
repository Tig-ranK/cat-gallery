import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const imagesUrl =
  'https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=1';

export const Gallery: FC = () => {
  const { categoryId } = useParams();

  const [data, setData] = useState<unknown>();

  useEffect(() => {
    const fetchData = async (url: string) => {
      const res = await fetch(url, {
        method: 'GET',
        headers: {
          'x-api-key': process.env.REACT_APP_API_KEY,
        } as any, // fix this
      });
      const data = await res.json();
      setData(data);
    };
    fetchData(imagesUrl);
  }, []);

  const mappedImages = 'Images are supposed to be here';
  return (
    <main>
      <h2>{categoryId}</h2>
      {mappedImages}
    </main>
  );
};
