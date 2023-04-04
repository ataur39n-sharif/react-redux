import React from 'react';
import {Pagination} from "react-bootstrap";

const PaginationC = ({data, status}: { data: any, status: any }) => {
    const {total, limit} = data
    const [active, setActive] = status
    // console.log(data)

    let items = [];
    for (let number = 1; number <= Math.ceil(total / limit); number++) {
        items.push(
            <Pagination.Item
                key={number}
                active={number === active}
                onClick={() => setActive(number)}
            >
                {number}
            </Pagination.Item>,
        );
    }

    console.log()

    return (
        <div className={'m-5 d-flex justify-content-center'}>
            <Pagination>
                {items}
            </Pagination>
        </div>
    );
};

export default PaginationC;