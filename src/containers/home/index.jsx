import React from 'react';

import HomeContainerStyles from './styles';
import { Carousel, CategoryCards, Deals } from '../../components';

function HomeContainer() {
    return (
        <HomeContainerStyles.Wrapper>
            <Carousel />
            <CategoryCards />
            <Deals />
            <HomeContainerStyles.Container></HomeContainerStyles.Container>
        </HomeContainerStyles.Wrapper>
    );
}

export default HomeContainer;
