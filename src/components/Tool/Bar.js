import React from 'react';
import styled from "styled-components";

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const Bar = ({name, perc}) => {
    var color = 'blue';
    if (name == 'Similarity') {
        if (perc > 70) {
            color = '#55a630';
        }
        else if(perc > 45) {
            color = '#f48c06';
        }
        else {
            color = '#d00000';
        }
    }

    if (name == 'Sarcasm') {
        if (perc > 70) {
            color = '#d00000';
        }
        else if(perc > 45) {
            color = '#f48c06';
        }
        else {
            color = '#55a630';
        }
    }
    
    if (name == 'Spam') {
        if (perc > 70) {
            color = '#d00000';
        }
        else if(perc > 45) {
            color = '#f48c06';
        }
        else {
            color = '#55a630';
        }
    }

    if (name == 'Hate Speech') {
        if (perc > 70) {
            color = '#d00000';
        }
        else if(perc > 45) {
            color = '#f48c06';
        }
        else {
            color = '#55a630';
        }
    }

    

    return (
        <BarWrapper>
            {/* <h4>{name} : {perc}</h4> */}
            <div className='name'>
                <h3>{name}</h3>
            </div>
            <div style={{ width: 45, height: 45}} className='circle'>
                <CircularProgressbar value={perc} text={`${perc}%`} strokeWidth={11}  styles={buildStyles({pathColor: `${color}`, textSize: "20px", textColor: 'blue', fontWidth: "bolder"})}/>
            </div>
        </BarWrapper>
    )
}

const BarWrapper = styled.div`
    /* padding: 5px; */
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin: 10px;
    width: 300px;
    /* margin-bottom: 10px; */
    /* width: 100%; */
    box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.4);
    padding: 10px;
    .name {
        padding-right: 20px;
    }
    
`;

export default Bar;
