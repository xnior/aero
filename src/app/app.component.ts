import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { ConsumeServicesComponent } from "./pages/consume-services/consume-services.component";
import { DisplayComponent } from "./pages/metar/metar.component";
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from "@angular/material/tooltip";
import {MatMenuModule} from '@angular/material/menu';
import { ApiService } from "./services/api.service";
import { MatIconModule } from "@angular/material/icon";
import {} from "@angular/common/http";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    ConsumeServicesComponent,
    DisplayComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatButtonModule,
    MatTooltipModule,
    MatMenuModule,
    MatIconModule,
  ],

  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  #apiService = inject(ApiService);
  title = "Teste do sistema Observable";
  public reload(){
    this.#apiService.setData("SBAA,SBAC,SBAE,SBAF,SBAN,SBAQ,SBAR,SBAT,SBAU,SBAX,SBBE,SBBG,SBBH,SBBI,SBBP,SBBQ,SBBR,SBBU,SBBV,SBBW,SBCA,SBCB,SBCC,SBCF,SBCG,SBCH,SBCI,SBCJ,SBCN,SBCO,SBCP,SBCR,SBCT,SBCX,SBCY,SBCZ,SBDB,SBDN,SBDO,SBEG,SBEN,SBES,SBFI,SBFL,SBFN,SBFS,SBFZ,SBGL,SBGM,SBGO,SBGP,SBGR,SBGV,SBGW,SBHT,SBIC,SBIH,SBIL,SBIP,SBIT,SBIZ,SBJA,SBJD,SBJE,SBJH,SBJI,SBJP,SBJR,SBJU,SBJV,SBKG,SBKP,SBLB,SBLE,SBLI,SBLO,SBLS,SBMA,SBME,SBMG,SBMI,SBMK,SBML,SBMM,SBMN,SBMO,SBMQ,SBMS,SBMT,SBMY,SBNF,SBNM,SBNT,SBNV,SBOI,SBPA,SBPB,SBPF,SBPG,SBPJ,SBPK,SBPL,SBPO,SBPP,SBPS,SBPV,SBPW,SBRB,SBRC,SBRD,SBRF,SBRJ,SBRP,SBSC,SBSG,SBSI,SBSJ,SBSL,SBSM,SBSN,SBSO,SBSP,SBSR,SBST,SBSV,SBTA,SBTB,SBTC,SBTD,SBTE,SBTF,SBTG,SBTK,SBTS,SBTT,SBTU,SBTV,SBUA,SBUF,SBUG,SBUL,SBUR,SBUY,SBVC,SBVG,SBVH,SBVT,SBYA,SBYS,SBZM,SDAG,SDAM,SDCO,SDIY,SNBR,SNCP,SNDV,SNGI,SNHS,SNLN,SNPD,SNRU,SNTF,SNVB,SNZR,SSGG,SSKW,SSUM,SWEI,SWGN,SWKO,SWLC,SWPI")
  }
  
}
