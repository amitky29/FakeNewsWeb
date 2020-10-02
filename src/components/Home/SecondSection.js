import React from 'react';
import styled from 'styled-components';

import dancing from '../../images/dancing.svg';
import question from '../../images/question.svg';

import BigButton from '../../shared/components/Button/BigButton';

const SecondSection = () => {
    return (
        <SecondSectionWrapper right_img={dancing}>
            <div className='second_section_container'>
                <div className='s_s_c_inner'>
                    <div className='s_s_c_i_title'>
                        <h1>Wanna stop it From spreading ? <span>Try our Free Tool !</span></h1>
                    </div>
                    <div className='s_s_c_i_content'>
                        <div className='s_s_c_i_left'>
                            <h1>How?</h1>
                            <img src={question} height="100px" width="100px" />
                        </div>
                        <div className='separator'></div>
                        <div className='s_s_c_i_right'>
                            <div className='s_s_c_i_r_title'>
                                <h1>Simple! you got 2 Options..</h1>
                            </div>
                            <div className='s_s_c_i_r_content'>
                                <div className='s_s_c_i_r_c_left'>
                                    <div className='s_s_c_i_r_c_title options'>
                                        <h1>API Integration</h1>
                                    </div>
                                    <div className='s_s_c_i_r_c_content'>
                                        <h3>Register with us, Get your API.</h3>
                                        <h3>Integrate with your News website or component.</h3>
                                        <h3>Filters out the candidate news to appear on Your website.</h3>
                                        <h3>Increases reliability & trustworthiness of your website!</h3>
                                    </div>
                                    <BigButton link={'/contact'} text='Contact Us'/>
                                </div>
                                <div className='s_s_c_i_r_c_right'>
                                    <div className='s_s_c_i_r_c_title options'>
                                        <h1>Manual Checking</h1>
                                    </div>
                                    <div className='s_s_c_i_r_c_content'>
                                        <h3>Visit our website.</h3>
                                        <h3>Navigate to Tool page from Menu.</h3>
                                        <h3 className='s_s_c_i_r_c_different'>OR Click on the Button to Check it Manually Now!!!!</h3>
                                        <h3>Check news is Real or not!</h3>
                                    </div>
                                    <BigButton link={'/info'} text='Fake News Checker'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SecondSectionWrapper>
    )
}

const SecondSectionWrapper = styled.div`
    margin-bottom: 0;
    .second_section_container {
        width: 100vw;
        background: #6b5c5c;
        margin: 2rem;
        margin-bottom: 0;
    }
    
    .s_s_c_i_title h1 {
        color: var(--darkGreyShade);
    }
    .s_s_c_i_title span{
        color: violet;
    }
    .s_s_c_i_r_content {
        background: url(${props => props.right_img}) center no-repeat;
        background-size: 200px;
    }
    .options {
        color: green;
    }

    /* ***************Desktop**************** */
    @media screen and (min-width: 800px) {
        .s_s_c_inner {
            background: white;
            clip-path: polygon(0 0, 100% 0, 100% 89%, 0% 100%);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 40px;
        }
        .s_s_c_i_content {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            margin: 40px;
        }
        img {
            height: 170px;
            width: 170px;
        }
        .separator {
            height: 180px;
            width: 2px;
            border-radius: 100%;
            background: black;
            margin: 20px;
        }
        .s_s_c_i_right {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .s_s_c_i_r_content {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: flex-start;
        }
        .s_s_c_i_r_c_left, .s_s_c_i_r_c_right {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 20px;
        }
    }
    
    /* ***************Mobile**************** */
    @media screen and (max-width: 800px) {
        .s_s_c_inner {
        background: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 40px;
        }
        
        .s_s_c_i_content {
            width: 90vw;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            /* margin: 20px; */
            padding: 20px;
            text-align: center;
            margin-right: 40px;
        }
    }
`;

export default SecondSection;
