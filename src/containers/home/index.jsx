import React from 'react';
import { ChasingDots } from 'styled-spinkit';

import HomeContainerStyles from './styles';
import { Carousel, CategoryCards, Deals } from '../../components';
import { gql, useQuery } from '@apollo/client';
import Head from 'next/head';

const GET_HOME_DATA = gql`
    query GetHomeData {
        deals {
            dealImage {
                url
            }
            dealLink
        }
        banners {
            bannerImage {
                url
            }
            bannerLink
        }
        categories {
            image {
                url
            }
            name
        }
    }
`;

function HomeContainer() {
    const { loading, error, data } = useQuery(GET_HOME_DATA);

    if (error)
        return (
            <HomeContainerStyles.ErrorContainer>
                <Head>
                    <title>Error</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <h3>
                    {`Error! ${error.message}`}
                    <br />
                    Retry Again
                </h3>
            </HomeContainerStyles.ErrorContainer>
        );

    return (
        <HomeContainerStyles.Wrapper>
            <Head>
                <title>Footox</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            {loading ? (
                <>
                    <ChasingDots />
                    <h3>loading...</h3>
                </>
            ) : (
                <HomeContainerStyles.Container>
                    <Carousel bannerData={data.banners} />
                    <CategoryCards categoryData={data.categories} />
                    <Deals dealsData={data.deals} />
                </HomeContainerStyles.Container>
            )}
        </HomeContainerStyles.Wrapper>
    );
}

export default HomeContainer;
