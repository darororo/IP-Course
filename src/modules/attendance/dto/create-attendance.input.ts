import { AttendanceStatus } from '../enums/attendence-status.enum';

export class CreateAttendanceInput {
  studentId: number;
  marker: string;
  status: AttendanceStatus;
  session: string;
}
