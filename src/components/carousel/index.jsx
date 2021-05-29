import React from 'react';
import { gql, useQuery } from '@apollo/client';
import Image from 'next/image';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { CarouselContainer, ImageContainer } from './styles';

const handleDragStart = (e) => e.preventDefault();

const CarouselImage = ({ href, imgLink }) => {
    return (
        <a href={href}>
            <ImageContainer>
                <Image layout="fill" src={imgLink} onDragStart={handleDragStart} />
            </ImageContainer>
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
