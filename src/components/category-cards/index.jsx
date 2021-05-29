import React from 'react';
import CategoryCardStyles from './styles';
import Image from 'next/image';
import Link from 'next/link';

function cardLink(type) {
    if (type === 'Men') return '/collection?type=men';
    else if (type === 'Women') return '/collection?type=women';
    else if (type === 'Kids') return '/collection?type=kids';
    else return '/collection?type=men';
}

const CategoryCards = ({ categoryData }) => {
    categoryData = categoryData.slice(0, 3);
    return (
        <CategoryCardStyles.Container>
            {categoryData.map((el, index) => {
                return (
                    <CategoryCardStyles.Card key={index}>
                        <Link href={cardLink(el.name)}>
                            <Image width={350} height={350} src={el.image?.url} />
                        </Link>
                    </CategoryCardStyles.Card>
                );
            })}
        </CategoryCardStyles.Container>
    );
};

export default CategoryCards;
