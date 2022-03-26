import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Cat, useFetch } from '../../hooks/useFetch';

import style from './Gallery.module.scss';

const IMAGES_URL = (limit: number) =>
  `images/search?limit=${limit}&page=1&category_ids=`;

const MAIN_URL = 'https://api.thecatapi.com/v1/';

export const Gallery: FC = () => {
  const { categoryId } = useParams();
  const [more, setMore] = useState(false);

  const {
    data: catsToShow,
    setData: setCatsToShow,
    loading,
  } = useFetch(`${MAIN_URL}${IMAGES_URL(10)}${categoryId}`);

  useEffect(() => {
    if (!more) return;

    fetch(`${MAIN_URL}${IMAGES_URL(10)}${categoryId}`, {
      method: 'GET',
      headers: {
        'x-api-key': process.env.REACT_APP_API_KEY,
      } as any, // fix this
    })
      .then((res) => res.json())
      .then((newCats) =>
        // setCatsToShow((prevCats: Cat[]) => [...prevCats, newCats])
        console.log([...catsToShow, ...newCats])
      );
    setMore(false);
  }, [categoryId, more, setCatsToShow]);

  const handleFetch = () => {
    setMore(true);
  };

  const mappedCats = catsToShow.map((cat) => {
    return (
      <div key={cat.id} className={style.img}>
        <img src={cat.url} alt='cat' />
      </div>
    );
  });

  return (
    <main>
      <h2>{categoryId}</h2>
      <div className={style.gallery}>{loading ? 'Loading...' : mappedCats}</div>
      <button onClick={handleFetch}>More</button>
    </main>
  );
};
