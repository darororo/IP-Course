import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TaskService) {}

  @Get('/:id')
  getTask(@Param('id') id: number) {
    return this.taskService.getTask(id);
  }

  @Get()
  getAllTasks() {
    return this.taskService.getAllTasks();
  }

  @Post()
  createTask(@Body() body: CreateTaskDto) {
    return this.taskService.createTask(body);
  }

  @Patch('/:id/done')
  markTaskAsDone(@Param('id') id: number) {
    return this.taskService.markDone(id);
  }

  @Patch('/:id/pending')
  markTaskAsPending(@Param('id') id: number) {
    return this.taskService.markPending(id);
  }

  @Delete('/:id')
  deleteTask(@Param('id') id: number) {
    return this.taskService.deleteTask(id);
  }

  @Delete()
  deleteAllTasks() {
    return this.taskService.deleteAllTasks();
  }
}
