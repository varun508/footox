import React, { Component, useRef, useEffect } from 'react';

import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import MyReactImageMagnify from './imageMagnify';

function MyImageGallery(props) {
    const { images } = props;

    let items = images.map((el) => {
        return { original: el.url, thumbnail: el.url };
    });

    const properties = {
        useBrowserFullscreen: false,
        showPlayButton: false,
        showFullscreenButton: false,
        showNav: false,
        items
    };

    return <ImageGallery {...properties} />;
}

export default MyImageGallery;
