import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { ITodo } from './todo.type';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  async fetchAll(@Res() response) {
    const todos = await this.todoService.getAllTodos();
    return response.status(HttpStatus.OK).json(todos);
  }

  @Get('/:id')
  async fetchSingle(@Res() response, @Param('id') id) {
    const todo = await this.todoService.getTodoById(id);
    return response.status(HttpStatus.OK).json(todo);
  }

  @Post()
  async createTodo(@Res() response, @Body() todo: ITodo) {
    const newTodo = await this.todoService.createTodo(todo);
    return response.status(HttpStatus.OK).json(newTodo);
  }

  @Put('/:id')
  async updateTodo(@Res() response, @Param('id') id, @Body() todo: ITodo) {
    const updateTodo = await this.todoService.updateTodo(id, todo);
    return response.status(HttpStatus.OK).json(updateTodo);
  }

  @Delete('/:id')
  async deleteTodo(@Res() response, @Param('id') id) {
    const deleteTodo = await this.todoService.deleteTodo(id);
    return response.status(HttpStatus.OK).json(deleteTodo);
  }
}
