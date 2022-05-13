import { forwardRef, Global, Module } from "@nestjs/common";
import { XeDap } from "../xedap/xedap.module";
import { XeOTo } from "../xeoto/xeoto.module";
import { XeMayService } from "./xemay.service";

@Module({
  imports: [forwardRef(() => XeDap), forwardRef(() => XeOTo)],
  providers: [XeMayService],
  exports: [XeMayService]
})
export class XeMay {}