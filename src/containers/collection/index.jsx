import CollectionContainerStyles from './styles';
import { ProductCard } from '../../components';
import { products } from '../../sample/products';

import 'react-dropdown/style.css';

function CollectionContainer() {
    const options = ['All', 'Latest', 'Price high to low', 'Price low to high'];
    const defaultOption = options[0];
    return (
        <CollectionContainerStyles.Wrapper>
            <CollectionContainerStyles.Container>
                <CollectionContainerStyles.FilterContainer>
                    <h2>Collections</h2>
                    <CollectionContainerStyles.CustomDropdown
                        style={{ width: '100px !important' }}
                        options={options}
                        onChange={() => {}}
                        value={defaultOption}
                        placeholder="Filter"
                    />
                </CollectionContainerStyles.FilterContainer>
                <CollectionContainerStyles.ProductItemsContainer>
                    {products.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </CollectionContainerStyles.ProductItemsContainer>
            </CollectionContainerStyles.Container>
        </CollectionContainerStyles.Wrapper>
    );
}

export default CollectionContainer;
