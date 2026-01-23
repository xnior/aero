import { Component, OnDestroy, OnInit, inject } from "@angular/core";
import { ApiService } from "../../services/api.service";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
    selector: "app-consume-services",
    imports: [CommonModule, FormsModule],
    templateUrl: "./consume-services.component.html",
    styleUrl: "./consume-services.component.scss"
})
export class ConsumeServicesComponent {
  #apiService = inject(ApiService);

  public input_localide = "";
  
  public requestData() {
    this.#apiService.requestedLoc.set(true);
    if (this.input_localide.length > 0) {
      this.#apiService.setData(this.input_localide);
      // console.log(this.input_localide);
    }else{ 
      this.#apiService.setData("SBGR,SBSP,SBCT,SBFL,SBPA,SBRP,SBUR,SBUL,SBBR")
    }
  }
  // console.log(this.dataInput);
}
