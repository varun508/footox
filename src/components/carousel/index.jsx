import React from 'react';
import { gql, useQuery } from '@apollo/client';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { CarouselContainer } from './styles';

const handleDragStart = (e) => e.preventDefault();

const items = [
    <a href="#">
        <img
            src="https://static.metroshoes.net/media/wysiwyg/homepage/Lets-be-The-Bright-Homepage-Banner-MAY.jpg"
            onDragStart={handleDragStart}
        />
    </a>,
    <a href="#">
        <img
            src="https://static.metroshoes.net/media/wysiwyg/homepage/Sanitise-Collection-homepage-Banner-MAY-METRO.jpg"
            onDragStart={handleDragStart}
        />
    </a>,
    <a href="#">
        <img
            src="https://static.metroshoes.net/media/wysiwyg/homepage/Shop-For-Mask-New-Website-Banner-1366x470.jpg"
            onDragStart={handleDragStart}
        />
    </a>
];

const GET_BANNERS = gql`
  query GetBanners {
    banners {
        bannerImage {
            id
        }
        bannerLink
    }
  }
`;

const Carousel = () => {
    const { loading, error, data } = useQuery(GET_BANNERS);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    console.log(data);

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
                items={items}
            />
        </CarouselContainer>
    );
};


export default Carousel;
