import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TodoDocument = Todo & Document;

@Schema()
export class Todo {
  @Prop({ type: String })
  name: string;

  @Prop({ type: Boolean })
  completed: boolean;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
