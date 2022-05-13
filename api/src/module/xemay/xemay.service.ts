import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { XeDapService } from "../xedap/xedap.service";
import { XeOToService } from "../xeoto/xeoto.service";

@Injectable()
export class XeMayService {
  constructor (@Inject(forwardRef(() => XeDapService)) private xeDapService: XeDapService, @Inject(forwardRef(() => XeOToService)) private xeOToService: XeOToService) {}
  get message () {
    return 'I am XeMayService'
  }

  get name () {
    return 'XeMayService'
  }

  meet () {
    console.log(`Hello ${this.xeDapService.name}, ${this.xeOToService.name}, ${this.message}`)
  }
}