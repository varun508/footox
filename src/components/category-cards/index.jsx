import React from 'react';
import CategoryCardStyles from './styles';

const CategoryCards = ({ categoryData }) => {
    categoryData = categoryData.slice(0, 3);
    return (
        <CategoryCardStyles.Container>
            {categoryData.map((el, index) => {
                return (
                    <CategoryCardStyles.Card key={index}>
                        <a href={el.dealLink}>
                            <img src={el.image?.url} />
                        </a>
                    </CategoryCardStyles.Card>
                );
            })}
        </CategoryCardStyles.Container>
    );
};

export default CategoryCards;
