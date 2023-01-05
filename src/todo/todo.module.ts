import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoResolver } from './todo.resolver';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Todo } from './todo.entity';

@Module({
  imports: [MikroOrmModule.forFeature([Todo])],
  providers: [TodoService, TodoResolver],
})
export class TodoModule {}
