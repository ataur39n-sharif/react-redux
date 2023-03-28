import React, {useState} from 'react';
import {Button, Form, InputGroup} from "react-bootstrap";
import List from "./list";
import {toast, Toaster} from "react-hot-toast";

const Todo = () => {
    const [taskList, setTaskList] = useState<string[]>([])
    const [task, setTask] = useState('')
    console.log(taskList)
    console.log(task)
    const handleTask = () => {
        toast.loading('wait')
        setTimeout(() => {
            toast.dismiss()
            if (!task) return toast.error('Input your task name')
            taskList.push(task)
            setTask('')
            toast.success('Added')
        },2000)


    }
    return (
        <div>
            <Toaster position="top-right"/>
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