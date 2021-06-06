import styled from 'styled-components';
import { Button } from '../../components';

const ProductStyles = {};

ProductStyles.Wrapper = styled.div`
    padding: 2rem;
    p {
        color: gray;
    }
`;

ProductStyles.ColorContainer = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 5px;

    p {
        padding: 0px 10px;
        border: 1px solid #ddd;
    }
`;

ProductStyles.Container = styled.div`
    display: flex;
    gap: 0 2rem;
    max-width: 1800px;
    margin: 0 auto;
    min-height: 80vh;

    .dot-container {
        margin: auto;
    }

    @media (max-width: 1080px) {
        flex-direction: column;
    }
`;

ProductStyles.LeftContainer = styled.div`
    display: flex;
    justify-content: left;
    flex: 3;

    @media (max-width: 1080px) {
        justify-content: center;
    }
`;
ProductStyles.GalleryContainer = styled.div`
    width: 95%;

    & .image-gallery-image {
        height: 450px;

        @media (max-width: 500px) {
            height: 300px;
        }
    }

    & .image-gallery-thumbnail {
        width: 60px;
        height: 60px;

        img {
            object-fit: cover;
            max-height: 52px;
            max-width: 52px;
        }
    }

    @media (max-width: 1080px) {
        max-width: 600px;
        display: flex;
        align-items: center;
    }
`;

ProductStyles.RightContainer = styled.div`
    position: relative;
    flex: 2;
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    gap: 1rem 0;
    p {
        line-height: 2.1;
        text-align: left;
    }

    ul {
        padding: 0;
        padding-left: 1em;

        p {
            text-align: left;
        }
    }
    @media (max-width: 1080px) {
        justify-content: center;
        h2 {
            text-align: center;
            margin-top: 20px;
        }
        h3 {
            text-align: center;
        }
        p {
            min-height: auto;
        }
    }
`;
ProductStyles.CustomButton = styled(Button)`
    background: ${({ color }) => color};
    color: black;
    height: 50px;
    width: 100%;
    padding: 10px;
    img {
        height: 100%;
    }
`;

ProductStyles.ButtonContainer = styled.div`
    display: flex;
    gap: 0 1rem;
    margin-top: 1rem;
    @media (max-width: 1080px) {
        justify-content: center;
    }
`;

ProductStyles.Portal = styled.div`
    position: absolute;
    height: 600px;
    width: 300px;
`;

export default ProductStyles;
