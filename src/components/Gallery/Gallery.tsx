import { nanoid } from 'nanoid';
import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import style from './Gallery.module.scss';

export interface Cat {
  url: string;
  id: string;
  height: number;
  width: number;
  breeds: Array<any>;
  categories: { id: number; name: string }[];
}

const IMAGES_URL = (limit: number) =>
  `images/search?limit=${limit}&page=1&category_ids=`;

const MAIN_URL = 'https://api.thecatapi.com/v1/';

export const Gallery: FC = () => {
  const { categoryId } = useParams();
  const [catsToShow, setCatsToShow] = useState<Cat[]>([]);
  const [isFetch, setIsFetch] = useState(true);

  useEffect(() => {
    if (!isFetch) return;

    const url = `${MAIN_URL}${IMAGES_URL(10)}${categoryId}`;

    fetch(url, {
      method: 'GET',
      headers: {
        'x-api-key': process.env.REACT_APP_API_KEY,
      } as any, // fix this
    })
      .then((res) => res.json())
      .then((newCats) => setCatsToShow((prev) => [...prev, ...newCats]));

    setIsFetch(false);
  }, [categoryId, isFetch]);

  const mappedCats = catsToShow.map((cat) => (
    <div key={nanoid()} className={style.img}>
      <img src={cat.url} alt='cat' />
    </div>
  ));

  return (
    <main className={style.container}>
      <div className={style.gallery}>{mappedCats}</div>
      <button className={style.button} onClick={() => setIsFetch(true)}>
        More
      </button>
    </main>
  );
};
