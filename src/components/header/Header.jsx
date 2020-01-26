import React from 'react';
import style from './Header.module.css';

export default class Header extends React.Component {
    render() {
        return (
            <ul className={style.header}>
                <a href="">
                    <li>Home</li>
                </a>
                <a href="">
                    <li>Booking hotel</li>
                </a>
                <a href="">
                    <li>About us</li>
                </a>
                <a href="">
                    <li>Contacts</li>
                </a>
            </ul>
        )
    }
}