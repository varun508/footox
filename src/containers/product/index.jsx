import React from 'react';

import ProductStyles from './styles';
import MyImageGallery from './imageGallery';

function Product(props) {
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
                    <h2>Product Name should be only here</h2>
                    <h3>$100</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nulla saepe
                        eveniet totam aperiam voluptate similique eaque id neque non, nisi beatae
                        distinctio eos quae magni voluptatibus? Explicabo, minus delectus!
                    </p>

                    <ProductStyles.ButtonContainer>
                        <ProductStyles.CustomButton color="#F0C17D22">
                            <img src="/images/amazon.png" alt="" />
                        </ProductStyles.CustomButton>
                        <ProductStyles.CustomButton color="#4B9BDE22">
                            <img src="/images/flipkart.svg" alt="" />
                        </ProductStyles.CustomButton>
                    </ProductStyles.ButtonContainer>
                </ProductStyles.RightContainer>
            </ProductStyles.Container>
        </ProductStyles.Wrapper>
    );
}

export default Product;
