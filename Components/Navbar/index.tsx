import React from 'react';
import {useRouter} from "next/router";
import {BsSearch} from "react-icons/bs";
import {FaUserSecret} from "react-icons/fa";
import Link from "next/link";


const Navbar = () => {
    const router = useRouter()

    const paths = [
        {
            path: "/",
            text: "Home"
        },
        {
            path: "/products",
            text: "Products"
        },
        {
            path: "/add-product",
            text: "Add Product"
        },
        {
            path: "/search",
            text: <BsSearch/>
        },
        {
            path: "/users",
            text: <FaUserSecret/>
        }
    ]

    return (
        <div className={'mt-2'}>
            <ul className={'d-flex justify-content-center text-black'} style={{listStyle: 'none',}}>
                {
                    paths.map((path, index) => {
                        return (
                            <li key={index} className={'p-3'}>
                                <Link
                                    id={'my_nav-li'}
                                    href={path.path}
                                    style={{textDecoration: 'none', color: 'black'}}
                                >
                                    {path.text}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default Navbar;