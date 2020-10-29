import React from 'react';
import styled from "styled-components";
import InfoFirst from '../components/Info/InfoFirst';
import InfoSecond from "../components/Info/InfoSecond";
import InfoThird from '../components/Info/InfoThird';

const Info = () => {
    return (
        <InfoWrapper>
            <div className="main_start info_main">
                <div className="infofirst">
                    <InfoFirst/>
                </div>
                <div className="infosecond">
                    <InfoSecond/>
                </div>
                <div className="infothird">
                    <InfoThird />
                </div>
            </div>
        </InfoWrapper>
        
    )
}

const InfoWrapper=styled.div`
.info_main{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
}
`;
export default Info;
