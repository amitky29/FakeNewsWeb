import React from 'react';
import styled from 'styled-components';

import { ImLinkedin } from 'react-icons/im';
import { GrFacebook } from "react-icons/gr";

const NameCard = ({img,Name,info,linkedin,fb}) => {
    return(
        <NameCardWrapper img={img}>
            <div className="image">
            </div>
            <div className='info_part'>
                <div className="name">
                    <h3>{Name}</h3>
                </div>
                <div className="info">
                    <p>{info}</p>
                </div>
            </div>
            <div className='social_pr_link'>
                <a href={linkedin} target='_blank'><ImLinkedin /></a>
                <a href={fb} target='_blank'><GrFacebook /></a>
            </div>
        </NameCardWrapper>
    )
}

const NameCardWrapper = styled.div`
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    position: relative;
    .image{
        background:url(${props=>props.img}) center/cover no-repeat;
        width: 150px;
        height: 140px;
        background-size: 150px;
    }
    .info_part{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        padding:10px;
    }
    .name{
        margin-bottom:5px;
    }
    .info{
        text-align: center;
        word-wrap:wrap;
        letter-spacing:1px;
        width: 80%;
    }
    .social_pr_link {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 5px;
        right: 10px;
    }
    a {
        text-decoration: none;
        color: skyblue;
        font-size: 18px;
    }
`;

export default NameCard;