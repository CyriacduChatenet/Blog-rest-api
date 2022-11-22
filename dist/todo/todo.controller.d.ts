import { TodoService } from './todo.service';
import { ITodo } from './todo.type';
export declare class TodoController {
    private readonly todoService;
    constructor(todoService: TodoService);
    fetchAll(response: any): Promise<any>;
    fetchSingle(response: any, id: any): Promise<any>;
    createTodo(response: any, todo: ITodo): Promise<any>;
    updateTodo(response: any, id: any, todo: ITodo): Promise<any>;
    deleteTodo(response: any, id: any): Promise<any>;
}
