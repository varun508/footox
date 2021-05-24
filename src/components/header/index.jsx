import Link from 'next/link';
import { useRouter } from 'next/router';

import HeaderStyles from './styles';
import { appRoutes } from '../../utils/routes';
import HeaderMenu from '../header-menu';
import HeaderMenuContextProvider, { HeaderMenuContext } from '../../context/header-menu-context';

function Header() {
    const router = useRouter();

    return (
        <HeaderMenuContextProvider>
            <HeaderMenuContext.Consumer>
                {({ open, setOpen }) => (
                    <HeaderStyles.Wrapper>
                        <HeaderStyles.Container>
                            <HeaderStyles.LogoContainer>
                                <Link href="/">
                                    <img src="/images/logo.png" alt="" />
                                </Link>
                            </HeaderStyles.LogoContainer>
                            <HeaderStyles.HeaderMenuContainer>
                                <HeaderMenu open={open} setOpen={setOpen} />
                            </HeaderStyles.HeaderMenuContainer>
                            <HeaderStyles.Nav>
                                <HeaderStyles.NavList>
                                    {appRoutes.map((route, index) => {
                                        return (
                                            <HeaderStyles.NavListItems key={index}>
                                                <Link href={route.path}>
                                                    <a>{route.title}</a>
                                                </Link>
                                                {router.asPath === route.path && (
                                                    <HeaderStyles.NavPointer />
                                                )}
                                            </HeaderStyles.NavListItems>
                                        );
                                    })}
                                </HeaderStyles.NavList>
                            </HeaderStyles.Nav>
                            <HeaderStyles.HeaderMenuIcon onClick={() => setOpen(!open)} />
                        </HeaderStyles.Container>
                    </HeaderStyles.Wrapper>
                )}
            </HeaderMenuContext.Consumer>
        </HeaderMenuContextProvider>
    );
}

export default Header;
