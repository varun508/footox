import CollectionStyles from './styles';
import { Pagination, ProductCard } from '../../components';

import 'react-dropdown/style.css';
import { useRouter } from 'next/router';
import { gql, useQuery } from '@apollo/client';
import { useState } from 'react';

// const GET_COLLECTION_DATA = gql`
//     query getCollection($id: ID!) {
//         products(where: { id: $id }) {
//             name
//             images {
//                 url
//             }
//             slug
//             description
//             price
//             categories {
//                 name
//             }
//             productSizeVariants {
//                 name
//                 size
//             }
//             productColorVariants {
//                 color
//                 name
//             }
//         }
//     }
// `;

const GET_COLLECTION_DATA = gql`
    query getCollection($category: String!) {
        products(where: { categories_some: { name_starts_with: $category } }) {
            name
            images {
                url
            }

            flipkartLink
            amazonLink
            price
        }
    }
`;

function CollectionContainer() {
    const [skip, setSkip] = useState(12);
    const [page, setPage] = useState(1);
    const [offset, setOffset] = useState(12);
    const options = ['All', 'Latest', 'Price high to low', 'Price low to high'];
    const defaultOption = options[0];

    const router = useRouter();
    const collectionType = router?.query?.type ? router?.query?.type : '';

    const { loading, error, data } = useQuery(GET_COLLECTION_DATA, {
        variables: { category: collectionType }
    });

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    const products = data ? data?.products : [];

    console.log(data);

    return (
        <CollectionStyles.Wrapper>
            <CollectionStyles.Container>
                <CollectionStyles.FilterContainer>
                    <h2> {collectionType}'s Collection</h2>
                </CollectionStyles.FilterContainer>
                <CollectionStyles.FilterContainer>
                    <h2>Filter</h2>
                    <CollectionStyles.CustomDropdown
                        style={{ width: '100px !important' }}
                        options={options}
                        onChange={() => {}}
                        value={defaultOption}
                        placeholder="Filter"
                    />
                </CollectionStyles.FilterContainer>
                <CollectionStyles.ProductItemsContainer>
                    {products.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </CollectionStyles.ProductItemsContainer>
                <CollectionStyles.PaginationContainer>
                    <Pagination />
                </CollectionStyles.PaginationContainer>
            </CollectionStyles.Container>
        </CollectionStyles.Wrapper>
    );
}

export default CollectionContainer;
