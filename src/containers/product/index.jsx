import React, { useEffect, useRef } from 'react';
import { gql, useQuery } from '@apollo/client';

import { ChasingDots } from 'styled-spinkit';
import ProductStyles from './styles';
import MyImageGallery from './imageGallery';
import { useRouter } from 'next/router';

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
            productSizeVariants {
                name
                size
            }
            productColorVariants {
                color
                name
            }
        }
    }
`;

function Product(props) {
    const descriptionRef = useRef(null);

    const routes = useRouter();
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
                            <h2>{product?.name}</h2>
                            <h3>₹{product?.price}</h3>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: product?.description?.html
                                }}></div>

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
                        </ProductStyles.RightContainer>
                    </>
                )}
            </ProductStyles.Container>
        </ProductStyles.Wrapper>
    );
}

export default Product;
