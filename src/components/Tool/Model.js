import React, { useEffect, useState } from 'react';
import styled from "styled-components";

import Bar from './Bar';
import Percentage from './Percentage';
// import PercentageCircle from 'reactjs-percentage-circle';


const Model = (props) => {

    console.log(props.res);
    var h1_clasi = props.res[0];
    var h2_clasi = props.res[1];
    var h1_sarc = props.res[2];
    var h2_sarc = props.res[3];
    var h1_spam = props.res[4];
    var h2_spam = props.res[5];
    var h1_prob_clas = props.res[6];
    var h2_prob_clas = props.res[7];
    var h1_fake = props.res[8][0];
    var h1_prob = props.res[9][0];
    

    const [completed, setCompleted] = useState(0);
    useEffect(() => {
        setInterval(() => setCompleted(90), 2000);
    }, [completed]);

    return (
        <ToolWrapper>
            <div className='result_container'>
                <div className='title'>
                    <h2>Analysis</h2>
                </div>
                <div className='close_btn'>close</div>
                <div className='analysis'>
                    <div className='reliable'>
                        <h3>Insights</h3>
                    </div>
                    <div className='insights'>
                        <Bar name="Similarity" perc={89.9} />
                        {/* <PercentageCircle percent={80}></PercentageCircle> */}
                        <Bar name="Sarcasm" perc={91.3} />
                        <Bar name="Spam" perc={52} />
                        <Bar name="Hate Speech" perc={90} />
                    </div>
                </div>
                <div className='final_result'>
                    <div className='reliable'>
                        <h3>Reliability Percentage</h3>
                    </div>
                    <Percentage bgcolor={'red'} completed={completed} />
                </div>
            </div>
        </ToolWrapper>
    )
}

const ToolWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    /* border: 1px solid green; */
    transform: translate(-50%, -50%);
    background: lightskyblue;
    box-shadow: 1px 1px 18px 5px rgba(0,0,0,0.93);
    -webkit-box-shadow: 1px 1px 18px 5px rgba(0,0,0,0.93);
    -moz-box-shadow: 1px 1px 18px 5px rgba(0,0,0,0.93);    
    .result_container {
        width: 100%;
        padding: 20px;
        /* border: 1px solid black; */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: white;
        
    }
    .insights {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-self: auto;
        align-items: center;
        flex-wrap: wrap;
        
    }
    .close_btn {
        position: absolute;
        top: 0;
        right: 0;
        font-weight: bold;
        text-transform: uppercase;
        /* text-align:center; */
        padding: 2px;
        color: white;
        font-size: 12px;
    }
    .title {
        display: flex;
        justify-content: center;
        font-weight: lighter;
        text-transform: uppercase;
        letter-spacing: 3px;

    }
    .final_result {
        width: 100%;
        padding: 10px;
        margin: 20px;
    }
    .reliable {
        color: black;
        font-weight: bold;
        letter-spacing: 3px;
        padding: 10px;
        text-align: center;
    }
`

export default Model;
