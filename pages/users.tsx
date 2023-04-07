import React, {useEffect, useState} from 'react';
import axios from "axios";
import UserList from "../Components/Users";
import toast from "react-hot-toast";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        toast.dismiss()
        toast.loading('Please wait....')
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setUsers(response.data)
                toast.dismiss();
            })
            .catch(error => console.log(error.message))
    }, [])
    return (
        <div className={'container'}>
            <UserList users={users}/>
        </div>
    );
};

export default Users;