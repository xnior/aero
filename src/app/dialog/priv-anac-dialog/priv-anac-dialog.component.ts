import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { AErodromesPrivAnac } from '../../interface/aerodromes-priv-anac.interface';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-priv-anac-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogTitle, MatDialogContent, MatButtonModule, MatIconModule],
  templateUrl: './priv-anac-dialog.component.html',
  styleUrl: './priv-anac-dialog.component.scss'
})
export class PrivAnacDialogComponent  {
  constructor(@Inject(MAT_DIALOG_DATA) private _data: AErodromesPrivAnac,
    public elementRef: MatDialogRef<PrivAnacDialogComponent>,
  ) {}

public data = this._data;

  public close(){
    this.elementRef.close();
  }
  
  

}
