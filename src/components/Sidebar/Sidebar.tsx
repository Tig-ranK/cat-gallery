import { FC } from 'react';
import { Link } from 'react-router-dom';
import style from './Sidebar.module.scss';

export const Sidebar: FC = () => {
  const categories = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
    (id) => (
      <Link key={id} className={style.link} to={`/categories/${id}`}>
        Category: {id}
      </Link>
    )
  );

  return (
    <aside className={style.container}>
      <nav className={style.nav}>
        <Link className={style.link} to='/home'>
          Home
        </Link>
        <Link className={style.link} to='/notfound'>
          Not Found
        </Link>
        {categories}
      </nav>
    </aside>
  );
};
