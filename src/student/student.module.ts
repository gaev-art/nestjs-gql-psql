import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Student } from './student.entity';
import { StudentsResolver } from './students.resolver';

@Module({
  imports: [MikroOrmModule.forFeature([Student])],
  providers: [StudentService, StudentsResolver],
})
export class StudentModule {}
