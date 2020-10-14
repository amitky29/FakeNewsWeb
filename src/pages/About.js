import React from 'react';
import styled from 'styled-components';

import FirstPart from "../component/About/FirstPart";
import SecondPart from "../component/About/SecondPart";


const About = () => {
    return (
        <AboutWrapper>
            <div className="main_start main_container">
                <div className="first_cont">
                    <FirstPart />
                </div>
                <div className="second_cont">
                    <SecondPart/>
                </div>
            </div>
            
        </AboutWrapper>
    )
}

const AboutWrapper = styled.div`
    .main_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }
    .first_cont, .second_cont {
        /* border: 2px solid red; */
        margin: 10px;
    }
    .first_cont {
        box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.2);
        padding: 20px;
    }
`;

export default About;
