import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { XeMayService } from "../xemay/xemay.service";
import { XeOToService } from "../xeoto/xeoto.service";

@Injectable()
export class XeDapService {
  constructor (
    @Inject(forwardRef(() => XeMayService)) private xeMayService: XeMayService, 
    @Inject(forwardRef(() => XeOToService)) private xeOToService: XeOToService) {}
  get name () {
    return 'XeDapService'
  }

  get message () {
    return 'I am XeDapService'
  }

  meet () {
    return `Hello ${this.xeMayService.name}, ${this.xeOToService.name}, ${this.message}`
  }
}