import React from 'react';
import styled from 'styled-components';

import ContactCard from './ContactCard';

const ContactSecond = () => {
    return (
        <ContactSecondWrapper>
            {/* <ContactCard /> */}
        </ContactSecondWrapper>
    )
}
const ContactSecondWrapper=styled.div`
    background: white;
    width: 100vw;
    min-height: 50vh;
    @media screen and (max-width: 1000px) {
        display: none;
    }
`;

export default ContactSecond;

