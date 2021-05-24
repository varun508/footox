import styled from 'styled-components';

export const CarouselContainer = styled.div`
    overflow: hidden;
    img {
        object-fit: contain;
        width: 100%;
        max-height: 70vh;
    }

    & .alice-carousel__dots {
        transform: translateY(-80px);
    }

    @media (max-width: 600px) {
        img {
            max-height: 50vh;
        }

        & .alice-carousel__dots {
            transform: translateY(-60px);
        }
    }
`;
