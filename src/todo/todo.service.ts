import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo, TodoDocument } from './todo.schema';
import { ITodo } from './todo.type';

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<TodoDocument>) {}

  async getAllTodos(): Promise<ITodo[]> {
    return await this.todoModel.find().exec();
  }

  async getTodoById(_id: string): Promise<ITodo> {
    return await this.todoModel.findById(_id).exec();
  }

  async createTodo(todo: ITodo): Promise<ITodo> {
    const newTodo = new this.todoModel(todo);
    return newTodo.save();
  }

  async updateTodo(_id: string, todo: Todo): Promise<ITodo> {
    return await this.todoModel.findByIdAndUpdate(_id, todo, { new: true });
  }

  async deleteTodo(_id: string): Promise<void> {
    return await this.todoModel.findByIdAndDelete(_id);
  }
}
