import React, { useEffect, useState } from 'react';
import styled from "styled-components";

import Bar from './Bar';
import Percentage from './Percentage';
// import PercentageCircle from 'reactjs-percentage-circle';


const Model = (props) => {

    // var output = {0:'business',4:'tech',2:'politics',3:'sport',1:'entertainment'}
    var output = {1: 'ENTERTAINMENT', 3: 'POLITICS', 0: 'BUSINESS', 4: 'SCIENCE AND EDU', 2: 'HEALTH & ENV'}
    // console.log(props.res);
    // var h1_clasi = props.res[0];
    var h1_clasi = props.res['NewsC']['result'][0];
    var h2_clasi = props.res['NewsC']['result'][1];
    var h1_clasi_pr = props.res['NewsC']['probability'][0];
    var h2_clasi_pr = props.res['NewsC']['probability'][1];
    var sarc = props.res['Sarcasm']['result'];
    var sarc_pr = parseInt(parseFloat(props.res['Sarcasm']['probability'][0])*100)
    var h1_spam = props.res['Spam']['result'][0];
    var h2_spam = props.res['Spam']['result'][1];
    var h1_spam_pr = parseInt(parseFloat(props.res['Spam']['probability'][0][1])*100);
    var h2_spam_pr = parseInt(parseFloat(props.res['Spam']['probability'][1][1])*100); 
    var fake = props.res['Fake']['result']
    var fake_pr = 100 - parseInt(parseFloat(props.res['Fake']['probability'][0])*100)
    // var h2_spam = props.res[5];
    // var h1_prob_clas = props.res[6];
    // var h2_prob_clas = props.res[7];
    // var h1_fake = props.res[8][0];
    // var h1_prob = props.res[9][0];
    //1 True News, 0 False News

    console.log(output[h1_clasi], output[h2_clasi])
    // console.log(h1_spam_pr, h2_spam_pr)
    var spam_pr = 0
    if (h1_spam == 0 && h2_spam == 1) {
        spam_pr = parseInt((0.7*h2_spam_pr + 0.3*h1_spam_pr));
        // console.log('h2_spampr:', h2_spam_pr, 'h1_spa',h1_spam_pr, 'spampr1: ', spam_pr);
    }
    else if (h1_spam == 1 && h2_spam == 0) {
        spam_pr = parseInt((0.7*h1_spam_pr + 0.3*h2_spam_pr));
        // console.log('spampr2: ', spam_pr);
    }
    else {
        if (h1_spam_pr > h2_spam_pr) {
            // spam_pr = (0.98*h1_spam_pr + 0.02*h2_spam_pr)*100;
            spam_pr = parseInt(1*h1_spam_pr);
            // console.log('spampr3: ', spam_pr);
        }
        else if (h2_spam_pr > h1_spam_pr) {
            spam_pr = parseInt(1*h2_spam_pr);
            // spam_pr = (0.98*h2_spam_pr + 0.02*h1_spam_pr)*100;
            // console.log('spampr4: ', spam_pr);
        }
        else {
            spam_pr = parseInt(1*h1_spam_pr);
            // console.log('spampr5: ', spam_pr);
        }
    }

    var simi_pr = 0
    if (h1_clasi === h2_clasi) {
        var simi_pr = 100
    }
    else {
        if ((output[h1_clasi] == 'POLITICS' && output[h2_clasi] == 'ENTERTAINMENT') || (output[h2_clasi] == 'POLITICS' && output[h1_clasi] == 'ENTERTAINMENT')) {
            var simi_pr = 75;
        }
        if ((output[h1_clasi] == 'POLITICS' && output[h2_clasi] == 'BUSINESS') || (output[h2_clasi] == 'POLITICS' && output[h1_clasi] == 'BUSINESS')) {
            if (fake_pr < 5) {
                spam_pr = parseInt(spam_pr*20)/100
            }
            var simi_pr = 80;
        }
        else if ((output[h1_clasi] == 'HEALTH & ENV' && output[h2_clasi] == 'SCIENCE AND EDU') || (output[h2_clasi] == 'HEALTH & ENV' && output[h1_clasi] == 'SCIENCE AND EDU')) {
            var simi_pr = 80;
        }
        else if (h1_clasi_pr[h1_clasi] + h2_clasi_pr[h1_clasi] > 95) {
            var simi_pr = 98;
        }
        else if (h2_clasi_pr[h2_clasi] + h1_clasi_pr[h1_clasi] > 95) {
            var simi_pr = 98;
        }
        else {
            var simi_pr = 50;
        }
    }

    if ( simi_pr > 97) {
        if (fake_pr < 60) {
            if (output[h1_clasi] == 'POLITICS' ||  output[h1_clasi] == 'SCIENCE AND EDU' || output[h1_clasi] == 'HEALTH & ENV') {
                console.log('inside');
                spam_pr = parseInt(30*spam_pr)/100;
                sarc_pr = parseInt(85*sarc_pr)/100;
            }
            if (output[h1_clasi] == 'SCIENCE AND EDU' || output[h1_clasi] == 'HEALTH & ENV') {
                sarc_pr = parseInt(50*sarc_pr)/100;
                spam_pr = parseInt(60*spam_pr)/100;
            }
        }
    }
    var reli = 0
    if ((spam_pr > 95) && (fake_pr < 5)) {
        reli = 0.7*fake_pr + 0.3*spam_pr;
    }
    if ((spam_pr > 80) && (fake_pr < 65) && (fake_pr > 50)) {
        reli = 0.6*spam_pr + 0.3*fake_pr + 0.05*simi_pr + 0.05*sarc_pr;
        console.log('reil: ', reli);
    }
    else if ((spam_pr > 50) && (fake_pr < 65) && (fake_pr > 50)) {
        reli = 0.3*spam_pr + 0.5*fake_pr + 0.1*simi_pr + 0.1*sarc_pr;
        console.log('reil: ', reli);
    }
    else if ((fake_pr >= 65) && (simi_pr == 50 || simi_pr > 50)) {
        reli = 0.8*fake_pr + 0.2*spam_pr;
        console.log('reil: ', reli);
    }
    else if ((fake_pr < 30) && (spam_pr > 85)) {
        reli = 0.5*fake_pr + 0.5*spam_pr
    }
    else if ((fake_pr < 65) && (spam_pr > 80)) {
        reli = 0.6*spam_pr + 0.4*fake_pr
        console.log('reil: ', reli);
    }
    else if ((fake_pr < 60) && (sarc_pr > 85)) {
        reli = 0.4*sarc_pr + 0.4*fake_pr + 0.2*spam_pr;
        console.log('reil: ', reli);
    }
    else {
        reli = 0.6*fake_pr + 0.3*spam_pr + 0.05*spam_pr + 0.05*sarc_pr;
        console.log('reil: ', reli);
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
        props.initialHandler();
    }
    var color='green';

    return (
        <ToolWrapper display={display} bulb={completed<50? color='red': completed <70? color='yellow': color='green'}>
            <div className='result_container'>
                <div className="area">
                <div className="wire"></div>
                <div className="fixture">
                    <div className="strip"></div>
                    <div className="strip"></div>
                    <div className="strip"></div>
                </div>
                <div className="bulb">
                    <div className="zig"></div>
                    <div className="zig"></div>
                    <div className="zig"></div>
                </div>
                </div>
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
    overflow: hidden;
    box-shadow: 1px 1px 18px 5px rgba(0,0,0,0.93);
    -webkit-box-shadow: 1px 1px 18px 5px rgba(0,0,0,0.93);
    -moz-box-shadow: 1px 1px 18px 5px rgba(0,0,0,0.93);
    z-index: 90;    
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

    /* bulb */
    .area {
    width: 200px;
    height: 500px;
    position: absolute;
    top: 0;
    left: 50%;
    
    background: transparent;
    /* background: black; */
    animation: swing 1s infinite ease-in-out alternate;
    transform-origin: top;
    -moz-transform-origin: top;
    -webkit-transform-origin: top;
}

.wire {
    position: relative;
    left: 98px;
    height: 265px;
    width: 4px;
    background-color: black;
}

.fixture {
    position: relative;
    background-color: grey;
    width: 16px;
    height: 20px;
    left: 92px;
}

.strip {
    position: relative;
    width: 18px;
    height: 2px;
    right: 1px;
    top: 4px;
    background-color: darkgrey;
}

.strip:nth-of-type(2) {
    top: 7px;
}

.strip:nth-of-type(3) {
    top: 10px;
}

.bulb {
    position: relative;
    width: 40px;
    height: 40px;
    left: 80px;
    bottom: 2px;
    /* z-index: -1; */
    z-index: 100;
    /* background-color: rgba(226, 211, 161, 0.85); */
    background-color: ${props => props.bulb};
    border-radius: 50%;
}

.zig {
    position: relative;
    background-color: transparent;
    width: 10px;
    height: 5px;
    border-radius: 5px / 2.5px;
    left: 14px;
    border: black solid 1px;
}

.zig:nth-of-type(2) {
    top: -3px;
}

.zig:nth-of-type(3) {
    top: -6px;
}

@keyframes swing {
    from {
        -moz-transform: rotate(3deg);
        -webkit-transform: rotate(3deg);
        transform: rotate(3deg);
    }
    to {
        transform: rotate(-3deg);
    }
}

`

export default Model;
