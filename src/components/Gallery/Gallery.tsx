import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

import style from './Gallery.module.scss';

const SEARCH_URL =
  'https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=';

export const Gallery: FC = () => {
  const { categoryId } = useParams();

  const { data: cats, loading } = useFetch(`${SEARCH_URL}${categoryId}`);

  const mappedImages = cats.map((cat) => {
    return (
      <div key={cat.id} className={style.img}>
        <img src={cat.url} alt='cat' />
      </div>
    );
  });

  return (
    <main>
      <h2>{categoryId}</h2>
      <div className={style.gallery}>
        {loading ? 'Loading...' : mappedImages}
      </div>
    </main>
  );
};
