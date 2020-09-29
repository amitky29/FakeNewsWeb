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
            <div className='h_second_section'>
                {/* coming soon.. */}
            </div>
            <div className='h_third_section'>
                {/* coming soon.. */}
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
