import styled from 'styled-components';
import Dropdown from 'react-dropdown';

const CollectionStyles = {};

CollectionStyles.BannerContainer = styled.div`
    width: 100%;

    img {
        width: 100%;
        object-fit: contain;
    }
`;

CollectionStyles.Wrapper = styled.div`
    padding: 0 0 2rem;
`;

CollectionStyles.ErrorContainer = styled.div`
    height: calc(100vh - 80px);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

CollectionStyles.Container = styled.div`
    min-height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    margin: 0 auto;
    transform: translateY(-100px);
    padding-top: 100px;
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#ffffff+0,ffffff+100&0+0,1+8 */
    background: -moz-linear-gradient(
        top,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 1) 8%,
        rgba(255, 255, 255, 1) 100%
    ); /* FF3.6-15 */
    background: -webkit-linear-gradient(
        top,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 1) 8%,
        rgba(255, 255, 255, 1) 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 1) 8%,
        rgba(255, 255, 255, 1) 100%
    ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#ffffff',GradientType=0 ); /* IE6-9 */

    .dot-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: auto 0;
    }
`;

CollectionStyles.ProductItemsContainer = styled.div`
    padding: 0 20px;
    flex: 1;
    margin: 0 auto;
    margin-top: 40px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 30px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media (max-width: 550px) {
        grid-template-columns: 1fr 1fr;
        gap: 0.7rem;
    }
`;

CollectionStyles.NoContent = styled.div`
    height: 100%;
    width: 100%;
    flex: 0.8;
    display: flex;
    justify-content: center;
    align-items: center;
`;

CollectionStyles.PaginationContainer = styled.div`
    width: 100%;
    margin: 40px 0;
    display: flex;
    justify-content: center;
`;

CollectionStyles.HeadingContainer = styled.div`
    display: flex;
    padding: 10px 1rem;
    gap: 20px;
    z-index: 1;
    margin-bottom: 10px;
`;

CollectionStyles.FilterContainer = styled.div`
    display: flex;
    padding: 10px 1rem;
    /* justify-content: flex-end; */
    gap: 20px;
    z-index: 1;
`;
CollectionStyles.CustomDropdown = styled(Dropdown)`
    z-index: 0;
    min-width: 150px;
    margin-top: 5px;
`;

export default CollectionStyles;
