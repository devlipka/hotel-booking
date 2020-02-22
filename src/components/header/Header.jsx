import React from 'react';
import style from './Header.module.css';
import { NavLink } from 'react-router-dom';
import HeaderTopMenu from './HeaderTopMenu/HeaderTopMenu';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isUkraine: true,
            isWorld: false
        }
    }

    handleClick = event => {
        event.preventDefault();
        this.setState({
            isUkraine: !this.state.isUkraine,
            isWorld: !this.state.isWorld
        })
    };

    render() {
        
        const {
          cities,
        } = this.props;

        return (
            <header>
                <HeaderTopMenu/>
                <ul className={style.header}>
                    <li><a href="" onClick={this.handleClick}>Cities of the Ukraine</a></li>
                    <li><a href="" onClick={this.handleClick}>Cities of the World</a></li>
                </ul>
                <div className={this.state.isUkraine ? style.hide : style.sitiesUkraine}>
                   {cities.urainianСities.map((city, index) => (
                       <NavLink to='/'>{city.city}</NavLink>
                   ))}
                </div>
                <div className={this.state.isWorld ? style.hide : style.sitiesWorlds}>
                   {cities.worldCities.map((city, index) => (
                       <NavLink to='/'>{city.city}</NavLink>
                   ))}
                </div>
            </header>
        )
    }
}

export default Header;
