import React from 'react';
import ProductCardStyles from './styles';

const ProductCard = ({ product }) => {
    return (
        <ProductCardStyles.Wrapper>
            <ProductCardStyles.Container>
                <img src={product.images[0].url} />
            </ProductCardStyles.Container>
            <ProductCardStyles.DetailContainer>
                <h3>{product.name}</h3>
                <p>₹{product.price}</p>
            </ProductCardStyles.DetailContainer>
        </ProductCardStyles.Wrapper>
    );
};

export default ProductCard;
