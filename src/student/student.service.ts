import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Student } from './student.entity';
import { EntityRepository } from '@mikro-orm/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: EntityRepository<Student>,
  ) {}

  async createStudent(name, email, age): Promise<Student> {
    const student = this.studentRepository.create({
      id: uuidv4(),
      age,
      name,
      email,
    });

    await this.studentRepository.persistAndFlush(student);
    return student;
  }

  async getStudent(): Promise<Student[]> {
    return await this.studentRepository.findAll();
  }
}
