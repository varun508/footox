import MenContainerStyles from './styles';
import { ProductCard } from '../../components';
import { products } from '../../sample/products';

import 'react-dropdown/style.css';

function MenContainer() {
    const options = ['All', 'Latest', 'Price high to low', 'Price low to high'];
    const defaultOption = options[0];
    return (
        <MenContainerStyles.Wrapper>
            <MenContainerStyles.Container>
                <MenContainerStyles.FilterContainer>
                    <h2>Men Items</h2>
                    <MenContainerStyles.CustomDropdown
                        style={{ width: '100px !important' }}
                        options={options}
                        onChange={() => {}}
                        value={defaultOption}
                        placeholder="Filter"
                    />
                </MenContainerStyles.FilterContainer>
                <MenContainerStyles.ProductItemsContainer>
                    {products.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </MenContainerStyles.ProductItemsContainer>
            </MenContainerStyles.Container>
        </MenContainerStyles.Wrapper>
    );
}

export default MenContainer;
