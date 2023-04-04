import React from 'react';
import {Button, Nav} from "react-bootstrap";
import {useRouter} from "next/router";
import {BsSearch} from "react-icons/bs";
import {FaUserSecret} from "react-icons/fa";

const Navbar = () => {
    const router = useRouter()

    return (
        <div className={'mt-2'}>
            <Nav className="justify-content-center" activeKey="/"
                 onSelect={(selectKey) => selectKey && router.push(selectKey)}>
                <Nav.Item>
                    <Nav.Link eventKey="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="products">Products</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="add-product">Add product</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="search">
                        <Button variant="light"><BsSearch/></Button>
                    </Nav.Link>

                </Nav.Item>
                <Nav.Item>
                    <Button variant="light"><FaUserSecret/></Button>
                </Nav.Item>
            </Nav>
        </div>
    );
};

export default Navbar;