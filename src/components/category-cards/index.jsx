import React from 'react';
import CategoryCardStyles from './styles';

const CategoryCards = () => {
    return (
        <CategoryCardStyles.Container>
            <CategoryCardStyles.Card>
                <img
                    src={
                        'https://static.metroshoes.net/media/wysiwyg/homepage/Men-CATEGORY-272x350-REV.jpg'
                    }
                />
            </CategoryCardStyles.Card>
            <CategoryCardStyles.Card>
                <img
                    src={
                        'https://static.metroshoes.net/media/wysiwyg/homepage/Women-CATEGORY-272x350-REV.jpg'
                    }
                    alt=""
                />
            </CategoryCardStyles.Card>
            <CategoryCardStyles.Card>
                <img
                    src={
                        'https://static.metroshoes.net/media/wysiwyg/homepage/KIDS-CATEGORY-272x350-REV.jpg'
                    }
                    alt=""
                />
            </CategoryCardStyles.Card>
        </CategoryCardStyles.Container>
    );
};

export default CategoryCards;
