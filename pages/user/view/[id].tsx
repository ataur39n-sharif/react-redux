import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import toast from "react-hot-toast";
import {Button} from "react-bootstrap";
import {IoArrowBackCircle} from "react-icons/io5";

const SingleUser = () => {
    const router = useRouter()
    const {id} = router.query

    const [user, setUser] = useState({
        id: null,
        name: "",
        username: "",
        email: "",
        phone: "",
    })


    useEffect(() => {
        toast.dismiss()
        toast.loading('loading...')
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => res.json())
            .then(data => {
                setUser(data)
                toast.dismiss()
            })
            .catch(err => console.log(err))
    }, [id])

    return (
        <div className={'d-flex align-items-center'} style={{minHeight: '90vh'}}>
            <div className={'container text-center d-flex justify-content-center h-100'}>
                <div>
                    <h5>Id : {user.id}</h5>
                    <p>Name:{user.name}</p>
                    <p>Username : {user.username}</p>
                    <p>Email : {user.email}</p>
                    <p>Phone: {user.phone}</p>

                    <Button variant={'outline-dark'}
                            onClick={() => router.push(`/users`)}>
                        <IoArrowBackCircle/>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default SingleUser;