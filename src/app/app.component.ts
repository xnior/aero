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
    this.#apiService.setData("SBAE,SBAF,SBAN,SBAR,SBAX,SBBE,SBBG,SBBH,SBBI,SBBP,SBBQ,SBBR,SBBU,SBBV,SBCA,SBCB,SBCF,SBCG,SBCH,SBCJ,SBCO,SBCP,SBCT,SBCY,SBDN,SBEG,SBEN,SBES,SBFI,SBFL,SBFN,SBFS,SBFZ,SBGL,SBGO,SBGP,SBGR,SBGV,SBGW,SBHT,SBIH,SBIL,SBIP,SBIZ,SBJA,SBJH,SBJI,SBJP,SBJR,SBJU,SBJV,SBKG,SBKP,SBLB,SBLO,SBLS,SBMA,SBME,SBMG,SBMI,SBMK,SBMM,SBMN,SBMO,SBMQ,SBMT,SBNF,SBNT,SBNV,SBOI,SBPA,SBPB,SBPJ,SBPK,SBPL,SBPO,SBPS,SBPV,SBRB,SBRF,SBRJ,SBRP,SBSC,SBSG,SBSJ,SBSL,SBSM,SBSN,SBSP,SBSR,SBST,SBSV,SBTA,SBTB,SBTD,SBTE,SBTV,SBUF,SBUG,SBUL,SBUR,SBUY,SBVC,SBVG,SBVT,SBYS,SBZM")
  }
  
}
