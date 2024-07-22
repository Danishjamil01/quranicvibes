import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuranicworldComponent } from './quranicworld.component';

describe('QuranicworldComponent', () => {
  let component: QuranicworldComponent;
  let fixture: ComponentFixture<QuranicworldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuranicworldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuranicworldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
