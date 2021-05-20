import styled from 'styled-components';
import Dropdown from 'react-dropdown';

const CollectionStyles = {};

CollectionStyles.Wrapper = styled.div`
    padding: 2rem 0;
`;

CollectionStyles.Container = styled.div`
    display: flex;
    flex-direction: column;

    max-width: 1200px;
    margin: 0 auto;
`;

CollectionStyles.ProductItemsContainer = styled.div`
    padding: 0 20px;
    flex: 1;
    margin: 0 auto;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 30px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media (max-width: 550px) {
        grid-template-columns: 1fr 1fr;
        gap: 20px;
    }
`;

CollectionStyles.PaginationContainer = styled.div`
    width: 100%;
    margin: 40px 0;
    display: flex;
    justify-content: center;
`;

CollectionStyles.FilterContainer = styled.div`
    display: flex;
    padding: 10px 1rem;
    justify-content: space-between;
`;
CollectionStyles.CustomDropdown = styled(Dropdown)`
    width: 150px;
    z-index: 0;
`;

export default CollectionStyles;
