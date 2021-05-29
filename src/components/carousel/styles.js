import styled from 'styled-components';

export const CarouselContainer = styled.div`
    overflow: hidden;
    & .alice-carousel__dots {
        transform: translateY(-80px);
    }

    @media (max-width: 600px) {

        & .alice-carousel__dots {
            transform: translateY(-60px);
        }
    }
`;

export const ImageContainer = styled.div`
        width: 100%;
        height: 35vw;

        @media (max-width: 600px) {
            height: 35vw;
         }
`