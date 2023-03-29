import React from 'react';
import {ListGroup} from "react-bootstrap";
import {FaRegEdit} from "react-icons/fa";
import {AiFillDelete} from "react-icons/ai";
import {toast} from "react-hot-toast";
import {useDispatch} from "react-redux";
import {deleteTodo} from "../../Redux/Todo/actions/TodoActions";

const List = ({taskList}: { taskList: string[] }) => {
    const dispatch = useDispatch()
    const handleDelete = (task) => {
        dispatch(deleteTodo(task))
    }
    return (
        <div>
            <ListGroup as="ol" numbered>
                {
                    taskList.map((task: string, id: number) => <>
                        <ListGroup.Item key={id}
                                        as="li"
                                        className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                                {task}
                            </div>
                            <div>
                                <FaRegEdit
                                    type={'button'}
                                    className={'m-2'}
                                    onClick={() => toast.error('Not ready yet')}
                                />
                                <AiFillDelete
                                    type={'button'}
                                    onClick={() => handleDelete(task)}
                                />
                            </div>

                        </ListGroup.Item>
                    </>)
                }
            </ListGroup>
        </div>
    );
};

export default List;