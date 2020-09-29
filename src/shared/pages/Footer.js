import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Footer = () => {
    let date = new Date().getFullYear();

    return (
        <FooterWrapper>
            <div className='footer_container'>
                <div className='footer_text'>
                    <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} />
                    <span>{ date }</span>
                    <span className='company'>FAKENEWS CHECKER</span>
                    <span>|</span>
                </div>
                <div className='footer_link'>
                    <span>Design & Build By</span>
                    <span><a className='f_link prabweb' target='_blank' href='https://prabweb.netlify.app'>PRAB WEB</a></span>
                    <span>|</span>
                    <span><Link to='' className='f_link privacy'>Privacy</Link></span>
                </div>
            </div>
        </FooterWrapper>
    )
}


const FooterWrapper = styled.div`
    /* height: 20vh; */
    background: black;
    color: whitesmoke;

    .footer_container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
    .footer_text, .footer_link {
        padding: 15px 3px;
    }
    span {
        padding: 5px;
    }
    .f_link {
        text-decoration: none;
    }
    .prabweb {
        /* color: var(--complimentaryYellow); */
        color: red;
    }
    .privacy {
        color: whitesmoke;
    }
    .company {
        color: red;
    }
`;
export default Footer;