import { AErodromesPrivAnac } from "../../../interface/aerodromes-priv-anac.interface";
import { AfterViewInit, Component, OnInit, ViewChild, inject } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatTableDataSource, MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";
import { MatIconModule } from "@angular/material/icon";
import { AERODROMES_ANAC_PRIVATE } from "../../../../assets/DB/priv.db";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { PrivAnacDialogComponent } from "../../../dialog/priv-anac-dialog/priv-anac-dialog.component";
import { MatButtonModule } from "@angular/material/button";
import { Observable, debounce } from "rxjs";
import { AerodromesService } from "../../../services/aerodromes.service";

@Component({
  selector: "app-priv-anac",
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: "./priv-anac.component.html",
  styleUrl: "./priv-anac.component.scss",
})
export class PrivAnacComponent implements OnInit,AfterViewInit {
  
  #dialog = inject(MatDialog);
  
  displayedColumns: string[] = ["cod", "name", "mun"];
  dataSource!: MatTableDataSource<AErodromesPrivAnac>;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  aerodromesService = inject(AerodromesService);
  

  ngOnInit(): void {
this.loadData();
    // this.dataSource = new MatTableDataSource();
  }
  private loadData() {
    // Assuming your service has a method getAerodromesData() that returns a Promise<AErodromesPrivAnac[]>
    this.aerodromesService.getAerodromesData().then((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }

 
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    // console.log(this.dataSource.data);
  }
  debug(data: any) {
    return console.log(data);
  }
  openDialog(data: any) {
    this.#dialog.open(PrivAnacDialogComponent, {
      data,
      height: "auto",
      width: "500px",
    });
    console.log(data);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
