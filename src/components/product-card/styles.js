import styled from 'styled-components';

const ProductCard = {
    Wrapper: styled.div`
        padding: 10px;
        width: 100%;
        display: flex;
        overflow: hidden;
        flex-direction: column;
        cursor: pointer;
        transition: ease-in-out 0.3s ease-in-out;
        border: solid 1px rgba(0, 0, 0, 0);
        border-bottom: solid 1px rgba(0, 0, 0, 0.2);
        :hover {
            border: solid 1px rgba(0, 0, 0, 0.2);
        }
        h3 {
            font-size: 16px;
        }
        p {
            font-size: 20px;
        }
    `,
    Container: styled.div`
        max-height: 100%;
        display: flex;
        justify-content: center;
    `,
    DetailContainer: styled.div`
        min-height: 50px;
        text-align: left;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        justify-content: space-evenly;
        padding: 5px 0;
    `
};

export default ProductCard;
