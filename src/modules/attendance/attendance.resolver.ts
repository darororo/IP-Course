import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AttendanceService } from './attendance.service';
import { CreateAttendanceInput } from './dto/create-attendance.input';
import { UpdateAttendanceInput } from './dto/update-attendance.input';

@Resolver('Attendance')
export class AttendanceResolver {
  constructor(private readonly attendanceService: AttendanceService) {}

  @Mutation('createAttendance')
  create(@Args('createAttendanceInput') createAttendanceInput: CreateAttendanceInput) {
    return this.attendanceService.create(createAttendanceInput);
  }

  @Query('attendance')
  findAll() {
    return this.attendanceService.findAll();
  }

  @Query('attendance')
  findOne(@Args('id') id: number) {
    return this.attendanceService.findOne(id);
  }

  @Mutation('updateAttendance')
  update(@Args('updateAttendanceInput') updateAttendanceInput: UpdateAttendanceInput) {
    return this.attendanceService.update(updateAttendanceInput.id, updateAttendanceInput);
  }

  @Mutation('removeAttendance')
  remove(@Args('id') id: number) {
    return this.attendanceService.remove(id);
  }
}
