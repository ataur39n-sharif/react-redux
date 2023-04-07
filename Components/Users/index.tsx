import React from 'react';
import {Table} from "react-bootstrap";
import {useRouter} from "next/router";
import {GrView} from "react-icons/gr";

const UserList = ({users}: { users: any[] }) => {
    const router = useRouter()
    return (
        <div className={'mt-5'}>
            <Table striped bordered hover className={'text-center'}>
                <thead>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>email</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {
                    users?.map((user: any, id) => {
                        return (
                            <tr key={id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <GrView
                                        className={'me-2'}
                                        type={'button'}
                                        onClick={() => router.push(`/user/view/${user.id}`)}
                                    />
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </Table>
        </div>
    );
};

export default UserList;