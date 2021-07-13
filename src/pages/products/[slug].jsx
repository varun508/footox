import { useRouter } from 'next/router';
import React from 'react';
import { Product } from '../../containers';

function ProductPage() {
    const router = useRouter();
    const { slug } = router.query;
    console.log('SLUG:', slug);
    return <Product id={'ckqo2dpqom7vt0f03vnz0enc7'} />;
}

export default ProductPage;
