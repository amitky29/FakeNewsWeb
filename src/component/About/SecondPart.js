import React from 'react';
import styled from 'styled-components';

import NameCard from "./NameCard";
import AboutUsData from "../../data/Home/AboutUsData";

const SecondPart = () => {
    return (
        <SecondPartWrapper>
            <div className="second_part_title">
                <h1>
                    <span className='sp2'>Our</span><span className='sp1'> Team</span>
                </h1>
            </div>
            <div className="Cards">
            {
                    AboutUsData.map(p => {
                        return(
                            <div className='single_card'>
                                <NameCard img={p.img} Name={p.Name} info={p.info} linkedin={p.linkedin} fb={p.fb}  />
                            </div>
                        )
                    })
            }    
            </div>
        </SecondPartWrapper>

    )
};
const SecondPartWrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    .second_part_title{
        text-transform: uppercase;
        letter-spacing:2px;
        margin-top:10px;
        margin-bottom:15px;
        .sp1{
            color:grey;
        }
        .sp2{
            color:black;
        }
    }
    .Cards{
        width:80vw;
        /* border:2px solid black; */
        display:flex;
        justify-content:center;
        align-items:center;
    }
    .single_card{
        margin:10px;
        box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.3);
        width: 300px;
        height: 280px
    }
`;


export default SecondPart;