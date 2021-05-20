import styled from 'styled-components';

const ProductCard = {
    Wrapper: styled.div`
        width: 100%;
        display: flex;
        overflow: hidden;
        flex-direction: column;
        border-radius: 15px;
        cursor: pointer;
        transition: ease-in-out 0.3s ease-in-out;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        border: solid 1px rgba(0, 0, 0, 0);
        :hover {
            border: solid 1px rgba(0, 0, 0, 0.2);
        }
    `,
    Container: styled.div`
        max-height: 100%;
        display: flex;
        justify-content: center;
        img {
            max-width: 100%;
            max-height: 240px;
            object-fit: contain;
        }
    `,
    DetailContainer: styled.div`
        height: 50px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        padding: 5px 0;
    `
};

export default ProductCard;
