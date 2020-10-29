import React from 'react';
import styled from "styled-components";
import Riot from "../../images/riot.jpg";
import Need from "../../images/pet-shelter.svg";
import Mask from "../../images/mask.jpg";

const InfoSecond = () => {
    return (
        <InfoSecondWrapper tpara_img={Need} ione_img={Riot} itwo_img={Mask}>
            <div className="container">
                <div className="sec_title">
                    <h3>The Need of FNC</h3>
                </div>
                <div className="sec_para">
                    <div class="tpara" >
                        <div className='s_p_para'>
                        <p>Detection of fake news online is important in today's society as fresh news content is rapidly being produced as a result of the abundance of technology that is present. 
                            In the world of false news, there are seven main categories and within each category, the piece of fake news content can be visual- and/or linguistic-based. 
                            In order to detect fake news, both linguistic and non-linguistic cues can be analyzed using several methods. 
                            While many of these methods of detecting fake news are generally successful, they do have some limitations.
                        </p>
                        </div>
                    </div>
                    <div className="ione">
                        <div className="ione_photo photo" >
                            {/* <img src={Riot} alt="Riot" /> */}
                        </div>
                        <div className="ione_info info">
                            <p>The problem of fake news can have dangerous consequences and its impact was witnessed during the lockdown when a panic situation was created through social media.  
                                The fake news can now make or mar the fate of a country or a society, affecting the lives of millions of people.
                                The DNA analysis looks at different aspects of this menace that can trigger riots or even create a war-like situation between the two countries.
                            </p>
                        </div>
                    </div>
                    <div className="itwo">
                        <div className="ione_photo photo photo1" >
                            {/* <img src={Riot} alt="Riot" /> */}
                        </div>
                        <div className="ione_info info">
                            <p>The problem of fake news can have dangerous consequences and its impact was witnessed during the lockdown when a panic situation was created through social media.  
                                The fake news can now make or mar the fate of a country or a society, affecting the lives of millions of people.
                                The DNA analysis looks at different aspects of this menace that can trigger riots or even create a war-like situation between the two countries.
                            </p>
                        </div>
                    </div>
                    <div className="ithree">
                        <div className="ione_photo photo" >
                            {/* <img src={Riot} alt="Riot" /> */}
                        </div>
                        <div className="ione_info info">
                            <p>The problem of fake news can have dangerous consequences and its impact was witnessed during the lockdown when a panic situation was created through social media.  
                                The fake news can now make or mar the fate of a country or a society, affecting the lives of millions of people.
                                The DNA analysis looks at different aspects of this menace that can trigger riots or even create a war-like situation between the two countries.
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </InfoSecondWrapper>
    )
}
const InfoSecondWrapper=styled.div`
.container{
    display:flex;
    flex-direction:column;
    align-items: center;    
}
.sec_title{
    font-size:23px;
    letter-spacing:2px;
    color:rgba(0,0,0,0.6);
}
.ione,.itwo,.ithree{
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    width: 80vw;
    margin: 0 auto;
}
.itwo {
    display: flex;
    flex-direction: row-reverse;
}
.ione_info{
    word-wrap:wrap;
    width:60vw;
    margin-left:35px;
    font-size:19px;
    font-weight:bold;
    letter-spacing:1.5px;
}
.s_p_para {
    background:url(${props => props.tpara_img}) center no-repeat;
    background-size:120px;
    /* border:2px solid black; */
    width:70vw;
    text-align:center;
    margin:10px auto;
    margin-bottom:2rem;
    padding:19px;
    letter-spacing:1px;
    font-size:19px;
    color:rgba(0,0,0,0.7);
    /* text-transform: uppercase;  */
}
.ione_photo{
    background: url(${props => props.ione_img}) center/cover no-repeat;
    width: 280px;
    height: 280px;
    border-radius: 100%;
    border: 1px solid whitesmoke;
    margin:5px;
}
.tpara{
    background:white;
    clip-path:  polygon(0 0, 100% 0, 100% 88%, 0% 100%);
}
.sec_para{
    background-color: rgba(0,0,0,0.8) ;
    color:white;
}
.photo1{
    background:url(${props => props.itwo_img}) center/cover no-repeat;
}
@media screen and (max-width: 900px) {
    .photo {
        width: 120px;
        height: 120px;
    }    
    .ione, .itwo, .ithree {
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
    }
    .s_p_para {
        font-size: 16px;
        letter-spacing: 0px;
        width: 100vw;
        margin-bottom: 50px;
        background: wheat;
        clip-path: circle(76.5% at 49% 22%);
    }
    .info {
        width: 100vw;
        font-size: 16px;
        font-weight: lighter;
        padding: 20px;
    }
}
`;


export default InfoSecond;
