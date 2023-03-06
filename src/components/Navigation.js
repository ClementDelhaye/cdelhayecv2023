import React from 'react';
import { NavLink } from 'react-router-dom';
const Navigation = () => {

    return (
        <div className='sidebar'>
            <div className='id'>
                <div className='idContent'>
                    <img src="./media/moi.png" alt="profil-pic" />
                    <h3>DELHAYE Clément</h3>
                </div>
            </div>

            <div className='navigation'>
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="navActive">
                            <i className='fas fa-home'></i>
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/competences" activeClassName="navActive">
                            <i className='fas fa-graduation-cap'></i>
                            <span>Compétences</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/portfolio" activeClassName="navActive">
                            <i className='fas fa-images'></i>
                            <span>Porfolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/contact" activeClassName="navActive">
                            <i className='fas fa-address-book'></i>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/login" activeClassName="navActive">
                            <i className='fas fa-address-book'></i>
                            <span>Se connecter</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="socialNetwork">
                <ul>
                    <li>
                        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"><i className='fab fa-linkedin'></i></a>
                    </li>
                    <li>
                        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"><i className='fab fa-github'></i></a>
                    </li>
                    <li>
                        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"><i className='fab fa-twitter'></i></a>
                    </li>
                </ul>
                <div className="signature">
                    <p>DELHAYE Clément - Feb 2023</p>
                </div>
            </div>
        </div >

    );
};

export default Navigation;