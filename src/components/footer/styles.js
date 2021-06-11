import styled from 'styled-components';
import Button from '../button';

const FooterStyles = {};

FooterStyles.Wrapper = styled.div`
    padding: 2rem 1rem;
    padding-top: 5rem;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    background-color: rgba(0, 0, 0, 0.05);

    p {
        color: grey;
    }

    @media (max-width: 1280px) {
        h1 {
            font-size: 2rem;
        }
    }
    @media (max-width: 600px) {
        h1 {
            font-size: 1.4rem;
        }
    }
`;

FooterStyles.Container = styled.div`
    max-width: 1500px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    @media (max-width: 800px) {
        flex-direction: column-reverse;
    }
`;

FooterStyles.PolicyContainer = styled.div`
    display: flex;
    a {
        cursor: pointer;
        padding: 0 5px;
        text-decoration: none;
        color: grey;
    }
`;

FooterStyles.LeftContainer = styled.div`
    display: flex;
    padding: 1rem;
    flex: 1;
    gap: 1rem;
    flex-direction: column;

    .content {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
`;

FooterStyles.RightContainer = styled.div`
    flex: 1;
    padding: 2rem;
    padding-top: 0;

    > h2 {
        margin-bottom: 20px;
    }
`;

FooterStyles.Input = styled.input`
    padding: 10px 0;
    margin-bottom: 10px;
    border: none;
    outline: none;
    width: 100%;
    font-size: 1.1rem;
    font-weight: 600;
    background-color: transparent;
    transition: all ease-in-out 0.3s;
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
`;

FooterStyles.TextArea = styled.textarea`
    padding: 10px 0;
    margin-bottom: 10px;
    border: none;
    outline: none;
    width: 100%;
    font-size: 1.1rem;
    font-weight: 600;
    background-color: transparent;
    transition: all ease-in-out 0.3s;
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
`;

FooterStyles.Button = styled(Button)`
    margin: 1rem;
    padding: 0.8rem 1.5rem;
    font-weight: 600;
    font-size: 1rem;
`;

FooterStyles.SocialContainer = styled.div`
    display: flex;
    padding: 1rem 0;
    flex-direction: column;
    justify-content: space-between;

    a {
        text-decoration: none;
        color: inherit;
    }
`;

FooterStyles.Copyright = styled.div`
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    p {
        font-size: 0.8rem;
    }
`;

export default FooterStyles;
