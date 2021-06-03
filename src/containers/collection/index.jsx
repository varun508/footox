import CollectionStyles from './styles';
import { Pagination, ProductCard } from '../../components';
import { ChasingDots } from 'styled-spinkit';

import Link from 'next/link';

import 'react-dropdown/style.css';
import { useRouter } from 'next/router';
import { gql, useQuery } from '@apollo/client';
import { useState } from 'react';

const GET_COLLECTION_DATA = gql`
    query getCollection(
        $category: String!
        $first: Int!
        $skip: Int!
        $orderBy: ProductOrderByInput
        $minPrice: Int
    ) {
        products(
            where: { categories_some: { name_starts_with: $category }, price_gt: $minPrice }
            first: $first
            skip: $skip
            orderBy: $orderBy
        ) {
            id
            name
            images {
                url
            }
            thumbnail {
                url
            }
            flipkartLink
            amazonLink
            price
        }
    }
`;

const GET_PRODUCTS = gql`
    query getPRODUCTS($category: String!) {
        products(where: { categories_some: { name_starts_with: $category } }) {
            id
        }
    }
`;

function CollectionContainer() {
    const [skip, setSkip] = useState(0);
    const [first, setFirst] = useState(12);
    const [orderBy, setOrderBy] = useState(null);
    const [pageNo, setPageNo] = useState(0);
    const [minPrice, setMinPrice] = useState(0);

    const sortingOptions = [
        { label: 'All', value: 'all' },
        { label: 'Price low to high', value: 'lowToHigh' },
        { label: 'Price high to low', value: 'highToLow' }
    ];
    const filterOptions = [
        { label: 'None', value: 0 },
        { label: 'Above ₹999', value: 999 },
        { label: 'Above ₹1999', value: 1999 },
        { label: 'Above ₹2999', value: 2999 },
        { label: 'Above ₹3999', value: 3999 },
        { label: 'Above ₹4999', value: 4999 }
    ];

    const [selectedSorting, setSelectedSorting] = useState(sortingOptions[0]);
    const [selectedFiltering, setSelectedFiltering] = useState(filterOptions[0]);

    const router = useRouter();
    const collectionType = router?.query?.type ? router?.query?.type : '';

    const productsArray = useQuery(GET_PRODUCTS, { variables: { category: collectionType } });
    const productsCount = productsArray.data?.length ? productsArray.data.length : 1;

    // ***************************** cms ***************************************
    const { loading, error, data } = useQuery(GET_COLLECTION_DATA, {
        variables: {
            category: collectionType,
            first: first,
            skip: skip,
            orderBy: orderBy,
            minPrice
        }
    });
    if (error) return `Error! ${error.message}`;
    let products = data ? data?.products : [];

    // **************************** handlers *******************************
    const handlePaginationChange = (page) => {
        setSkip(page.selected * first);
        setPageNo(page.selected);
    };

    const handleSorting = (selected) => {
        console.log(selected);

        if (selected.value === 'all') {
            setOrderBy(null);
        } else if (selected.value === 'highToLow') {
            setOrderBy('price_DESC');
        } else if (selected.value === 'lowToHigh') {
            setOrderBy('price_ASC');
        }
        setSelectedSorting(selected);
    };
    const handleFilter = (selected) => {
        console.log(selected);

        setMinPrice(selected.value);
        setSelectedFiltering(selected);
    };

    return (
        <CollectionStyles.Wrapper>
            <CollectionStyles.Container>
                {loading ? (
                    <div className="dot-container">
                        <ChasingDots />
                        <h3>loading...</h3>
                    </div>
                ) : (
                    <>
                        <CollectionStyles.HeadingContainer>
                            <h2> {collectionType}'s Collection</h2>
                        </CollectionStyles.HeadingContainer>

                        <CollectionStyles.FilterContainer>
                            <div>
                                <b>Filter</b>
                                <CollectionStyles.CustomDropdown
                                    // style={{ width: '150px !important' }}
                                    options={filterOptions}
                                    onChange={handleFilter}
                                    value={selectedFiltering}
                                    placeholder="Filter"
                                />
                            </div>
                            <div>
                                <b>Sort</b>
                                <CollectionStyles.CustomDropdown
                                    style={{ width: '100px !important' }}
                                    options={sortingOptions}
                                    onChange={handleSorting}
                                    value={selectedSorting}
                                    placeholder="Filter"
                                />
                            </div>
                        </CollectionStyles.FilterContainer>

                        <CollectionStyles.ProductItemsContainer>
                            {products.map((product, index) => (
                                <ProductCard key={index} product={product} />
                            ))}
                        </CollectionStyles.ProductItemsContainer>
                        <CollectionStyles.PaginationContainer>
                            <Pagination
                                pageSelected={pageNo}
                                pageCount={
                                    productsCount % first === 0
                                        ? parseInt(productsCount / first)
                                        : parseInt(productsCount / first) + 1
                                }
                                onPageChange={handlePaginationChange}
                            />
                        </CollectionStyles.PaginationContainer>
                    </>
                )}
            </CollectionStyles.Container>
        </CollectionStyles.Wrapper>
    );
}

export default CollectionContainer;
