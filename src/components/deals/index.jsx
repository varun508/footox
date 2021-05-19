import React from 'react';
import DealsStyles from './styles';

const Deals = () => {
    return (
        <DealsStyles.Container>
            <DealsStyles.DealsCardWrapper>
                <DealsStyles.Card>
                    <a href="#">
                        <img
                            src={
                                'https://static.metroshoes.net/media/wysiwyg/homepage/Comfy-casual-Collection-MID-BANNER-METRO-REV.jpg'
                            }
                        />
                    </a>
                </DealsStyles.Card>
                <DealsStyles.Card>
                    <a href="#">
                        <img
                            src={
                                'https://static.metroshoes.net/media/wysiwyg/homepage/Crocs-MID-BANNER-MAY-2021.jpg'
                            }
                            alt=""
                        />
                    </a>
                </DealsStyles.Card>
                <DealsStyles.Card>
                    <a href="#">
                        <img
                            src={
                                'https://static.metroshoes.net/media/wysiwyg/homepage/WFH-WOMEN-MID-BANNER-METRO.jpg'
                            }
                            alt=""
                        />
                    </a>
                </DealsStyles.Card>
                <DealsStyles.Card>
                    <a href="#">
                        <img
                            src={
                                'https://static.metroshoes.net/media/wysiwyg/homepage/WFH-MEN-MID-BANNER-METRO.jpg'
                            }
                        />
                    </a>
                </DealsStyles.Card>
            </DealsStyles.DealsCardWrapper>
        </DealsStyles.Container>
    );
};

export default Deals;
