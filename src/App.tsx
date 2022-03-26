import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
// components
import { Gallery } from './components/Gallery/Gallery';
import { Home } from './components/Home/Home';
import { NotFound } from './components/NotFound/NotFound';
import { Sidebar } from './components/Sidebar/Sidebar';

import './globalStyles.scss';

export const App: FC = () => {
  // return <p>{JSON.stringify(data, null, 2)}</p>;
  return (
    <>
      <div className='layout'>
        <h1 className='logo'>Cats Gallery</h1>
        <Sidebar />
        <Routes>
          <Route index element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='categories/:categoryId' element={<Gallery />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};