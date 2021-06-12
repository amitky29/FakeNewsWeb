import React, { useEffect, useState } from "react";
import styled from "styled-components";


const Percentage = (props) => {

    var color = 'red';
    if (props.completed > 70) {
        color = 'linear-gradient(to right, #e10c0c, #e15400, #dd7b00, #d79c00, #d0ba2c, #c8c733, #bed43f, #b1e14e, #9ce43d, #82e72c, #5ee919, #08ec00);';
    }
    else if(props.completed < 71 && props.completed > 45){
        color = 'linear-gradient(to right, #f02a2a, #f66700, #ef9700, #ddc300, #c0eb12);';
    }
    else {
        color = 'red';
    }
    
    return (
    <PercentageWrapper bgcolor={props.bgcolor} completed={props.completed} color={color} >
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
        /* background-image: ${props => props.color}; */
        background: ${props => props.color};
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