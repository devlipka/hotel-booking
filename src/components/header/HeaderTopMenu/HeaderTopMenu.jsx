import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './HeaderTopMenu.module.css';

const HeaderTopMenu = () => {
  return (
    <div className={style.headerTopMenu}>
      <div>
        <NavLink to="/" className={style.logo}>Hotel</NavLink>
        <NavLink to="/" className={style.navLink}>Отели мира</NavLink>
        <NavLink to="/" className={style.navLink}>О нас</NavLink>
      </div>
      <div>
        <div className={style.langSwitcher}>
          <a href="javascript:void(0)">Ru</a>
            <div className={style.langDropdown}>
              <a href="javascript:void(0)">Ru</a>
              <a href="javascript:void(0)">Ua</a>
              <a href="javascript:void(0)">En</a>
            </div>
        </div>
        <NavLink to="/" className={style.navLink}>Регистрация</NavLink>
        <button className={style.navLink}>Войти</button>
        <NavLink to="/" className={style.navLink}><i></i>Вопросы</NavLink>
      </div> 
    </div>
  );
};

export default HeaderTopMenu;
