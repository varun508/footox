import React from 'react';
import ProductCardStyles from './styles';
import Image from 'next/image';

const ProductCard = ({ product }) => {
    return (
        <ProductCardStyles.Wrapper>
            <ProductCardStyles.Container>
                <Image width={400} height={400} objectFit="contain" src={product.images[0].url} />
            </ProductCardStyles.Container>
            <ProductCardStyles.DetailContainer>
                <h3>{product.name}</h3>
                <p>₹{product.price}</p>
            </ProductCardStyles.DetailContainer>
        </ProductCardStyles.Wrapper>
    );
};

export default ProductCard;
