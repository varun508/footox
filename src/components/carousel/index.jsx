import React from 'react';
import { gql, useQuery } from '@apollo/client';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { CarouselContainer } from './styles';

const handleDragStart = (e) => e.preventDefault();

const CarouselImage = ({ href, imgLink }) => {
    return (
        <a href={href}>
            <img src={imgLink} onDragStart={handleDragStart} />
        </a>
    );
};

const Carousel = ({ bannerData }) => {
    const carouselItems = bannerData.map((item) => {
        return <CarouselImage imgLink={item.bannerImage?.url} href={item.bannerLink} />;
    });

    return (
        <CarouselContainer>
            <AliceCarousel
                autoPlay
                autoPlayStrategy="none"
                autoPlayInterval={2000}
                animationDuration={1000}
                animationType="fadeout"
                infinite
                touchTracking={false}
                disableButtonsControls
                items={carouselItems}
            />
        </CarouselContainer>
    );
};

export default Carousel;
