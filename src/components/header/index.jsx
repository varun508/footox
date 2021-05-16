import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import Button from '../button';
import HeaderStyles from './styles';
import { appRoutes } from '../../utils/routes';

function Header() {
    const router = useRouter();

    useEffect(() => {
        console.log(router);
    }, []);
    return (
        <HeaderStyles.Wrapper>
            <HeaderStyles.LogoContainer>
                <Link href="/">
                    <img src="/images/logo.jpg" alt="" />
                </Link>
            </HeaderStyles.LogoContainer>
            <HeaderStyles.NavList>
                {appRoutes.map((route, index) => {
                    return (
                        <HeaderStyles.NavListItems key={index}>
                            <Link href={route.path}>
                                <a>{route.title}</a>
                            </Link>
                            {router.pathname === route.path && <HeaderStyles.NavPointer />}
                        </HeaderStyles.NavListItems>
                    );
                })}
                <HeaderStyles.NavListItems></HeaderStyles.NavListItems>
            </HeaderStyles.NavList>
            <HeaderStyles.LoginButtonContainer>
                <Button>Login</Button>
            </HeaderStyles.LoginButtonContainer>
        </HeaderStyles.Wrapper>
    );
}

export default Header;
