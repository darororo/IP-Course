import { EnrollStudentInput } from './enroll-student.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateStudentInput extends PartialType(EnrollStudentInput) {
  id: number;
}
