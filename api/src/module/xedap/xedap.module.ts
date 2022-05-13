import { forwardRef, Module } from "@nestjs/common";
import { XeMay } from "../xemay/xemay.module";
import { XeMayService } from "../xemay/xemay.service";
import { XeOTo } from "../xeoto/xeoto.module";
import { XeOToService } from "../xeoto/xeoto.service";
import { XeDapControler } from "./xeap.controler";
import { XeDapService } from "./xedap.service";

@Module({
  controllers: [XeDapControler],
  imports: [forwardRef(() => XeMay), forwardRef(() => XeOTo)],
  // providers: [XeDapService],
  providers: [
    XeDapService,
    // {
    //   provide: 'XeDapService',
    //   // useClass: XeDapService
    //   // useFactory: (x: XeDapService) => x,
    //   useFactory: (xeDapService: XeDapService) => {
    //     console.log(xeDapService.name, xeDapService.meet())
    //     return xeDapService
    //   },
    //   inject: [XeDapService, XeMay, XeOTo]
    // }
  ],
  exports: [XeDapService],
})
export class XeDap {}