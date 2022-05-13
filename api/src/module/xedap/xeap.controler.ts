import { Controller, Get } from "@nestjs/common";
import { XeDapService } from "./xedap.service";

@Controller('xedap')
export class XeDapControler {
  constructor(private xeDapService: XeDapService) {}

  @Get('name')
  getName () {
    return this.xeDapService.name
  }

  @Get('message')
  getMessage () {
    return this.xeDapService.message
  }

  @Get('meet')
  getMeet () {
    return this.xeDapService.meet()
  }
}