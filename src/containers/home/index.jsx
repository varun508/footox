import React from 'react';

import HomeContainerStyles from './styles';
import { Carousel, CategoryCards } from '../../components';

function HomeContainer() {
    return (
        <HomeContainerStyles.Wrapper>
            <Carousel />
            <CategoryCards />
            <HomeContainerStyles.Container></HomeContainerStyles.Container>
        </HomeContainerStyles.Wrapper>
    );
}

export default HomeContainer;
