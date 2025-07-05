import { Injectable } from '@nestjs/common';
import { CreateAttendanceInput } from './dto/create-attendance.input';
import { UpdateAttendanceInput } from './dto/update-attendance.input';
import { AttendanceStatus } from './enums/attendence-status.enum';

@Injectable()
export class AttendanceService {
  private attendanceRecord = [
    {
      id: 1,
      session: 'Math',
      status: AttendanceStatus.P,
      studentId: 1,
      marker: 'Mr Trump',
    },
    {
      id: 2,
      session: 'Math',
      status: AttendanceStatus.L,
      studentId: 1,
      marker: 'Mr Trump',
    },
    {
      id: 3,
      session: 'History',
      status: AttendanceStatus.P,
      studentId: 1,
      marker: 'Mr Historian',
    },

    {
      id: 4,
      session: 'History',
      status: AttendanceStatus.L,
      studentId: 1,
      marker: 'Mr Historian',
    },
  ];

  create(input: CreateAttendanceInput) {
    const id = this.attendanceRecord.length + 1;
    const attendance = { id, ...input };
    this.attendanceRecord.push(attendance);
    return attendance;
  }

  findAll() {
    return this.attendanceRecord;
  }

  findOne(id: number) {
    const attendance = this.attendanceRecord.find((att) => id === att.id);
    if (!attendance) return null;

    return attendance;
  }

  update(input: UpdateAttendanceInput) {
    let attendance = this.attendanceRecord.find((att) => att.id === input.id);

    if (attendance) {
      const index = this.attendanceRecord.indexOf(attendance);
      attendance = { ...attendance, ...input };
      this.attendanceRecord[index] = attendance;
    }

    return attendance;
  }

  getAttendanceByStudentId(studentId: number) {
    const filteredRecord = this.attendanceRecord.filter(
      (a) => a.studentId === studentId,
    );

    return {
      studentId,
      ...this.countStatus(filteredRecord),
    };
  }

  getAttendanceByClass(session: string) {
    const filteredRecord = this.attendanceRecord.filter(
      (a) => a.session === session,
    );

    const counts = this.countStatus(filteredRecord);

    return {
      session,
      ...counts,
    };
  }

  countStatus(attendanceRecord): {
    TotalP: number;
    TotalL: number;
    TotalA: number;
    TotalAP: number;
  } {
    let TotalP = 0;
    let TotalAP = 0;
    let TotalA = 0;
    let TotalL = 0;

    attendanceRecord.forEach((att) => {
      if (att.status === AttendanceStatus.P) {
        TotalP++;
      } else if (att.status === AttendanceStatus.AP) {
        TotalAP++;
      } else if (att.status === AttendanceStatus.A) {
        TotalA++;
      } else {
        TotalL++;
      }
    });

    return { TotalP, TotalAP, TotalA, TotalL };
  }

  remove(id: number) {
    const index = this.attendanceRecord.findIndex((att) => att.id === id);
    if (index === -1) return null;

    const attendance = this.attendanceRecord[index];
    this.attendanceRecord.splice(index, 1);

    return attendance;
  }
}
