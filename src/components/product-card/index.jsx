import React from 'react';
import ProductCardStyles from './styles';

const ProductCard = () => {
    return (
        <ProductCardStyles.Container>
            <img
                src={
                    'https://static.metroshoes.net/media/catalog/product/cache/9eafe73d5fdaa3df55e017c1610bb4ab/2/6/262-7000m11.jpg'
                }
            />
            <p>product name</p>
        </ProductCardStyles.Container>
    );
};

export default ProductCard;
