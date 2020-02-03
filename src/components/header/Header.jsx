import React from 'react';
import style from './Header.module.css';
import { NavLink } from 'react-router-dom';
import HeaderTopMenu from './HeaderTopMenu/HeaderTopMenu';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isUkraine: true,
            isWorld: false
        }
    }

    handleClick = (e) => {
        e.preventDefault();
        this.setState({
            isUkraine: !this.state.isUkraine,
            isWorld: !this.state.isWorld
        })
    }

    render() {
        return (
            <header>
                <HeaderTopMenu/>
                <ul className={style.header}>
                    <li><a href="" onClick={this.handleClick}>Cities of the Ukraine</a></li>
                    <li><a href="" onClick={this.handleClick}>Cities of the World</a></li>
                </ul>
                <div className={this.state.isUkraine ? style.hide : style.sitiesUkraine}>
                    <NavLink to='/'>Kharkiv</NavLink>
                    <NavLink to='/'>Kyev</NavLink>
                    <NavLink to='/'>Donetsk</NavLink>
                    <NavLink to='/'>Luhansk</NavLink>
                    <NavLink to='/'>Vinnytsia</NavLink>
                    <NavLink to='/'>Zhytomyr</NavLink>
                    <NavLink to='/'>Kirovohrad</NavLink>
                    <NavLink to='/'>Lutsk</NavLink>
                    <NavLink to='/'>Lviv</NavLink>
                    <NavLink to='/'>Odesa</NavLink>
                </div>
                <div className={this.state.isWorld ? style.hide : style.sitiesWorlds}>
                    <NavLink to='/'>Paris</NavLink>
                    <NavLink to='/'>Riga</NavLink>
                    <NavLink to='/'>Donetsk</NavLink>
                    <NavLink to='/'>Luhansk</NavLink>
                    <NavLink to='/'>Vinnytsia</NavLink>
                    <NavLink to='/'>Zhytomyr</NavLink>
                    <NavLink to='/'>Kirovohrad</NavLink>
                    <NavLink to='/'>Lutsk</NavLink>
                    <NavLink to='/'>Lviv</NavLink>
                    <NavLink to='/'>Odesa</NavLink>
                </div>
            </header>
        )
    }
}