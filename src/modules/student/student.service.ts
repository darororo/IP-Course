import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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

  enroll(input: EnrollStudentInput) {
    const lastId = this.students.length + 1;
    const idCard = input.name.toLowerCase() + '123';

    const targetClass = this.students.filter((s) => s.class == input.class);
    const existingStu = targetClass.find((s) => s.idCard == idCard);
    if (existingStu)
      throw new HttpException('Student exists', HttpStatus.BAD_REQUEST);

    const student = { ...input, id: lastId, idCard };

    this.students.push(student);
    return student;
  }

  findAll() {
    return this.students;
  }

  findOne(id: number) {
    return this.students.find((s) => s.id === id);
  }

  findByClass(name: string) {
    return this.students.filter((s) => s.class === name);
  }

  update(input: UpdateStudentInput) {
    let student = this.students.find((s) => s.id === input.id);
    if (student) {
      const index = this.students.indexOf(student);
      student = { ...student, ...input };
      this.students[index] = student;
    }
    return student;
  }

  remove(id: number) {
    const index = this.students.findIndex((s) => s.id === id);
    if (index === -1) return;
    const student = this.students[index];
    this.students.splice(index, 1);

    return student;
  }
}
