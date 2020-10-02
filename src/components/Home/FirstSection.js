import React from 'react';
import styled from 'styled-components';

import SmallButton from '../../shared/components/Button/SmallButton';

import Virus from '../../images/virus.svg';
import tool from '../../images/settings.svg';
import stop from '../../images/stop.svg';
import suit from '../../images/safetysuit.svg';
import first from '../../images/goldmedal.svg';
import home_first from '../../images/home_first_bg.jpg';

const FirstSection = () => {
    return (
            <HomeFirstSectionWraper img={home_first}>
                <div className='h_f_f'>
                    <div className='h_f_f_title'>
                        <h1>
                            <span>Fake </span>
                            <del><span>News </span></del>
                            <span>Virus</span>
                        </h1>
                    </div>
                    <div className='h_f_f_img_container'>
                        <div className='h_f_f_i_c_para'>
                            <p>The world has been battling a deluge of misinformation and influence operations for a long time now.</p>
                        </div>
                        <img src={Virus} height='100px' width='100px' />
                    </div>
                    <div className='home_small_button'>
                        <SmallButton title='More Info' link='/info' />
                    </div>
                </div>
                <div className='h_f_s'>
                    <div className='h_f_s_img'>
                        <img src={first} height='50px' width='50px' />
                        <img className='tool_spin' src={tool} height='50px' width='50px' />
                    </div>
                    <div className='h_f_s_title'>
                        <h1>First Website to Check Fake News</h1>
                    </div>      
                    <div className='home_small_button'>
                        <SmallButton title='What we do & who are we?' link='/about' />
                    </div>          
                </div>
                <div className='h_f_t'>
                    <div className='h_f_t_para'>
                        <h1>Stop it From spreading</h1>
                    </div>
                    <div className='h_f_t_img'>
                        <img src={stop} height='80px' width='80px'/>
                        <img src={suit} height='80px' width='80px'/>
                    </div>
                    <div className='home_small_button'>
                        <SmallButton title='Learn how we do Below.. ' link='/' />
                    </div>
                </div>
            </HomeFirstSectionWraper>
    )
}

const HomeFirstSectionWraper = styled.div`
    .h_f_f_title, .h_f_s_title,.h_f_t_para, span {
        font-family: var(--boldTitle);
        color: var(--darkGreyShade);
    }
    del {
        color: red;
    }
    .home_small_button {
        margin-top: 20px;
        padding-bottom: 10px;
    }
    .h_f_s {
            background: linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.2)), url(${props => props.img}) center/cover no-repeat;
    }

    /* ***************Desktop Display *********************/
    
    @media screen and (min-width: 900px) {
        display: flex;
        justify-content: center;
        align-items: center;
        .h_f_f {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            /* border: 2px solid green; */
            flex-basis: 40%;
        }        
        .h_f_f_img_container {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10px;
        }
        .h_f_f_i_c_para {
            word-wrap: wrap;
            font-size: 20px;
            color: var(--darkGreyShade);
            letter-spacing: var(--primaryLetterSpacing);
            /* width: 50%; */
            flex-basis: 60%;
        }
        .h_f_s {
            flex-basis: 30%;
        }
        .h_f_t {
            flex-basis: 35%;
        }
        .h_f_t_img {
            padding: 10px;
        }
        .h_f_t, .h_f_s {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
        }
        .h_f_t, .h_f_f, .h_f_s {
            /* border: 2px solid red; */
            margin: 10px;
            padding: 10px;
            box-shadow: 1px 2px 4px 1px rgba(0,0,0,0.2);
            height: 300px;
            width: 350px;
            /* background: whitesmoke; */
        }
        .h_f_s_title {
            color: var(--primaryTitleColor);
        }

    }
    /* ******************************************Mobile Display****************************************** */
    @media screen and (max-width: 900px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .h_f_s, .h_f_f, .h_f_t {
            margin: 10px;
            margin-bottom: 20px;
            padding: 8px;
        }
        .h_f_f {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.2);
        }
        .h_f_f_img_container {
            display: flex;
            flex-direction: column-reverse;
            justify-content: center;
            align-items: center;
        }
        .h_f_f_i_c_para {
            word-wrap: wrap;
            text-align: center;
            padding: 10px;
            font-size: 18px;
            font-weight: bolder;
        }
        .h_f_s, .h_f_t {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.2);
        } 
    }
    .h_f_s_img {
        height: 70px;
    }
    .tool_spin {
        overflow-x: hidden;
        animation-name: spin;
        animation-duration: 4000ms;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }
    @keyframes spin {
    from {
        transform:rotate(0deg);
        }
    to {
        transform:rotate(360deg);
        }
    }

`;

export default FirstSection;
