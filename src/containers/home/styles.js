import styled from 'styled-components';

const HomeContainerStyles = {};

HomeContainerStyles.Wrapper = styled.div`
    /* min-height: 100vh; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

HomeContainerStyles.ErrorContainer = styled.div`
    height: calc(100vh - 80px);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

HomeContainerStyles.Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export default HomeContainerStyles;
