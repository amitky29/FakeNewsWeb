import React from 'react';
import styled from 'styled-components';

const NewsCard = ({img}) => {
    return (
        <NewsCardWrapper img={img}>
            
        </NewsCardWrapper>
    )
}

const NewsCardWrapper = styled.div`
    border: 1px solid black;
    background: url(${props => props.img}) center/cover no-repeat;
    width: 310px;
    height: 200px;
    border-radius: 5px;
`;

export default NewsCard;
