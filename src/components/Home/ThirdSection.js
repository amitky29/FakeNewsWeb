import React from 'react';
import styled from 'styled-components';

import ThirdCard from './ThirdCard';
import Img from '../../images/fight.svg';

import Data from '../../data/Home/ThirdSectionData';


const ThirdSection = () => {
    return (
        <ThirdSectionWrapper>
            <div className='third_section_first'>
                <h1>We say it as <span>Virus !</span> Why ?</h1>
            </div>
            <div className='third_section_second'>
                {/* <div className='t_s_s_left'>
                    <h1>Areas affetected by this virus</h1>
                </div> */}
                <div className='t_s_s_right'>
                <h1 className='t_s_s_right_para'>Areas affected by this virus</h1>
                {
                    Data.map(p => {
                        return(
                            <div className='t_s_s_single_card'>
                                <ThirdCard title={p.title} img={p.img} para={p.para} link={p.link} />
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </ThirdSectionWrapper>
    )
}

const ThirdSectionWrapper = styled.div`
    background: rgb(236,151,31);
    background: linear-gradient(180deg, rgba(236,151,31,1) 0%, rgba(107,92,92,1) 0%, rgba(25,23,23,1) 95%);
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .t_s_s_right_para {
        color: white;
        word-wrap: wrap;
        width: 280px;
        margin: 15px;
        padding: 15px;
        /* margin-right: 28px; */

    }
    .third_section_first {
        color: whitesmoke;
        span {
            color: yellow;
        }
        padding: 20px;
        margin-bottom: 30px;
    }
    /* **********Desktop********** */
    @media screen and (min-width: 900px) {
        padding-top: 20px;
        .third_section_second {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            width: 90vw;
        }
        .t_s_s_left {
            flex-basis: 30%;
            color: whitesmoke;
            padding-top: 15px;
        }
        .t_s_s_right {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
        }
        .t_s_s_single_card {
            margin: 15px;
            padding: 15px;
        }
    }

    /* ********MOBILE******** */
    @media screen and (max-width: 900px) {
        .t_s_s_right {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        } 
        .t_s_s_single_card {
            margin: 15px;
            padding: 15px;
        }
    }
`;

export default ThirdSection;
