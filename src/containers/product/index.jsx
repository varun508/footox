import React, { useEffect, useRef } from 'react';
import { gql, useQuery } from '@apollo/client';

import { ChasingDots } from 'styled-spinkit';
import ProductStyles from './styles';
import MyImageGallery from './imageGallery';
import { useRouter } from 'next/router';
import Head from 'next/head';

const GET_PRODUCT_DATA = gql`
    query getProduct($id: ID!) {
        products(where: { id: $id }) {
            name
            id
            images {
                url
            }
            slug

            price
            categories {
                name
            }
            description {
                text
                html
            }
            flipkartLink
            amazonLink
            sizes
            colors {
                hex
            }
        }
    }
`;

function Product(props) {
    const descriptionRef = useRef(null);

    const routes = useRouter();
    console.log(routes)
    const { loading, error, data } = useQuery(GET_PRODUCT_DATA, {
        variables: { id: routes.query.id }
    });

    if (error) return `Error! ${error.message}`;
    console.log(data);

    const product = data?.products ? data?.products[0] : {};
    console.log(product);

    console.log(descriptionRef);
    console.log(product?.description?.html);

    if (descriptionRef?.current) descriptionRef.current.innerHTML = product?.description?.html;

    return (
        <ProductStyles.Wrapper>
            <Head>
                <title>Footox | {product?.name}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <ProductStyles.Container>
                {loading ? (
                    <div className="dot-container">
                        <ChasingDots />
                        <h3>loading...</h3>
                    </div>
                ) : (
                    <>
                        <ProductStyles.LeftContainer>
                            <ProductStyles.GalleryContainer>
                                <MyImageGallery images={product?.images} />
                            </ProductStyles.GalleryContainer>
                        </ProductStyles.LeftContainer>
                        <ProductStyles.RightContainer>
                            {/* <ProductStyles.Portal id="myPortal" /> */}
                            <h3>{product?.name}</h3>
                            <h2>₹{product?.price}</h2>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: product?.description?.html
                                }}></div>

                            <div>
                                <b>Available Colors:</b>
                                <ProductStyles.ColorContainer>
                                    {product?.colors?.map((color) => {
                                        return (
                                            <ProductStyles.Color
                                                color={color.hex}
                                                key={color}></ProductStyles.Color>
                                        );
                                    })}
                                </ProductStyles.ColorContainer>
                            </div>
                            <div>
                                <b>Available Sizes:</b>
                                <ProductStyles.SizeContainer>
                                    {product?.sizes?.map((item) => {
                                        return <p key={item}>{item}</p>;
                                    })}
                                </ProductStyles.SizeContainer>
                            </div>

                            <div style={{ marginTop: '20px' }}>
                                <b>Shop at:</b>
                                <ProductStyles.ButtonContainer>
                                    {product?.amazonLink && (
                                        <a href={product?.amazonLink} target="__blank">
                                            <ProductStyles.CustomButton color="#F0C17D22">
                                                <img src="/images/amazon.png" alt="" />
                                            </ProductStyles.CustomButton>
                                        </a>
                                    )}
                                    {product?.flipkartLink && (
                                        <a href={product?.flipkartLink} target="__blank">
                                            <ProductStyles.CustomButton color="#4B9BDE22">
                                                <img src="/images/flipkart.svg" alt="" />
                                            </ProductStyles.CustomButton>
                                        </a>
                                    )}
                                </ProductStyles.ButtonContainer>
                            </div>
                        </ProductStyles.RightContainer>
                    </>
                )}
            </ProductStyles.Container>
        </ProductStyles.Wrapper>
    );
}

export default Product;
