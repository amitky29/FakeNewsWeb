import React from 'react';
import styled from 'styled-components';

import FirstSection from '../components/Home/FirstSection';

const Home = () => {
    return (
        <HomeWrapper>
        <div className='main_start home_container'>
            <div className='h_first_section'>
                <FirstSection />
            </div>
        </div>
        </HomeWrapper>
    )
}

const HomeWrapper = styled.div`

`;

export default Home;
