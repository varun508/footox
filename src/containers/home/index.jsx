import React from 'react';
import { ChasingDots } from 'styled-spinkit';

import HomeContainerStyles from './styles';
import { Carousel, CategoryCards, Deals } from '../../components';
import { gql, useQuery } from '@apollo/client';

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

    if (error) return `Error! ${error.message}`;

    console.log(data);

    return (
        <HomeContainerStyles.Wrapper>
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
