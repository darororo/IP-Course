import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { In, Repository } from 'typeorm';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task) private readonly taskRepo: Repository<Task>,
  ) {}

  getTask(id: number) {
    return this.taskRepo.findOne({ where: { id } });
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
    // const tasks = await this.taskRepo.find();
    // const ids = tasks.map((t) => t.id);
    // console.log(ids);

    // await this.taskRepo.softDelete({ id: In(ids) });

    await this.taskRepo
      .createQueryBuilder()
      .softDelete()
      .where('1=1') // targets all rows
      .execute();

    return { message: 'all tasks deleted' };
  }
}
