import React from 'react';
import styled from 'styled-components';

import FirstSection from './ContactFirst';
import SecondSection from './ContactSecond';

const Contact = () => {
    return (
        <ContactWrapper>
            <div className='contact_first'>
                <FirstSection />
            </div>
            <div className='contact_second'>
                <SecondSection />
            </div>
        </ContactWrapper>
    )
}

const ContactWrapper = styled.div`
    .contact_second {
        position: relative;
        border: 2px solid red;
    }
`;

export default Contact;
