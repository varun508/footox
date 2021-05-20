import React from 'react';
import ReactPaginate from 'react-paginate';

import PaginationStyles from './styles.js';

const Pagination = ({ pageCount = 3, onPageChange }) => {
    return (
        <PaginationStyles.Container>
            <ReactPaginate
                previousLabel={'<'}
                nextLabel={'>'}
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
