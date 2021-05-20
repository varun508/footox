import { BiX } from 'react-icons/bi';
import styled, { css } from 'styled-components';
import { useRouter } from 'next/router';
import HeaderMenuItem from '../header-menu-item';
import { appRoutes } from '../../utils/routes';

const Container = styled.div`
    background: white;
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 100;
    transition: all 1s ease-in-out;
    clip-path: circle(0vh at 92% 4%);
    ${({ open }) =>
        open &&
        css`
            clip-path: circle(150% at 0% 0%);
        `}
`;

const HeaderMenuIcon = styled(BiX)`
    background-color: rgba(0, 0, 0, 1);
    border-radius: 50%;
    height: 40px;
    width: 40px;
    cursor: pointer;
    position: absolute;
    right: 1.3rem;
    top: 0.7rem;
    align-self: flex-end;
    padding: 8px;
    fill: white;
`;

const HeaderNavList = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 0.7rem;
    font-size: 0.9em;
    li {
        margin: 1rem;
    }
`;

export default function HeaderMenu({ open, setOpen }) {
    const router = useRouter();
    return (
        <Container open={open}>
            <HeaderMenuIcon onClick={() => setOpen(false)} />
            <HeaderNavList>
                {appRoutes.map((route) => (
                    <HeaderMenuItem
                        key={route.path}
                        current={router.pathname}
                        path={route.path}
                        title={route.title}
                        setOpen={setOpen}
                    />
                ))}
            </HeaderNavList>
        </Container>
    );
}
