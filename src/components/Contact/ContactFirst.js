import React from 'react';
import styled from 'styled-components';

import { GrLocation } from 'react-icons/gr';
import ContactCard from './ContactCard';


const ContactFirst = () => {
    return (
        <ContactFirstWrapper>
            <div className='contact_first'>
                <h2>Get In Touch</h2>
                <p>Lorem ipsum dollar Lorem ipsum dollar Lorem ipsum dollar Lorem ipsum dollar Lorem ipsum dollar</p>
            </div>
            <div className='contact_second'>
                <GrLocation />
            </div>
            <div className='contact_card'>
                <ContactCard />
            </div>

        </ContactFirstWrapper>
    )
};

const ContactFirstWrapper = styled.div`
    @media screen and (min-width: 1000px) {
        width: 70vw;
        height: 50vh;
    }
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .contact_first {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }
    h2 {
        color: whitesmoke;
        letter-spacing: 2px;
        font-weight: bold;
        font-size: 28px;
    }
    p {
        font-size: 15px;
        font-weight: bold;
        color: rgba(255,255,255,0.8);
        width: 40%;
        word-wrap: wrap;
    }
    .contact_second {
        /* color: #cc8015; */
        font-size: 25px;
        background: yellow;
        padding: 12px;
        border-radius: 100%;
    }
    @media screen and (max-width: 1000px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;     
        .contact_first {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: 12px;
        }   
        p {
            width: 90vw;
            margin: 0 auto;
            text-align: center;
            padding: 25px;
        }
        .contact_second {
            margin: 20px;
        }
        
    }
`;

export default ContactFirst;
