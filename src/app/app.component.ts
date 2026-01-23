import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatMenuModule } from "@angular/material/menu";
import { ApiService } from "./services/api.service";
import { MatIconModule } from "@angular/material/icon";
import {} from "@angular/common/http";
import { Browser } from "leaflet";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
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

  public country:string = "ARGENTINA";
  public reloadBR(data: string) {
    console.log("country", data);
    this.#apiService.requestedLoc.set(false);
    this.#apiService.setDataCountry(data);
  }
}
