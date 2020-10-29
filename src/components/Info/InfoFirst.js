import React from 'react'
import styled from "styled-components";
import Fakeback from "../../images/fake.svg";

const InfoFirst = () => {
    return (
        <InfoFirstWrapper img={Fakeback}>
            <div className="fmain">
                <div className="first">
                    <div className="first_title">
                        <h1>--Fake News Checker--</h1>
                    </div>
                    <div className="first_para">
                        <p>Fake news checker is a tool specifically developed to check the truth percent of a particular news.
                            Fake news checker is a tool specifically developed to check the truth percent of a particular news
                            Fake news checker is a tool specifically developed to check the truth percent of a particular news</p>
                    </div>

                </div>
            </div>
        </InfoFirstWrapper>
    )
}
const InfoFirstWrapper=styled.div`
    .fmain{
        margin-top:10px;
        padding:10px;
    }
    .first_title{
        font-family:Verdana, Geneva, Tahoma, sans-serif;
        text-align:center;
        margin:10px;
        color:black;
    }
    .first{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:75vw;
    /* height:17vw; */
    background: linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url(${props => props.img}) center/cover no-repeat;
    box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.4);
    padding: 20px;
    margin :10px;
    
    }
    .first_para{
        text-align:center;
        margin:10px;
        letter-spacing:3px;
        font-size: 18px;
        color:rgba(0,0,0,0.8);
        font-weight:bolder;
    }
    @media screen and (max-width: 900px) {
        .first {
            width: 100vw;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
`;
export default InfoFirst
