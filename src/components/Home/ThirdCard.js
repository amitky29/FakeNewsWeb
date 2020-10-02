import React from 'react';
import styled from 'styled-components';
import { FaGlobe } from 'react-icons/fa';

import { Link } from 'react-router-dom';

const ThirdCard = ({title, img, para, link}) => {
    return (
        <ThirdCardWrapper img={img}>
            <div className='t_c_first'>
                <div className='t_c_logo'>

                </div>
                <div className='t_c_title'>
                    <h3>{title}</h3>
                </div>
            </div>
            <div className='t_c_para'>
                <p>{para}</p>
            </div>
            <div className='icon'>
                {/* <a href='/'><FaGlobe /></a> */}
                <a href={link} target='_blank'>Visit</a>
            </div>
        </ThirdCardWrapper>
    )
}

const ThirdCardWrapper = styled.div`
    position: relative;
    border: 1px solid rgba(255,255,255,0.2);
    border-bottom: transparent;
    border-radius: 10px;
    color: whitesmoke;
    width: 250px;
    
    a:hover {
        color: green;
    }
    a {
        text-decoration: none;
        color: black;
        font-weight: bolder;
        font-size: 10px;
        padding: 2px;
        font-size: 10px;
        letter-spacing: 3px;
    }
    .icon {
        position: absolute;
        top: 0%;
        right:0%;
        padding: 1px;
        background: whitesmoke;
        border: 1px solid rgba(0,0,0,0.3);
    }
    .t_c_logo {
        background: url(${props => props.img}) center/cover no-repeat;
        width: 50px;
        height: 50px;
    }
    .t_c_title {
        padding: 5px;
        font-size: 15px;
        letter-spacing: var(--primaryLetterSpacing);
    }
    .t_c_first {
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .t_c_para {
        padding: 10px;
        font-size: 14px;
        font-weight: bolder;
        text-align: center;
        background: whitesmoke;
        color: rgba(0,0,0,0.8);
    }

`;

export default ThirdCard;
