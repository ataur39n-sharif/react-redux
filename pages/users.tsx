import React, {useEffect, useState} from 'react';
import axios from "axios";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => setUsers(response.data))
            .catch(error => console.log(error.message))
    }, [])
    console.log(users)
    return (
        <div className={'container'}>
            <p>this is user page</p>
        </div>
    );
};

export default Users;