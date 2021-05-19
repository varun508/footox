import styled from 'styled-components';

const HeaderStyles = {};

HeaderStyles.Wrapper = styled.div`
    height: 80px;
    position:fixed;
    top:0;
    z-index:10;
    width:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(255, 255, 255, .8);
    backdrop-filter: blur(20px); 
    box-shadow: 0px 0px 2px 1px #000000;
`;

HeaderStyles.Container = styled.div`
       width: 1500px;
       margin:0 auto;
       display:flex;
       justify-content:space-between;
       align-items:center;
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
    width: 450px;
    justify-content: space-between;
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
    background-color: ${({ theme }) => theme.colorPrimary[500]};
    padding: 4px;
    border-radius: 50%;
    margin-top: 3px;
`;

HeaderStyles.LoginButtonContainer = styled.div``;

export default HeaderStyles;
