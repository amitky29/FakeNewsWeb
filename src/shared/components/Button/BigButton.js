import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BigButton = ({text, link}) => {
    return (
        <BigButtonWrapper>
            <div className='big_button'>
                <Link className='big_link' to={link}>{text}</Link>
            </div>
        </BigButtonWrapper>
    )
}

const BigButtonWrapper = styled.div`
    .big_button {
        margin-top: 10px;
        background: lightblue;
        padding: 10px;
        border-radius: 5px;
    }
    .big_link {
        text-decoration: none;
        font-weight: bolder;
        font-size: 20px;
    }
    .big_button:hover {
        .big_link {
            color: orange;
        }
        background: grey;
    }
`;

export default BigButton;
