import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { gql, useQuery } from '@apollo/client';
import { ChasingDots } from 'styled-spinkit';

const Wrapper = styled.div`
    min-height: 50vh;
    h2 {
        text-align: center;
    }

    h3 {
        text-align: center;
    }
`;

const ErrorContainer = styled.div`
    height: calc(100vh - 80px);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    margin: 0 auto;
    min-height: 100vh;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem 0;
    padding: 1rem;
    padding-bottom: 5rem;
`;

const Image = styled.div`
    height: 550px;
    width: 50%;
    max-height: 400px;
    img {
        height: 100%;
        object-fit: contain;
        width: 100%;
    }

    @media (max-width: 1000px) {
        width: 500px;
    }
    @media (max-width: 500px) {
        width: 100%;
        height: 400px;
    }
`;

const Description = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const GET_ABOUT = gql`
    query abouts {
        abouts {
            heading
            description {
                html
            }
            image {
                url
            }
        }
    }
`;

function AboutUs() {
    const { loading, error, data } = useQuery(GET_ABOUT);
    console.log(data);
    const aboutData = data ? data?.abouts[0] : null;
    if (error)
        return (
            <ErrorContainer>
                <Head>
                    <title>Error</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <h3>
                    {`Error! ${error.message}`}
                    <br />
                    Retry Again
                </h3>
            </ErrorContainer>
        );

    return (
        <Wrapper>
            {loading ? (
                <div className="dot-container">
                    <ChasingDots />
                    <h3>loading...</h3>
                </div>
            ) : (
                <>
                    <Head>
                        <title>About Us</title>
                        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    </Head>
                    <Container>
                        <h1>About Us</h1>
                        <Image>
                            <img src={aboutData?.image?.url} alt="about-us" />
                        </Image>
                        <h2>{aboutData?.heading}</h2>
                        <Description
                            dangerouslySetInnerHTML={{
                                __html: aboutData?.description.html
                            }}></Description>
                    </Container>
                </>
            )}
        </Wrapper>
    );
}

export default AboutUs;
