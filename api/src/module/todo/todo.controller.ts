import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { TodoService } from './todo.service';

interface ifcPost {
  label: string;
}

@Controller('api/todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
  @Post('/create')
  createItem(@Body() _ifcPost: ifcPost) {
    return this.todoService.createItem(_ifcPost);
  }

  @Get('/all')
  getAll() {
    return this.todoService.getAll();
  }

  @Get('/item/:id')
  getItem(@Param('id') id: string) {
    return this.todoService.getItem(id);
  }

  @Post('/item/:id/status/:status')
  updateStatusItem(
    @Param('id') id: string,
    @Param('status') status: 'default' | 'done' | 'not-done'
  ) {
    return this.todoService.updateStatusItem(id, status);
  }

  @Get('/item/:id/remove')
  removeItem(@Param('id') id: string) {
    return this.todoService.removeItem(id);
  }
}
