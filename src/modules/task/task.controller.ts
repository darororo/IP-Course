import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseFilters,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { HttpExceptionFilter } from 'src/filters/ http-exception.filter';

@Controller('tasks')
@UseFilters(new HttpExceptionFilter())
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
  @UsePipes(new ValidationPipe({ whitelist: true }))
  createTask(@Body() body: CreateTaskDto) {
    return this.taskService.createTask(body);
  }

  @Patch('/:id')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  updateTask(@Param('id') id: number, @Body() body: UpdateTaskDto) {
    return this.taskService.updateTask(id, body);
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
