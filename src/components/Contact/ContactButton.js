import React from 'react';
import styled from 'styled-components';

const ContactButton = (props) => {
    return (
        <ContactButtonWrapper>
            <input type='submit' value={props.text} /> 
        </ContactButtonWrapper>
    )
}

const ContactButtonWrapper = styled.div`
    input[type=submit] {
        border: 1px solid rgba(0,0,0,0.4);
        padding: 7px;
        background: transparent;
        color: white;
        font-size: 12px;
        font-weight: bolder;
        text-transform: uppercase;
        background: rgb(0, 0, 77);
    }
    input[type=submit]:hover {
        background-color: whitesmoke;
        border: 2px solid rgb(0,0,77);
        color: rgb(0,0,77);
    }
`;

export default ContactButton;
