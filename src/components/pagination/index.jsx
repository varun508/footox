import React from 'react';
import ReactPaginate from 'react-paginate';

import PaginationStyles from './styles.js';

const Pagination = ({ pageCount = 3, onPageChange, pageSelected = 0 }) => {
    return (
        <PaginationStyles.Container>
            <ReactPaginate
                previousLabel={'<'}
                nextLabel={'>'}
                initialPage={pageSelected}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={pageCount}
                marginPagesDisplayed={1}
                pageRangeDisplayed={2}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                activeClassName={'active'}
                onPageChange={onPageChange}
            />
        </PaginationStyles.Container>
    );
};

export default Pagination;
