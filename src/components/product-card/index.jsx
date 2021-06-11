import React from 'react';
import ProductCardStyles from './styles';
import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ product }) => {
    return (
        <Link href={'/products/' + product.slug + "?id=" + product.id}>
            <ProductCardStyles.Wrapper>
                <ProductCardStyles.Container>
                    <Image
                        width={400}
                        height={400}
                        objectFit="contain"
                        src={product.thumbnail.url}
                    />
                </ProductCardStyles.Container>
                <ProductCardStyles.DetailContainer>
                    <p>{product.name}</p>
                    <h3>₹{product.price}</h3>
                </ProductCardStyles.DetailContainer>
            </ProductCardStyles.Wrapper>
        </Link>
    );
};

export default ProductCard;
