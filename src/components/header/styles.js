import styled from 'styled-components';

const HeaderStyles = {};

HeaderStyles.Wrapper = styled.div`
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.background[500]};
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    @media (max-width: 1024px) {
        height: 80px;
    }

    @media (max-width: 768px) {
    }

    @media (max-width: 600px) {
        height: 60px;
    }
`;

HeaderStyles.Container = styled.div`
    width: 1500px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

HeaderStyles.LogoContainer = styled.div`
    width: 8rem;
    height: 2rem;
    cursor: pointer;
    img {
        width: 100%;
        height: 100%;
    }
`;

HeaderStyles.NavList = styled.ul`
    height: 50px;
    padding-top: 1rem;
    display: flex;
    list-style: none;
    gap: 0 20px;

    @media (max-width: 600px) {
        display: none;
    }
`;

HeaderStyles.HeaderMenuContainer = styled.div`
    display: none;

    @media (max-width: 600px) {
        display: block;
    }
`;

HeaderStyles.NavListItems = styled.li`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    a {
        color: ${({ theme }) => theme.textSecondary[500]};
        text-decoration: none;
        font-weight: 600;
    }
`;

HeaderStyles.NavPointer = styled.div`
    background-color: ${({ theme }) => theme.colorSecondary[500]};
    padding: 4px;
    border-radius: 50%;
    margin-top: 3px;
`;

HeaderStyles.LoginButtonContainer = styled.div``;

export default HeaderStyles;
