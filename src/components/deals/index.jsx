import React from 'react';
import DealsStyles from './styles';
import Image from 'next/image';

const Deals = ({ dealsData }) => {
    return (
        <DealsStyles.Container>
            <DealsStyles.DealsCardWrapper>
                {dealsData?.map((el, index) => {
                    return (
                        <DealsStyles.Card key={index}>
                            <a href={el.dealLink} target="__blank">
                                <DealsStyles.ImageContainer>
                                    <Image height={450} width={450} src={el.dealImage?.url} />
                                </DealsStyles.ImageContainer>
                            </a>
                        </DealsStyles.Card>
                    );
                })}
            </DealsStyles.DealsCardWrapper>
        </DealsStyles.Container>
    );
};

export default Deals;
