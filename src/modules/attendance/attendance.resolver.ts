import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AttendanceService } from './attendance.service';
import { CreateAttendanceInput } from './dto/create-attendance.input';
import { UpdateAttendanceInput } from './dto/update-attendance.input';

@Resolver('Attendance')
export class AttendanceResolver {
  constructor(private readonly attendanceService: AttendanceService) {}

  @Mutation('createAttendance')
  create(@Args('input') createAttendanceInput: CreateAttendanceInput) {
    return this.attendanceService.create(createAttendanceInput);
  }

  @Query('attendances')
  findAll() {
    return this.attendanceService.findAll();
  }

  @Query('attendance')
  findOne(@Args('id') id: number) {
    return this.attendanceService.findOne(id);
  }

  @Query('getAttendanceByStudent')
  getAttendanceByStudent(@Args('studentId') id: number) {
    return this.attendanceService.getAttendanceByStudentId(id);
  }

  @Query('getAttendanceByClass')
  getAttendanceByClass(@Args('session') session: string) {
    return this.attendanceService.getAttendanceByClass(session);
  }

  @Mutation('updateAttendance')
  update(@Args('input') updateAttendanceInput: UpdateAttendanceInput) {
    return this.attendanceService.update(updateAttendanceInput);
  }

  @Mutation('removeAttendance')
  remove(@Args('id') id: number) {
    return this.attendanceService.remove(id);
  }
}
