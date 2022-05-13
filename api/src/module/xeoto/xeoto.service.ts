import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { XeDapService } from "../xedap/xedap.service";
import { XeMayService } from "../xemay/xemay.service";

@Injectable()
export class XeOToService {
  constructor (@Inject(forwardRef(() => XeDapService)) private xeDapService: XeDapService, @Inject(forwardRef(() => XeMayService)) private xeMayService: XeMayService) {}

  get message () {
    return 'I am XeOToService'
  }

  get name () {
    return 'XeOToService'
  }

  meet () {
    console.log(`Hello ${this.xeDapService.name}, ${this.xeMayService.name}, ${this.message}`)
  }
}