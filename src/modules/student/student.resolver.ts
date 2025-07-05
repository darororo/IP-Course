import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { StudentService } from './student.service';
import { EnrollStudentInput } from './dto/enroll-student.input';
import { UpdateStudentInput } from './dto/update-student.input';

@Resolver('Student')
export class StudentResolver {
  constructor(private readonly studentService: StudentService) {}

  @Mutation('enrollStudent')
  create(@Args('input') input: EnrollStudentInput) {
    return this.studentService.enroll(input);
  }

  @Query('students')
  findAll() {
    return this.studentService.findAll();
  }

  @Query('student')
  findOne(@Args('id') id: number) {
    return this.studentService.findOne(id);
  }

  @Query('studentsByClass')
  findByClass(@Args('name') name: string) {
    return this.studentService.findByClass(name);
  }

  @Mutation('updateStudent')
  update(@Args('input') input: UpdateStudentInput) {
    return this.studentService.update(input);
  }

  @Mutation('removeStudent')
  remove(@Args('id') id: number) {
    return this.studentService.remove(id);
  }
}
