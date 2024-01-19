import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from "@angular/router";
import { ConsumeServicesComponent } from "./pages/consume-services/consume-services.component";
import { DisplayComponent } from "./pages/metar/metar.component";
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from "@angular/material/tooltip";
import {MatMenuModule} from '@angular/material/menu';
import { ApiService } from "./services/api.service";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ConsumeServicesComponent,
    DisplayComponent,
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
    this.#apiService.setData("SBAR,SBBE,SBBR,SBCF,SBCG,SBCT,SBCY,SBEG,SBFI,SBFL,SBFZ,SBGL,SBGR,SBKP,SBMQ,SBMT,SBPA,SBPJ,SBPL,SBPV,SBRF,SBRJ,SBRP,SBSG,SBSJ,SBSL,SBSN,SBSP,SBVT,SBYS")
  }
  
}
