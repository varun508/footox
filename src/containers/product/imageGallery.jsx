import React from 'react';

import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

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
        thumbnailPosition: 'left',
        items
    };

    return <ImageGallery {...properties} />;
}

export default MyImageGallery;
