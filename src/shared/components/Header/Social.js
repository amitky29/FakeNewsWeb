import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import styled from 'styled-components';

const Social = () => {
    return (
        <SocialWrapper>
            <ul className='social_container'>
                <li>
                    <a target='_blank' href='https://www.facebook.com' className='icon'><FaFacebook /></a>
                </li>
                <li>
                    <a target='_blank' href='https://www.facebook.com' className='icon'><GrInstagram /></a>
                </li>
                {/* <li>
                    <Link to='https://www.facebook.com' className='icon'>< FaTwitter /></Link>
                </li> */}
            </ul>
        </SocialWrapper>
    )
}

const SocialWrapper = styled.div`
    .social_container {
        list-style: none;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .icon {
        padding: 0 6px;
        /* color: var(--mainWhite); */
        color: red;
    }
    li a {
        text-decoration: none;    
    }

    .icon:hover {
        color: var(--complimentaryYellow);
    }
    
`;
export default Social;
