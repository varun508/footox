import CollectionStyles from './styles';
import { Pagination, ProductCard } from '../../components';
import { products } from '../../sample/products';

import 'react-dropdown/style.css';
import { useRouter } from 'next/router';
import { gql, useQuery } from '@apollo/client';

const GET_COLLECTION_DATA = gql`
    query GetHomeData {
        deals {
            dealImage {
                url
            }
            dealLink
        }
    }
`;

function CollectionContainer() {
    const options = ['All', 'Latest', 'Price high to low', 'Price low to high'];
    const defaultOption = options[0];

    const router = useRouter();
    const collectionType = router?.query?.type;

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
