import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './todo.entity'
import { Repository } from 'typeorm'

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo) private readonly todoRepository: Repository<Todo>,
  ) {
  }

  getAll() {
    return this.todoRepository.find()
  }
  async createItem(todo) {
    const newPost = await this.todoRepository.create(todo);
    await this.todoRepository.save(newPost);
    return newPost;
  }

  getItem(id) {
    return this.todoRepository.findOne(id);
  }

  async updateStatusItem(
    id: string,
    status: 'default' | 'done' | 'not-done'
  ) {
    const item = await this.todoRepository.findOne(id)
    if (item && item.id) {
      item.status = status
      await this.todoRepository.save(item);
      return item
    }
    throw new Error(`Not Found id: ${id}`)
  }

  async removeItem(id: string) {
    const item = await this.todoRepository.findOne(id)
    if (item && item.id) {
      await this.todoRepository.delete(id)
      return {  success: true }
    }
    throw new Error(`Not Found id: ${id}`)
  }
}
