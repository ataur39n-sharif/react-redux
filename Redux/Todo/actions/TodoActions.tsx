import {TodoActions} from "../actionTypes";

type returnType = {
    type: string,
    payload: string
}

export const addTodo = (data: string): returnType => {
    return {
        type: TodoActions.ADD_TODO,
        payload: data
    }
}

export const deleteTodo = (data: string): returnType => {
    return {
        type: TodoActions.DELETE_TODO,
        payload: data
    }
}