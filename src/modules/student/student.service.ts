import { Injectable } from '@nestjs/common';
import { EnrollStudentInput } from './dto/enroll-student.input';
import { UpdateStudentInput } from './dto/update-student.input';

@Injectable()
export class StudentService {
  private students = [
    {
      id: 1,
      name: 'John',
      class: 'Math',
      idCard: 'john123',
    },
    {
      id: 2,
      name: 'Sovath',
      class: 'English',
      idCard: 'sovath123',
    },
    {
      id: 3,
      name: 'Claire',
      class: 'History',
      idCard: 'claire123',
    },
    {
      id: 4,
      name: 'Mark',
      class: 'History',
      idCard: 'mark123',
    },
  ];

  enroll(enrollStudentInput: EnrollStudentInput) {
    return 'This action adds a new student';
  }

  findAll() {
    return `This action returns all student`;
  }

  findOne(id: number) {
    return `This action returns a #${id} student`;
  }

  update(id: number, updateStudentInput: UpdateStudentInput) {
    return `This action updates a #${id} student`;
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }
}
