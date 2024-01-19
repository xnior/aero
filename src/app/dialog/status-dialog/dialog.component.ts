import { Component, Inject, OnInit, inject, signal } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { ApiService } from "../../services/api.service";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: "app-dialog",
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: "./dialog.component.html",
  styleUrl: "./dialog.component.scss",
})
export class DialogComponent implements OnInit {
  #apiService = inject(ApiService);
  constructor(@Inject(MAT_DIALOG_DATA) private _data: string,
  public dialogRef: MatDialogRef<DialogComponent>) {}
  getData = signal<any | null>(null);
  itemData = signal<string>("");

public closeDialog(){
  return this.dialogRef.close();
}

  ngOnInit(): void {
    this.#apiService.httpApiAerodromes$(this._data[0]).subscribe((res) => {
      this.getData.set(res.data), this.itemData.set(this._data[4]);
    });

    this.getData.set(this._data);
  }
}
