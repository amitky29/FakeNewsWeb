import React, { Component } from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import Logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

// import Menu from './Menu';
import Menu from '../components/Header/Menu';
import Social from '../../shared/components/Header/Social';


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prevScrollpos: window.pageYOffset,
            visible: true,
            sideBarOpen: false,
        };
    }
    componentDidMount() {
        window.addEventListener('scroll',this.handleScroll);
        document.getElementById('nav_bar_icon').addEventListener('click',this.handleSideBar);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll',this.handleScroll);
        document.getElementById('nav_bar_icon').addEventListener('click',this.handleSideBar);
    }

    handleScroll = () => {
        const { prevScrollpos } = this.state;
        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollpos > (currentScrollPos);
        this.setState({
            prevScrollpos: currentScrollPos,
            visible
        });
    };
    handleSideBar = () => {

        // console.log('clcikeed', this.state.sideBarOpen)
        this.setState({
            sideBarOpen: !this.state.sideBarOpen,
        });
    };

    render() {
        return (
            <NavbarWrapper open={this.state.sideBarOpen}>
                <nav className={classNames('navbar', { 'navbar--hidden': !this.state.visible})} >
                    <div className='nav_container'>
                        <div className='logo_container'>
                            <Link to='/'><img src={Logo} width='60px' height='40px' /></Link>
                        </div>
                        <div className='mobile_title'>
                            <h2>FAKENEWS CHECKER</h2>
                        </div>
                        <div className='mobile_nav' open={this.state.sideBarOpen} id='nav_bar_icon'>
                            <FaBars />
                        </div>
                        <div className='menu_container' onClick={(e) => this.handleSideBar(e)}>
                            <Menu open={this.state.sideBarOpen} handle={this.handleSideBar}/>
                        </div>
                        <div className='social_container'>
                            <Social />
                        </div>
                    </div>
                </nav>
            </NavbarWrapper>
        )
    }

}

const NavbarWrapper = styled.div`
    .navbar {
        width: 100%;
        padding: 10px;
        position: fixed;
        top: 0;
        transition: top var(--fastTransition);
        background: var(--mainBlack);
        border-bottom: 3px solid var(--complimentaryYellow);
        border-bottom: 3px solid red;
        z-index: 1;
    }
    .navbar--hidden {
        top: -50px;
    }
    .mobile_title,.mobile_nav {
        display: none;
    }
    .nav_container {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .menu_container {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .social_container {
        display: flex;
        justify-content: space-around;
        align-items: center;
        /* border: 1px solid darkred; */
        border-radius: 5px;
        background: white;
        padding: 1px 5px;
    }

    @media screen and (max-width: 860px) {
        .social_container {
            display: none;
        }
    }

    @media screen and (max-width: 750px) {
        .nav_container {
            justify-content: space-between;
        }
        .logo_container {
            padding: 0 10px;
            z-index: 50;
        }
        .mobile_nav {
            z-index: 100;
            cursor: pointer;
            display: block;
            font-size: 20px;
            color: white;
            padding: 0 30px;
            color: ${props => props.open ? 'red' : 'var(--mainWhite)'};
        }
        .mobile_title {
            font-size: 12px;
            display: block;
            color: var(--complimentaryYellow);
            font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
        }
    }
`;

export default Navbar;