import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import style from './HeaderTopMenu.module.css';

const HeaderTopMenu = () => {
  const [isLangOpened, openClose] = useState(false);
  return (
    <div className={style.headerTopMenu}>
      <div>
        <NavLink to="/" className={style.logo}>Hotel</NavLink>
        <NavLink to="/world-hotels" className={style.navLink}>Отели мира</NavLink>
        <NavLink to="/about-us" className={style.navLink}>О нас</NavLink>
      </div>
      <div>
        <div
          role="button"
          className={style.langSwitcher}
        >
          <button
            type="button"
            onClick={() => openClose(!isLangOpened)}
          >
            Ru
          </button>
          {
            isLangOpened && (
            <div
              className={style.langDropdown}
            >
              <button
                type="button"
                onClick={() => alert('dsdsdsd')}
                value="Ru"
              >
                Ru
              </button>
              <button type="button" value="Ua">Ua</button>
              <button type="button" value="En">En</button>
            </div>
            )
          }
        </div>
        <NavLink to="/" className={style.navLink}>Регистрация</NavLink>
        <button type="submit" className={style.button}>Войти</button>
        <NavLink to="/" className={style.navLink}>
          <i>Mocked</i>
          Вопросы
        </NavLink>
      </div>
    </div>
  );
};

export default HeaderTopMenu;
