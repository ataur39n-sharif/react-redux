import React from 'react';
import {Pagination} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {TProductState} from "../../Redux/reducers/Products/productsReducers";
import {paginate} from "../../Redux/actions/Products/productActions";

const PaginationC = () => {
    const {total, limit, page} = useSelector((state: TProductState) => state.products)
    const dispatch = useDispatch()

    let items = [];
    if (total && limit) {
        for (let number = 1; number <= Math.ceil(total / limit); number++) {
            items.push(
                <Pagination.Item
                    key={number}
                    active={number === page}
                    onClick={() => dispatch(paginate(number))}
                >
                    {number}
                </Pagination.Item>,
            );
        }
    }

    return (
        <div className={'m-5 d-flex justify-content-center'}>
            <Pagination>
                {items}
            </Pagination>
        </div>
    );
};

export default PaginationC;