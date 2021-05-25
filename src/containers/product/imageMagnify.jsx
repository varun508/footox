import React, { Component, useEffect } from 'react';

import ReactImageMagnify from 'react-image-magnify';

function MyReactImageMagnify(props) {
    return (
        <ReactImageMagnify
            {...{
                smallImage: {
                    alt: 'Wristwatch by Ted Baker London',
                    isFluidWidth: true,
                    src: 'https://placeimg.com/640/480/any'
                },
                largeImage: {
                    src: 'https://placeimg.com/640/480/any',
                    width: 1200,
                    height: 1800
                },
                enlargedImagePortalId: 'myPortal'
            }}
        />
    );
}

export default MyReactImageMagnify;
