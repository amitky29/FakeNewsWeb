import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Arrow from "../../images/next.svg";

const InfoThird = () => {
    return (
        <InfoThirdWrapper>
            <div className="itw_container">
                <div className="itw_heading">
                    <h1>Want to know more?</h1>
                </div>
                <div className='itw_info'>
                <div className='itw_button'>
                    <Link to='/contact' className='itw_btn'>
                        Contact Us
                    </Link>
                </div>
                <img className='arrow' src={Arrow} height='40px' width='40px'/>
                </div>
            </div>
        </InfoThirdWrapper>
    )
}
const InfoThirdWrapper=styled.div`
    margin: 20px;
    height: 35vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .itw_info {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .itw_heading {
        font-size: 32px;
        margin: 20px;
    }
    .itw_container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .itw_btn {
        text-transform: uppercase;
        letter-spacing: 2px;
        text-decoration: none;        
        color: white;
        animation-name: color_change;
        animation-duration: 900ms;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
    }

    .itw_button {
        box-sizing: border-box;
        display: inline;
        padding: 12px;
        background:  navy;
        color: white;
        font-size: 23px;
        letter-spacing: 1.3px;
        font-weight: bolder;
        border-radius: 10px;
    }
    .itw_button:hover {
        background: white;
        border: 10px solid navy;
        color: navy;
        font-weight: bolder;
        .itw_btn {
            color: navy;
            animation-duration: 0ms;
        }
    }
    .arrow {
        width: 100px;
        /* margin-left: 2px; */
        animation-name: trans;
        animation-duration: 2000ms;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
    }
    @keyframes trans {
        from {
            transform: translateX(0px);
        }
        to {
            transform: translateX(30px);
            opacity: 0;
        }
    }
    @keyframes color_change {
        0% {
            color: white;
        }
        25% {
            color: red;
        }
        50% {
            color: green;
        }
    }

    @media screen and (max-width: 900px) {
        .itw_heading {
            font-size: 20px;
        }        
    }

`;
export default InfoThird;
