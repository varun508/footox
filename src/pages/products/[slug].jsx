import { useRouter } from 'next/router';
import React from 'react';
import { Product } from '../../containers';

function ProductPage() {
    const router = useRouter();

    const productId = router.query.id;

    if (!productId) {
        return <div>Loading...</div>;
    }

    return <Product id={productId} />;
}

export default ProductPage;
