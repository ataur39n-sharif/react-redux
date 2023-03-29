import React, {useEffect} from 'react';
import {ListGroup, Placeholder} from "react-bootstrap";
import {FaRegEdit} from "react-icons/fa";
import {toast} from "react-hot-toast";
import {AiFillDelete} from "react-icons/ai";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../Redux/reducers/rootReducer";
import {Ipost} from "../../Redux/reducers/jsonPlaceholderReducers";
import {showLoading} from "../../Redux/actions/jsonPlaceholderActions";

const Users = () => {
    const state = useSelector((state: RootState) => state.jsonPlaceholder)
    const dispatch = useDispatch()
    const {posts, loading} = state
    useEffect(() => {
        dispatch(showLoading())
    }, [])
    return (
        <div>
            <h6 className={'text-center'}>My post{"'"}s</h6>
            <small className={'d-flex justify-content-end'}>(with thunk)</small>
            {
                loading ?
                    <div>
                        <Placeholder as="p" animation="glow">
                            <Placeholder xs={12}/>
                            <Placeholder xs={12}/>
                            <Placeholder xs={12}/>
                            <Placeholder xs={12}/>
                            <Placeholder xs={12}/>
                            <Placeholder xs={12}/>
                            <Placeholder xs={12}/>
                            <Placeholder xs={12}/>
                            <Placeholder xs={12}/>
                            <Placeholder xs={12}/>
                        </Placeholder>
                    </div>
                    :
                    <ListGroup as="ol" numbered>
                        {
                            posts.slice(0, 10).map((post: Ipost, id: number) =>
                                <ListGroup.Item key={id}
                                                as="li"
                                                className="d-flex justify-content-between align-items-start"
                                >
                                    <div className="ms-2 me-auto">
                                        {post.title}
                                    </div>
                                    <div>
                                        <FaRegEdit
                                            type={'button'}
                                            className={'m-2'}
                                            onClick={() => toast.error('Not ready yet')}
                                        />
                                        <AiFillDelete
                                            type={'button'}
                                            // onClick={() => handleDelete(task)}
                                        />
                                    </div>

                                </ListGroup.Item>
                            )
                        }
                    </ListGroup>
            }

        </div>
    );
};

export default Users;