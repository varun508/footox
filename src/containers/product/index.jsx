import React from 'react';
import { gql, useQuery } from '@apollo/client';

import ProductStyles from './styles';
import MyImageGallery from './imageGallery';

const GET_PRODUCT_DATA = gql`
    query getProduct($id: ID!) {
        products(where: { id: $id }) {
            name
            id
            images {
                url
            }
            slug
            description
            price
            categories {
                name
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
    const { loading, error, data } = useQuery(GET_PRODUCT_DATA, {
        variables: { id: 'ckp1muqg05nxo0b610m722i3v' }
    });

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    console.log(data);

    const product = data?.products ? data?.products[0] : {};

    return (
        <ProductStyles.Wrapper>
            <ProductStyles.Container>
                <ProductStyles.LeftContainer>
                    <ProductStyles.GalleryContainer>
                        <MyImageGallery />
                    </ProductStyles.GalleryContainer>
                </ProductStyles.LeftContainer>
                <ProductStyles.RightContainer>
                    {/* <ProductStyles.Portal id="myPortal" /> */}
                    <h2>{product.name}</h2>
                    <h3>₹{product.price}</h3>
                    <p>{product.description} </p>

                    <ProductStyles.ButtonContainer>
                        {product.amazonLink && (
                            <a href={product.amazonLink} target="__blank">
                                <ProductStyles.CustomButton color="#F0C17D22">
                                    <img src="/images/amazon.png" alt="" />
                                </ProductStyles.CustomButton>
                            </a>
                        )}
                        {product.flipkartLink && (
                            <a href={product.flipkartLink} target="__blank">
                                <ProductStyles.CustomButton color="#4B9BDE22">
                                    <img src="/images/flipkart.svg" alt="" />
                                </ProductStyles.CustomButton>
                            </a>
                        )}
                    </ProductStyles.ButtonContainer>
                </ProductStyles.RightContainer>
            </ProductStyles.Container>
        </ProductStyles.Wrapper>
    );
}

export default Product;
