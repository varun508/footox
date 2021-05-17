import React from 'react';

import HomeContainerStyles from './styles';
import { Carousel } from '../../components';

function HomeContainer() {
    return (
        <HomeContainerStyles.Wrapper>
            <Carousel />
            <HomeContainerStyles.Container></HomeContainerStyles.Container>
        </HomeContainerStyles.Wrapper>
    );
}

export default HomeContainer;
