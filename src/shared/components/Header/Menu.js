import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';


const Menu = ({ open, handle, visible }) => {
    return (
        <MenuWrapper open = {open} visible = {!visible}>
            <ul className='nav_links'>
                <li>
                    <NavLink to='/' exact onClick={handle}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/info' exact onClick={handle}>
                        Info
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/contact' exact onClick={handle}>
                        Contact
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/about' exact onClick={handle}>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/login' exact onClick={handle}>
                        Login
                    </NavLink>
                </li>
            </ul>
        </MenuWrapper>
    );
}

const MenuWrapper = styled.div`
    .nav_links {
        font-size: 14px;
        font-weight: bolder;
        list-style: none;
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .nav_links a {
        margin: 5px;
        color: var(--mainWhite);
        text-transform: uppercase;
        text-decoration: none;
        padding: 0 12px;
    }

    .nav_links a:hover {
        color: var(--darkGreyShade);
        transition: var(--slowTransition);
    }
    .nav_links a:active,
    .nav_links a.active {
        color: var(--complimentaryYellow);
    }  
    @media screen and (max-width: 860px) {
        /* display: none; */
        z-index: 2;
        
        .nav_links {
            transform: ${props => props.open ? 'translateX(-2%)' : 'translateX(-100%)'};
            /* width: 200px; */
            background: green;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            position: fixed;
            top: var(--navigationHeight);
            top: ${props => props.visible ? '17px': '4.2rem'};
            left: 0;
            border: 2px solid black;
            background: var(--mainBlack);
            /* margin: 0 auto; */
            height: 50vh;
            width: 60vw;
            /* padding-top: 3.5rem; */
            transition: transform var(--slowTransition) ease-in-out; 
        }
    }
`;


export default Menu;
