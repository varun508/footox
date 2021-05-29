import styled from 'styled-components';

const Deals = {
    Container: styled.div`
        width: 100%;
        margin-bottom: 50px;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    `,

    DealsCardWrapper: styled.div`
        max-width: 1200px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
    `,
    Card: styled.div`
        width: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
    `,
    ImageContainer: styled.div`
            max-width: 100%;
    `
};



export default Deals;
