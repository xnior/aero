import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivAnacComponent } from './priv-anac.component';

describe('PrivAnacComponent', () => {
  let component: PrivAnacComponent;
  let fixture: ComponentFixture<PrivAnacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivAnacComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrivAnacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
