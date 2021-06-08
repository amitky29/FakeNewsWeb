import React from 'react';
import styled from "styled-components";

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Bar = ({name, perc}) => {
    return (
        <BarWrapper>
            {/* <h4>{name} : {perc}</h4> */}
            <div className='name'>
                <h3>{name}</h3>
            </div>
            <div style={{ width: 50, height: 50}} className='circle'>
                <CircularProgressbar value={perc} text={`${perc}%`} strokeWidth={18} />
            </div>
        </BarWrapper>
    )
}

const BarWrapper = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin: 10px;
    width: 300px;
    /* margin-bottom: 10px; */
    /* width: 100%; */
    box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.4);
    padding: 20px;
    .name {
        padding-right: 20px;
    }
    
`;

export default Bar;
