import styled from 'styled-components';

const CategoryCard = {
    Container: styled.div`
        width: 100%;
        margin-bottom: 50px;
        padding: 0 20px;

        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 20px;
    `,

    Card: styled.div`
        width: 100%;

        /* background: url(${({ img }) => img});
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain; */

        display: flex;
        justify-content: center;
        align-items: center;

        img {
            object-fit: contain;
            max-width: 100%;
            max-height: 350px;
        }
    `
};

export default CategoryCard;
