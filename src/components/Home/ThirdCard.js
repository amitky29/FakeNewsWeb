import React from 'react';
import styled from 'styled-components';

const ThirdCard = ({title, img, para}) => {
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
        </ThirdCardWrapper>
    )
}

const ThirdCardWrapper = styled.div`
    border: 1px solid rgba(255,255,255,0.3);
    border-bottom: transparent;
    border-radius: 10px;
    color: whitesmoke;
    width: 250px;
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
