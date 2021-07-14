import Link from 'next/link';
import { useRouter } from 'next/router';

import HeaderStyles from './styles';
import { appRoutes } from '../../utils/routes';
import HeaderMenu from '../header-menu';
import HeaderMenuContextProvider, { HeaderMenuContext } from '../../context/header-menu-context';
import { gql, useQuery } from '@apollo/client';

const GET_LOGO = gql`
    query {
        logos {
            logo {
                url
            }
        }
    }
`;

function Header() {
    const router = useRouter();
    const collectionType = router?.query?.type;

    const { loading, error, data } = useQuery(GET_LOGO);
    const url = data?.logos[0].logo.url;

    return (
        <HeaderMenuContextProvider>
            <HeaderMenuContext.Consumer>
                {({ open, setOpen }) => (
                    <HeaderStyles.Wrapper>
                        <HeaderStyles.Container>
                            <HeaderStyles.LogoContainer>
                                <Link href="/">
                                    <img src={url} alt="" />
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
                                                {route.name === 'contact-us' ? (
                                                    <a href={route.path}>{route.title}</a>
                                                ) : (
                                                    <Link href={route.path}>
                                                        <a>{route.title}</a>
                                                    </Link>
                                                )}

                                                {(collectionType === route.name ||
                                                    route.path === router.pathname) && (
                                                    <HeaderStyles.NavPointer />
                                                )}
                                            </HeaderStyles.NavListItems>
                                        );
                                    })}
                                </HeaderStyles.NavList>
                            </HeaderStyles.Nav>
                            <HeaderStyles.HeaderMenuIcon
                                open={open}
                                onClick={() => {
                                    console.log('clicked');
                                    setOpen(!open);
                                }}
                            />
                        </HeaderStyles.Container>
                    </HeaderStyles.Wrapper>
                )}
            </HeaderMenuContext.Consumer>
        </HeaderMenuContextProvider>
    );
}

export default Header;
