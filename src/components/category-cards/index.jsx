import React from 'react';
import CategoryCardStyles from './styles';
import Image from 'next/image';

const CategoryCards = ({ categoryData }) => {
    categoryData = categoryData.slice(0, 3);
    return (
        <CategoryCardStyles.Container>
            {categoryData.map((el, index) => {
                return (
                    <CategoryCardStyles.Card key={index}>
                        <a href={el.dealLink}>
                            <Image width={350} height={350} src={el.image?.url} />
                        </a>
                    </CategoryCardStyles.Card>
                );
            })}
        </CategoryCardStyles.Container>
    );
};

export default CategoryCards;
