import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivAnacDialogComponent } from './priv-anac-dialog.component';

describe('PrivAnacDialogComponent', () => {
  let component: PrivAnacDialogComponent;
  let fixture: ComponentFixture<PrivAnacDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivAnacDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrivAnacDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
