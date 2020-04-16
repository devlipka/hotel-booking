import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import style from './HeaderTopMenu.module.css';

const HeaderTopMenu = props => {
  const [isLangOpened, openClose] = useState(false);

  const activeLang = props.language.filter(element => {
    if (element[0] === true) return element[1];
  });

  const dropLang = props.language.filter(element => {
    if (element[0] !== true) return element[1];
  });

  const onChangeLanguage = event => {
    const language = event.target.value;
    props.changeLanguage(language);
  };

  return (
    <div className={style.headerTopMenu}>
      <div>
        <NavLink to='/' className={style.logo}>Hotel</NavLink>
        <NavLink to='/world-hotels' className={style.navLink}>Отели мира</NavLink>
        <NavLink to='/about-us' className={style.navLink}>О нас</NavLink>
      </div>
      <div>
        <div
          className={style.langSwitcher}
          onClick={() => openClose(!isLangOpened)}
          onBlur={() => openClose(false)}>{activeLang[0]}
          {
            isLangOpened && (
              <div className={style.langDropdown}>
                {
                  dropLang.map((element, index) => (
                    <button onClick={onChangeLanguage} key={index} value={element[1]}>{element[1]}</button>
                  ))
                }
              </div>
            )
          }
        </div>
        <NavLink to='/' className={style.navLink}>Регистрация</NavLink>
        <button type='button' className={style.button}>Войти</button>
        <NavLink to='/' className={style.navLink}>
          <i>Mocked</i>
          Вопросы
        </NavLink>
      </div>
    </div>
  );
};

HeaderTopMenu.propTypes = {
  language: PropTypes.arrayOf(PropTypes.array),
};

export default HeaderTopMenu;
