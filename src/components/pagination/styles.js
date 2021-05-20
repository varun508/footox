import styled from 'styled-components';

const PaginationStyles = {
    Container: styled.div`
        & .pagination {
            display: flex;
            list-style: none;
            outline: none;

            & .next,
            .previous {
                background-color: #eee;
                border: 1px solid #7b829a;
                a {
                    color: #7b829a;
                }
            }

            & .next.disabled,
            .previous.disabled {
                a {
                    color: #b3bccd;
                }
            }
        }

        .pagination > li > a {
            width: 30px;
            height: 30px;
            border-radius: 5px;
            padding: auto;
            outline: none;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .pagination > li {
            margin: 0 5px;
            width: 30px;
            height: 30px;
            border-radius: 5px;
            background-color: #ddd;
            display: flex;
            border: 1px solid #888;
            justify-content: center;
            align-items: center;
        }

        .pagination > .active {
            border: none;
            outline: none;
        }
        .pagination > li > a,
        .pagination > li > span {
            color: black;
        }
        .pagination > li:first-child > a,
        .pagination > li:first-child > span,
        .pagination > li:last-child > a,
        .pagination > li:last-child > span {
            border-radius: unset;
        }
    `
};
export default PaginationStyles;
