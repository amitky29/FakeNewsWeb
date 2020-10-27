import React from 'react';
import styled from 'styled-components';
import {BiMessageDetail} from "react-icons/bi";
import { GrLocation } from 'react-icons/gr';
import {MdCall} from "react-icons/md";


const ContactCard = () => {
    return (
        <ContactCardWrapper>
            <div className='card_container'>
                <div className='form_container'>
                    <div className='form_heading'>
                        <h3>Send us a Message</h3>
                        <span><BiMessageDetail /></span>
                    </div>
                    <div className='form'>
                        <form className='form_box'>
                            <div className='form_row'>
                                <span>Enter Name</span><br/>
                                <input type='text'placeholder='Type Here' />
                            </div>
                            <div className='form_row'>
                                <span>Email ID</span><br/>
                                <input type='text'placeholder='Type Here' />
                            </div>
                            <div className='form_row'>
                                <span>Mobile No.</span><br/>
                                <input type='text'placeholder='Type Here' />
                            </div>
                            <div className='form_row'>
                                <span>College</span><br/>
                                <input type='text'placeholder='Type Here' />
                            </div>
                            <div className='form_row'>
                                <span>Message</span><br/>
                                <input type='text'placeholder='Type Here' />
                            </div>
                        </form>
                    </div>
                </div>
                <div className='details_container'>
                    <h3>Contact Information</h3>
                    <div className='deatils_wrapper'>
                        <div className='info'>
                            <span><GrLocation/></span>
                            <h5>D.Y. Patil College of engineering akurdi,411033</h5>
                        </div>
                        <div className='info'>
                            <span><MdCall /></span>
                            <h4>9561286698,9284541883</h4>
                        </div>
                        <div className='info'>
                            <span><BiMessageDetail /></span>
                            <h4>shravanipoman1999@gmail.com</h4>
                        </div>
                    </div>
                </div>
            </div>
        </ContactCardWrapper>
    )
}

const ContactCardWrapper = styled.div`
    /* width: 600px; */
    /* height: 200px; */
    border: 1px solid red;
    background: green;
    position: absolute;
    /* top: -50%; */
    top: 80%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 1;
    h3 {
        color: white;
    }
    .form_heading {
        display: flex;
        flex-direction: row;
        justify-content:space-between;
        align-items:center;
    }
    .form_box {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
    }
    .form_row {
        padding: 10px;
        flex-basis: 50%;
    }
    .card_container {
        min-height: 100% !important;
    }
    input {
        border: none;
        border-bottom: 1px solid rgba(0,0,0,0.3);
        outline: none;
        background: transparent;
        
    }
    .card_container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
    }
    .form_container {
        flex-basis: 60%;
        padding: 20px;
    }
    .details_container {
        flex-basis: 40%;
        flex-grow: 1;
        padding: 20px;
        background: rgb(0, 0, 77);
        width: 100%;
        display: inline-block;
        min-height: 100% !important;

    }
    span {
        padding: 8px;
    }
    .info {
        display: flex;
        align-items: center;
    }
    .deatils_wrapper {
        margin-top: 20px;
    }
`

export default ContactCard;