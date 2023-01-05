import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Todo } from './todo.entity';
import { EntityRepository } from '@mikro-orm/core';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: EntityRepository<Todo>,
  ) {}

  async createTodo(title): Promise<Todo> {
    const todo = this.todoRepository.create({
      id: uuidv4(),
      title,
      checked: false,
    });

    await this.todoRepository.persistAndFlush(todo);
    return todo;
  }

  async getTodo(): Promise<Todo[]> {
    return await this.todoRepository.findAll();
  }
}
