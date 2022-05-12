import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { TodoService } from './todo.service';

interface ifcPost {
  label: string;
}

@Controller('api/todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
  @Post('/create')
  create(@Body() _ifcPost: ifcPost) {
    return this.todoService.create(_ifcPost);
  }

  @Get('/all')
  getAll() {
    return this.todoService.getAll();
  }

  @Get('/item/:id')
  getById(@Param('id') id: string) {
    return this.todoService.getById(id);
  }

  @Post('/item/:id/status/:status')
  updateStatus(
    @Param('id') id: string,
    @Param('status') status: 'default' | 'done' | 'not-done'
  ) {
    return this.todoService.updateStatus(id, status);
  }

  @Get('/item/:id/remove')
  removeById(@Param('id') id: string) {
    return this.todoService.removeById(id);
  }
}
