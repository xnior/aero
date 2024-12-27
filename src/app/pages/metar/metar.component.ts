import { Component, OnDestroy, OnInit, inject, signal } from "@angular/core";
import { ApiService } from "../../services/api.service";
import { Subject, takeUntil } from "rxjs";
import { CommonModule } from "@angular/common";
import { MatTableModule } from "@angular/material/table";
import { metar } from "../../interface/metar.interface";
import { ConsumeServicesComponent } from "../consume-services/consume-services.component";

@Component({
    selector: "app-metar",
    standalone: true,
    imports: [CommonModule, MatTableModule, ConsumeServicesComponent],
    templateUrl: "./metar.component.html",
    styleUrl: "./metar.component.scss"
})
export class DisplayComponent implements OnInit, OnDestroy {
  #apiService = inject(ApiService);
  #unsubscribe: Subject<void> = new Subject();
  aerodromesCount: number = 0;
  public getData: string = "";
  public getMetar = this.#apiService.getListTask;

  displayedColumns: string[] = ["localidade", "mens"];
  dataSource: metar[] = [];
listAerodromes: any[] = [];
  ngOnInit(): void {
    this.#apiService
      .getData$()
      .pipe(takeUntil(this.#unsubscribe))
      .subscribe((data) => {
        this.getData = data;
      });
    this.#apiService
      .getDataMetar$()
      .pipe(takeUntil(this.#unsubscribe))
      .subscribe((res) => {
        this.dataSource = res.data.data;
        this.aerodromesCount = this.dataSource.length;
      });
    this.#apiService.httpApiMetar$().subscribe((res) => {
      this.dataSource = res.data.data;

      this.aerodromesCount = this.dataSource.length;
      // console.log(this.dataSource);
    });
      }

  ngOnDestroy(): void {
    this.#unsubscribe.next();
    this.#unsubscribe.complete();
  }
}
