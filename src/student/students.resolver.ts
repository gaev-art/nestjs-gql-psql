import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { StudentService } from './student.service';
import { Query } from '@nestjs/graphql';
import { StudentType } from './student.type';

@Resolver()
export class StudentsResolver {
  constructor(private studentService: StudentService) {}

  @Query(() => String)
  getStuff() {
    return 'worked!';
  }

  @Query(() => [StudentType])
  getStudent() {
    return this.studentService.getStudent();
  }

  @Mutation(() => StudentType)
  createStudent(
    @Args('name') name: string,
    @Args('email') email: string,
    @Args('age') age: number,
  ) {
    return this.studentService.createStudent(name, email, age);
  }
}
