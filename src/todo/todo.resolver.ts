import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TodoService } from './todo.service';
import { TodoType } from './todo.type';

@Resolver()
export class TodoResolver {
  constructor(private todoService: TodoService) {}

  @Mutation(() => TodoType)
  createTodo(@Args('title') title: string) {
    return this.todoService.createTodo(title);
  }

  @Query(() => [TodoType])
  getTodo() {
    return this.todoService.getTodo();
  }
}
