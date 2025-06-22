import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { StudentService } from './student.service';
import { EnrollStudentInput } from './dto/enroll-student.input';
import { UpdateStudentInput } from './dto/update-student.input';
import { HttpException, HttpStatus } from '@nestjs/common';
import { RemoveStudentInput } from './dto/remove-student.input';

@Resolver('Student')
export class StudentResolver {
  constructor(private readonly studentService: StudentService) {}

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

  @Mutation('enrollStudent')
  create(@Args('input') input: EnrollStudentInput) {
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

  @Query('students')
  findAll() {
    return this.students;
  }

  @Query('student')
  findOne(@Args('id') id: number) {
    return this.students.find((s) => s.id === id);
  }

  @Query('studentsByClass')
  findByClass(@Args('name') name: string) {
    return this.students.filter((s) => s.class === name);
  }

  @Mutation('updateStudent')
  update(@Args('input') input: UpdateStudentInput) {
    let student = this.students.find((s) => s.id === input.id);
    if (student) {
      const index = this.students.indexOf(student);
      student = { ...student, ...input };
      this.students[index] = student;
    }

    return student;
  }

  @Mutation('removeStudent')
  remove(@Args('input') input: RemoveStudentInput) {
    const index = this.students.findIndex((s) => s.id === input.id);
    const student = this.students[index];
    if (student) {
      this.students.splice(index, 1);
      return student;
    }

    return null;
  }
}
