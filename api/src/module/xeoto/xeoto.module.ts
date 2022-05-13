import { forwardRef, Module } from "@nestjs/common";
import { XeDap } from "../xedap/xedap.module";
import { XeMay } from "../xemay/xemay.module";
import { XeOToService } from "./xeoto.service";

@Module({
  imports: [forwardRef(() => XeDap), forwardRef(() => XeMay)],
  providers: [XeOToService],
  exports: [XeOToService]
})
export class XeOTo {}