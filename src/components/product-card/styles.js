import styled from 'styled-components';

const ProductCard = {
    Wrapper: styled.div`
        padding: 16px;
        width: 100%;
        display: flex;
        overflow: hidden;
        flex-direction: column;
        justify-content: space-between;
        cursor: pointer;
        transition: ease-in-out 0.3s ease-in-out;
        border: solid 1px rgba(0, 0, 0, 0);
        border: solid 1px rgba(0, 0, 0, 0.2);
        border-radius: 16px;
        :hover {
            border: solid 1px rgba(0, 0, 0, 0.2);
        }

        h3 {
            /* font-size: 14px; */
        }
        p {
            line-height: 20px;
            text-transform: capitalize;

            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
    `,
    Container: styled.div`
        max-height: 100%;
        display: flex;
        justify-content: center;
    `,
    DetailContainer: styled.div`
        min-height: 50px;
        height: 100%;
        text-align: left;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        justify-content: space-between;
        padding: 5px 0;
    `
};

export default ProductCard;
