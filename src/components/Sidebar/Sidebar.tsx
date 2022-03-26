import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Sidebar.module.scss';

interface Category {
  id: number;
  name: string;
}
export const Sidebar: FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch(`https://api.thecatapi.com/v1/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const mappedCategories = categories.map((category) => (
    <Link
      key={category.id}
      className={style.link}
      to={`/categories/${category.id}`}
    >
      {category.name}
    </Link>
  ));

  return (
    <aside className={style.container}>
      <nav className={style.nav}>
        <Link className={style.link} to='/'>
          Home
        </Link>
        {mappedCategories}
      </nav>
    </aside>
  );
};
