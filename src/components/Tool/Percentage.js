import React, { useEffect, useState } from "react";
import styled from "styled-components";


const Percentage = (props) => {

    
    return (
    <PercentageWrapper bgcolor={props.bgcolor} completed={props.completed} >
        <div className='containerStyles'>
            <div className='fillerStyles'>
                <span className='labelStyles'>{`${props.completed}%`}</span>
            </div>
        </div>
    </PercentageWrapper>
    
  );

};

const PercentageWrapper = styled.div`
    .containerStyles {
        height: 20;
        width: 100%;
        background: #e0e0de;
        border-radius: 10px;
        margin: 50;
        /* transition: width 2s ease-in-out; */
    }
    .fillerStyles {
        height: 100%;
        width: ${props => props.completed}%;
        background: ${props => props.bgcolor};
        border-radius: inherit;
        text-align: right;
        transition: width 2s ease-in-out;
    }
    .labelStyles {
        padding: 5;
        color: white;
        font-weight: bold;
    }
`;

export default Percentage;