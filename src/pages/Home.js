import React from 'react';
import styled from 'styled-components';


// Import Componenets
import FirstSection from '../components/Home/FirstSection';
import SecondSection from '../components/Home/SecondSection';
import ThirdSection from '../components/Home/ThirdSection';

const Home = () => {
    return (
        <HomeWrapper>
        <div className='main_start home_container'>
            <div className='h_first_section'>
                <FirstSection />
            </div>
            <div className='h_second_section'>
                <SecondSection />
            </div>
            <div className='h_third_section'>
                <ThirdSection />
            </div>
        </div>
        </HomeWrapper>
    )
}

const HomeWrapper = styled.div`
    .h_first_section {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`;

export default Home;
