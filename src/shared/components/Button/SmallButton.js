import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SmallButton = ({title, link}) => {
    return (
        <SmallButtonWrapper>
            <div className='small_button_container'>
                <Link to={link} className='s_b_link'>{title}</Link>
            </div>
        </SmallButtonWrapper>
    )
}

const SmallButtonWrapper = styled.div`
    .s_b_link {
        text-decoration: none;
        padding: 10px;
        font-size: 18px;
        color: white;
        font-weight: bolder;
    }
    .small_button_container {
        overflow-y: hidden;
        box-shadow:inset 0px 1px 3px 0px #91b8b3;
	    /* background:linear-gradient(to bottom, #768d87 5%, #6c7c7c 100%); */
        background: linear-gradient(to bottom, #504a4a 40%, orange 100%);
        background-color:#768d87;
        border-radius:5px;
        padding: 5px;
    }
    .small_button_container:hover {
        /* background:linear-gradient(to bottom, #6c7c7c 5%, #768d87 100%); */
        background: linear-gradient(to bottom, red 20%, grey 100%);
        background-color:#6c7c7c;
    }
`;

export default SmallButton;
