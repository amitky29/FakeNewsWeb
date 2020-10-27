import React from 'react';
import styled from 'styled-components';

import MainContact from '../components/Contact/Contact';

const Contact = () => {
    return (
        <ContactWrapper>
            <div className='main_start'>
                <MainContact />
            </div>
        </ContactWrapper>

    )
}

const ContactWrapper = styled.div`
    /* background: black;
    background: rgb(229,238,240);
background: linear-gradient(356deg, rgba(229,238,240,1) 0%, rgba(16,16,17,1) 87%); */
background: rgb(204,128,21);
background: linear-gradient(180deg, rgba(204,128,21,1) 0%, rgba(0,0,0,1) 0%, rgba(60,53,53,1) 86%);
    z-index: -40;
`;

export default Contact;
