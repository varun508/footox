import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    h2 {
        text-align: center;
    }

    h3 {
        text-align: center;
    }
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
`;

const Image = styled.div`
    height: 550px;
    width: 50%;
    img {
        height: 100%;
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

function AboutUs() {
    return (
        <Wrapper>
            <Container>
                <h2>About Us</h2>
                <Image>
                    <img src="/images/about-us.png" alt="" />
                </Image>
                <h2>Take Your Pick From the Range of Footox Footwear Online</h2>
                <p>
                    Worried you might not find shoes of the right size or fit for yourself? Our
                    detailed size guide will help you find the pair of your dreams in no time. Our
                    15-day free returns, cash on delivery and free delivery options, secure online
                    transactions, loyalty program and irresistible pricing are worth checking out
                    too. So, say yes to Footox Fotwear – shop on our website today before your
                    favourite pairs are all gone!
                </p>
                <p>
                    Footox is a one-stop shop for all footwear need along with a wide assortment of
                    shoes. The footwear options are versatile and befitting every occasion. The
                    high-octane atmosphere in the stores, hands-on staff and the various options to
                    choose from further makes the shopping experience an enjoyable experience.
                </p>
                <p>
                    Footox nsembles are intrinsically vivacious with varied hues and styles. It
                    celebrates the uniqueness, distinctness and individuality of the youth of today.
                    Footox is the apt choice for those who believe in putting their best foot
                    forward, ALWAYS! It outshines itself as a mere footwear brand and is recognized
                    as a bold fashion statement.
                </p>
            </Container>
        </Wrapper>
    );
}

export default AboutUs;
