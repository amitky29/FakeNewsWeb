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

    @media screen and (min-width: 1000px) {
        .contact_second {
            position: relative;
            /* border: 2px solid red; */
        }
    }
    @media screen and (max-width: 1000px) {
        .contact_second {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
`;

export default Contact;
