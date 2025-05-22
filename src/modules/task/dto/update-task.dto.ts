import { PartialType } from '@nestjs/swagger';
import { CreateTaskDto } from './create-task.dto';
import { IsDate } from 'class-validator';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  @IsDate()
  completedAt: Date | null;
}
