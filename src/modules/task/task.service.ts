import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { Repository } from 'typeorm';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task) private readonly taskRepo: Repository<Task>,
  ) {}

  async getTask(id: number) {
    const task = await this.taskRepo.findOne({ where: { id } });

    if (!task) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }

    return task;
  }

  getAllTasks() {
    return this.taskRepo.find();
  }

  async createTask(body: CreateTaskDto) {
    const task = this.taskRepo.create(body);
    await this.taskRepo.save(task);
    return this.getTask(task.id);
  }
  async updateTask(id: number, body: UpdateTaskDto) {
    await this.taskRepo.update(id, body);
    return this.getTask(id);
  }

  async markDone(id: number) {
    await this.taskRepo.update(id, { completedAt: new Date().toISOString() });
  }

  async markPending(id: number) {
    await this.taskRepo.update(id, { completedAt: null });
  }

  async deleteTask(id: number) {
    const task = await this.getTask(id);
    await this.taskRepo.softDelete({ id });
    return task;
  }

  async deleteAllTasks() {
    await this.taskRepo
      .createQueryBuilder()
      .softDelete()
      .where('true') // targets all rows
      .execute();

    return { message: 'all tasks deleted' };
  }
}
