import React from 'react';
import logoImg from '../assets/logo.png';
import "./Home.css";

// import { Container } from './styles';

function Header() {
  return(
<>
<header className="header">
                <a className="a1" href="./home.html">
                <img src={logoImg} alt=""/>
                </a>
                <nav>
                    <ul className="menu">
                        <li><a href="./home.html">Home</a></li>
                        <li><a href="#">Galeria</a></li>
                        <li><a className="button" href="#">Quero adotar</a></li>
                    </ul>
                </nav>
            </header> 
</>
  );
}

export default Header;