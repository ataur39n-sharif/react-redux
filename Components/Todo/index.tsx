import React, {useState} from 'react';
import {Button, Form, InputGroup} from "react-bootstrap";
import List from "./list";
import {toast, Toaster} from "react-hot-toast";
import {useDispatch, useSelector} from "react-redux";
import {addTodo} from "../../Redux/Todo/actions/TodoActions";

const Todo = () => {
    const taskList = useSelector((state) => state.taskList)
    const dispatch = useDispatch()
    const [task, setTask] = useState('')
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

    return (
        <div>
            <Toaster/>
            <h1 className={'text-center'}> My Todo{"'"}s</h1>
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