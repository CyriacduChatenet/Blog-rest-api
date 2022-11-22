import { Model } from 'mongoose';
import { Todo, TodoDocument } from './todo.schema';
import { ITodo } from './todo.type';
export declare class TodoService {
    private todoModel;
    constructor(todoModel: Model<TodoDocument>);
    getAllTodos(): Promise<ITodo[]>;
    getTodoById(_id: string): Promise<ITodo>;
    createTodo(todo: ITodo): Promise<ITodo>;
    updateTodo(_id: string, todo: Todo): Promise<ITodo>;
    deleteTodo(_id: string): Promise<void>;
}
