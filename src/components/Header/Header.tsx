import { FC } from 'react';
import './Header.css';

export const Header: FC = () => {
  return (
    <header className='header'>
      <div className='container header__container'>
        <h1 className='header__title'>todos</h1>
      </div>
    </header>
  );
};
