import React from 'react';
import styled from 'styled-components';

import Carousel from 'react-elastic-carousel';

import img1 from '../../images/news/fn1.webp';
import img2 from '../../images/news/fn2.webp';
import img3 from '../../images/news/fn3.webp';
import img4 from '../../images/news/fn4.jpg';
import img5 from '../../images/news/fn5.jpg';

import NewsCard from './NewsCard';

const FourthSection = () => {

    const breakPoints = [
        { width: 1, itemsToShow: 1},
        { width: 550, itemsToShow: 3},
        { width: 768, itemsToShow: 4},
        { width: 1200, itemsToShow: 4},
    ];

    const Data = [
        {
            id: 1,
            img: img1
        },
        {
            id: 2,
            img: img2
        },
        {
            id: 3,
            img: img3
        },
        {
            id: 4,
            img: img4
        },
        {
            id: 4,
            img: img5
        },
        {
            id: 4,
            img: img3
        },
    ]

    return (
        <FourthSectionWrapper>
            <Carousel breakPoints={breakPoints}>
                {Data.map(item => {
                        return (
                            <div className='news_card'>
                                <NewsCard img={item.img} />
                            </div>
                        );
                    }   
                )}
            </Carousel>
        </FourthSectionWrapper>
    )
}

const FourthSectionWrapper = styled.div`
    padding: 30px;
    .news_card {
        width: 322px;
        height: 200px;
        margin: 10px;
    }
`;

export default FourthSection
