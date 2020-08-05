import React from 'react';
import bruflix from '../../bruflix.png';
import './Menu.css';
import Button from '../Button';

// import ButtonLink from './components/ButtonLink';


function Menu() {
    return (
        <nav className="Menu">
        <a href="/">    
            <img className ="bruflix" src={bruflix} alt="Bruflix logo"/>
        </a>

        <Button as="a" className="ButtonLink" href="/">
            Novo vídeo
        </Button>

        </nav>
    );
}

export default Menu;