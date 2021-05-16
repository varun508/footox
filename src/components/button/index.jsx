import styled from 'styled-components';

const Button = styled.button`
    outline: none;
    border: none;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colorPrimary[500]};
    padding: 0.5rem 1.7rem;
    color: ${({ theme }) => theme.white};
    font-size: 1.1.rem;
    font-weight: 500;
    cursor: pointer;
`;

export default Button;
