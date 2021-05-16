import styled from 'styled-components';

export const CarouselContainer = styled.div`
    overflow: hidden;
    img {
        object-fit: cover;
        width: 100%;
        max-height: 70vh;
    }

    & .alice-carousel__dots {
        transform: translateY(-80px);
    }
`;
