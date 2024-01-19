import {
  Component,
  OnDestroy,
  OnInit,
  inject,
  signal,
} from "@angular/core";
import { ApiService } from "../../services/api.service";
import { Subject, takeUntil } from "rxjs";
import { FormsModule } from "@angular/forms";
import { SearchPipe } from "../../pipes/search.pipe";
import { MatTableModule } from "@angular/material/table";
import { DialogComponent } from "../../dialog/status-dialog/dialog.component";
import { AErodromes } from "../../interface/aerodromes.interface";
import { MatDialog } from "@angular/material/dialog";
import { ConsumeServicesComponent } from "../consume-services/consume-services.component";

@Component({
  selector: "app-status",
  standalone: true,
  imports: [FormsModule, SearchPipe, MatTableModule,ConsumeServicesComponent],
  templateUrl: "./status.component.html",
  styleUrl: "./status.component.scss",
})
export class StatusComponent implements OnInit, OnDestroy {
  constructor() {}
  #apiService = inject(ApiService);
  #dialog = inject(MatDialog);
  #unsubscribe = new Subject<void>();
  setStatusTask = signal<any>(null);
  searchStatus: string = "";
  aerodromesCount: number = 0;

  openDialog(data: any) {
    this.#dialog.open(DialogComponent, {
      data,
      height: "auto",
      width: "500px",
    });
  }

  ngOnInit(): void {
    this.#apiService.httpApiStatus$().subscribe((res) => {
      this.setStatusTask.set(res.data);
    });
    this.#apiService
      .getDataStatus$()
      .pipe(takeUntil(this.#unsubscribe))
      .subscribe((res) => {
        this.setStatusTask.set(res.data);
        this.aerodromesCount = res.data.length;
      });
  }
  ngOnDestroy(): void {
    this.#unsubscribe.next();
    this.#unsubscribe.complete();
  }
}
