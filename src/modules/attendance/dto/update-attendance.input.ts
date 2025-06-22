import { CreateAttendanceInput } from './create-attendance.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateAttendanceInput extends PartialType(CreateAttendanceInput) {
  id: number;
}
