import React from 'react';
import DealsStyles from './styles';

const Deals = ({ dealsData }) => {
    return (
        <DealsStyles.Container>
            <DealsStyles.DealsCardWrapper>
                {dealsData?.map((el, index) => {
                    return (
                        <DealsStyles.Card key={index}>
                            <a href={el.dealLink} target="__blank">
                                <img src={el.dealImage?.url} />
                            </a>
                        </DealsStyles.Card>
                    );
                })}
            </DealsStyles.DealsCardWrapper>
        </DealsStyles.Container>
    );
};

export default Deals;
