import styled from 'styled-components'
import Dropdown from 'react-dropdown';

const MenContainerStyles = {};

MenContainerStyles.Wrapper = styled.div`
padding: 2rem 0;
`;

MenContainerStyles.Container = styled.div`
display:flex;
flex-direction: column;
max-width: 1500px;
margin: 0 auto;
`;

MenContainerStyles.ProductItemsContainer = styled.div`
padding: 1rem 0;
flex: 1;
margin: 0 auto;
width: 100%;
flex-wrap: wrap;
display:flex;
justify-content: center;
gap: 4rem 2rem;
`;

MenContainerStyles.FilterContainer = styled.div`
display: flex;
padding: 10px 1rem;
justify-content: space-between;
`
MenContainerStyles.CustomDropdown = styled(Dropdown)`
width: 150px;
z-index: 0;
`

export default MenContainerStyles;