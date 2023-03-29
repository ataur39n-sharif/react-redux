import React, {useEffect, useState} from 'react';
import {Button, Form, InputGroup} from "react-bootstrap";
import List from "./list";
import {toast, Toaster} from "react-hot-toast";
import {useDispatch, useSelector} from "react-redux";
import {addTodo} from "../../Redux/actions/TodoActions";
import {RootState} from "../../Redux/reducers/rootReducer";
import {loadPosts} from "../../Redux/Thunk/jsonPlaceholderThunk";
import {AnyAction} from "redux";
import {ThunkDispatch} from "redux-thunk";

const Todo = () => {
    const [task, setTask] = useState('')

    const taskList = useSelector((state: RootState) => state.todos.taskList)
    const dispatch = useDispatch<ThunkDispatch<{}, {}, AnyAction>>()
    const handleTask = () => {
        toast.loading('wait')
        setTimeout(() => {
            toast.dismiss()
            if (!task) return toast.error('Input your task name')
            // taskList.push(task)
            dispatch(addTodo(task))
            setTask('')
            toast.success('Added')
        }, 1000)
    }

    useEffect(() => {
        dispatch(loadPosts())
            .then(res => console.log('Successfully all post loaded.'))
            .catch(err => console.log(err.message))
    }, [dispatch])

    return (
        <div>
            <Toaster/>
            <h6 className={'text-center'}> My Todo{"'"}s </h6>
            <small className={'d-flex justify-content-end'}>(without thunk)</small>
            <div>
                <InputGroup className="mb-3">
                    <Form.Control
                        value={task}
                        placeholder="Task name"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        name={'task'}
                        id={'task'}
                        onChange={(e) => setTask(e.target.value)}
                        onKeyDown={({key}) => key === "Enter" && handleTask()}
                    />
                    <Button
                        onClick={() => handleTask()}
                        variant="outline-secondary" id="button-addon2">
                        +
                    </Button>
                </InputGroup>
            </div>
            <div>
                <List taskList={taskList}/>
            </div>
        </div>
    );
};

export default Todo;