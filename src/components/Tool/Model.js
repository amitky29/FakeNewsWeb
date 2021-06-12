import React, { useEffect, useState } from 'react';
import styled from "styled-components";

import Bar from './Bar';
import Percentage from './Percentage';
// import PercentageCircle from 'reactjs-percentage-circle';


const Model = (props) => {

    var output = {0:'business',4:'tech',2:'politics',3:'sport',1:'entertainment'}
    console.log(props.res);
    // var h1_clasi = props.res[0];
    var h1_clasi = props.res['NewsC']['result'][0];
    var h2_clasi = props.res['NewsC']['result'][1];
    var h1_clasi_pr = props.res['NewsC']['probability'][0];
    var h2_clasi_pr = props.res['NewsC']['probability'][1];
    var sarc = props.res['Sarcasm']['result'];
    var sarc_pr = parseInt(parseFloat(props.res['Sarcasm']['probability'][0])*100)
    var h1_spam = props.res['Spam']['result'][0];
    var h2_spam = props.res['Spam']['result'][1];
    var h1_spam_pr = parseInt(parseFloat(props.res['Spam']['probability'][0])*100);
    var h2_spam_pr = parseInt(parseFloat(props.res['Spam']['probability'][1])*100); 
    var fake = props.res['Fake']['result']
    var fake_pr = 100 - parseInt(parseFloat(props.res['Fake']['probability'][0])*100)
    // var h2_spam = props.res[5];
    // var h1_prob_clas = props.res[6];
    // var h2_prob_clas = props.res[7];
    // var h1_fake = props.res[8][0];
    // var h1_prob = props.res[9][0];
    console.log(output[h1_clasi], output[h2_clasi])
    var spam_pr = 0
    if (parseInt(h1_spam) == 0 && parseInt(h2_spam) == 1) {
        spam_pr = (0.7*h2_spam_pr + 0.3*h1_spam_pr)*100;
    }
    else if (parseInt(h1_spam) == 1 && parseInt(h2_spam) == 0) {
        spam_pr = (0.7*h1_spam_pr + 0.3*h2_spam_pr)*100;
    }
    else {
        if (h1_spam_pr > h2_spam_pr) {
            spam_pr = (0.98*h1_spam_pr + 0.02*h2_spam_pr)*100;
        }
        else if (h2_spam_pr > h1_spam_pr) {
            spam_pr = (0.98*h2_spam_pr + 0.02*h1_spam_pr)*100;
        }
        else {
            spam_pr = 100*h1_spam_pr;
        }
    }

    var simi_pr = 0
    if (h1_clasi === h2_clasi) {
        var simi_pr = 100
    }
    else {
        if (h1_clasi_pr[h1_clasi] + h2_clasi_pr[h1_clasi] > 95) {
            var simi_pr = 98
        }
        if (h2_clasi_pr[h2_clasi] + h1_clasi_pr[h1_clasi] > 95) {
            var simi_pr = 98
        }
        else {
            var simi_pr = 50
        }
    }

    if (h1_spam > h2_spam) {
        spam_pr = h1_spam
    }
    else {
        spam_pr = h2_spam
    }


    // Reliability
    // if ((spam_pr > 50 || fake_pr >50) && (simi_pr < 50) &&)

    // const completeHandler = () => {
    //     // setCompleted((100-(reli)));
    //     // // console.log('COmpl: ', completed);
    // }
    var reli = 0
    if ((spam_pr > 80) && (fake_pr < 65) && (fake_pr > 50)) {
        reli = 0.6*spam_pr + 0.3*fake_pr + 0.05*simi_pr + 0.05*sarc_pr;
    }
    else if ((spam_pr > 50) && (fake_pr < 65) && (fake_pr > 50)) {
        reli = 0.3*spam_pr + 0.5*fake_pr + 0.1*simi_pr + 0.1*sarc_pr;
    }
    else if ((fake_pr >= 65) && (simi_pr == 50 || simi_pr > 50)) {
        reli = 0.8*fake_pr + 0.2*spam_pr;
    }
    else if ((fake_pr < 65) && (spam_pr > 80)) {
        reli = 0.7*spam_pr + 0.3*fake_pr
    }
    else if ((fake_pr < 60) && (sarc_pr > 85)) {
        reli = 0.5*sarc_pr + 0.3*fake_pr + 0.2*spam_pr;
    }
    else {
        reli = 0.5*fake_pr + 0.4*spam_pr + 0.05*spam_pr + 0.05*sarc_pr;
    }
    reli = 100 - parseInt(reli);
    
    console.log('Comp: ', reli);
    const [completed, setCompleted] = useState(0);
    const [display, setDisplay] = useState('visible');
    useEffect(() => {
        setInterval(() => setCompleted(reli), 2000);
        // setInterval((completeHandler) => console.log(completed), 1500)
    }, [completed, display]);

    const displayHandler = () => {
        // console.log('display ', display);
        setDisplay(display => 'hidden');
        // console.log('display ', display);
    }

    return (
        <ToolWrapper display={display}>
            <div className='result_container'>
                <div className='title'>
                    <h2>Analysis</h2>
                </div>
                <div className='close_btn'><span className='btn' onClick={displayHandler}>close</span></div>
                <div className='analysis'>
                    <div className='reliable'>
                        <h3>Insights</h3>
                    </div>
                    <div className='insights'>
                        <Bar name="Similarity" perc={simi_pr} />
                        {/* <PercentageCircle percent={80}></PercentageCircle> */}
                        <Bar name="Sarcasm" perc={sarc_pr} />
                        <Bar name="Spam" perc={spam_pr} />
                        {/* <Bar name="Hate Speech" perc={90} /> */}
                        <Bar name="Fake Pattern" perc={fake_pr} />
                        {/* <Bar name="Fake Pattern" perc={67} /> */}


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
    visibility: ${props => props.display};
    /* border: 1px solid green; */
    transform: translate(-50%, -50%);
    background: lightskyblue;
    box-shadow: 1px 1px 18px 5px rgba(0,0,0,0.93);
    -webkit-box-shadow: 1px 1px 18px 5px rgba(0,0,0,0.93);
    -moz-box-shadow: 1px 1px 18px 5px rgba(0,0,0,0.93);
    z-index: 100;    
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
        right: 3px;
        font-weight: bold;
        text-transform: uppercase;
        /* text-align:center; */
        padding: 2px;
        color: red;
        font-size: 12px;
    }
    .btn {
        cursor: pointer;
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
