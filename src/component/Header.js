import React from 'react'
import '../App.css'
import logo from '../img/logo2.png'
import { Link } from 'react-router-dom'


const Header = () => {
    return (

        <header id="header" className="header container">
            <div className="container">
                <div className="header__wrap">
                   <Link to='/'><img src={logo} alt="FootballStatistic" className="logo" /></Link> 

                    <ul className="menu">
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/news'>News</Link>
                        </li>
                        <li>
                            <Link to='/leagueStatistic'>Leagues</Link>
                        </li>
                        <li>
                            <Link to='/teamsStatistic'>Teams</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;