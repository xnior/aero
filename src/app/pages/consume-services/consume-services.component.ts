import { Component, OnDestroy, OnInit, inject } from "@angular/core";
import { ApiService } from "../../services/api.service";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-consume-services",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./consume-services.component.html",
  styleUrl: "./consume-services.component.scss",
})
export class ConsumeServicesComponent {
  #apiService = inject(ApiService);

  public input_localide = "SBRP,SBSP,SBUR,SBBR";
  
  public requestData() {
    if (this.input_localide.length > 0) {
      this.#apiService.setData(this.input_localide);
      // console.log(this.input_localide);
    }
  }
  private locationScroll() {
    window.scroll({left: 0, top: 100, behavior: 'smooth'});
  }
  public focusInput() {
    this.locationScroll();
  }
  // console.log(this.dataInput);
}
