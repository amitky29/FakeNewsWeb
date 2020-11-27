import React from 'react';
import styled from 'styled-components';

import FakeImg from '../../images/fake-news.svg';

const FirstPart = () => {
    return (
        <FirstPartWrapper img={FakeImg}>
            <div className="first">
                <div className="first_top">
                    <div className='dot'></div>
                    <div className='dot'></div>
                    <div className='line'></div>
                    <div>
                        <h1>About FNC</h1>
                    </div>
                    <div className='line'></div>
                    <div className='dot'></div>
                    <div className='dot'></div>
                    
                </div>
                <div className="first_bot">
                    <p>Fake news is Increasing at tremendous rate, more than virus spread and It's getting too dangerous for society as well. We are here to continuously developing and upgrading a tool which can help to detect fake news!</p>
                    <p>We are bunch of young developers who are working on tool to find the solution.</p>
                    
                </div>
            </div>
        </FirstPartWrapper>

    )
}

const FirstPartWrapper = styled.div`
.first_top {
    font-family: var(--boldTitle);
    
}    

    /* ***************Desktop Display *********************/
    
    @media screen and (min-width: 900px) {
        display: flex;
        justify-content: center; 
        align-items: center; 
        width: 70vw;
        .first {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            /* border: 2px solid green;  */
            background: linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url(${props => props.img}) center/cover no-repeat;
            /* background-size: 200px;  */
        }     
        .first_top, .first_bot {
            text-align: center;
            margin: 10px;
        }  
        .first_bot {
            letter-spacing: 3px;
            font-size: 18px;
            color: black;
            font-weight: bolder;
        }    
        .first_top {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }
        .dot {
            width: 8px;
            height: 8px;
            background: red;
            border-radius: 100%;
            margin: 3px;
        }
        .line {
            background: lightgrey;
            width: 40px;
            height: 2px;
            border-radius: 100%;
        }
}
@media screen and (max-width:900px){
    .first{
        text-align:center;
    }
}
`;

export default FirstPart;