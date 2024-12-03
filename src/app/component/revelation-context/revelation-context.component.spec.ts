import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevelationContextComponent } from './revelation-context.component';

describe('RevelationContextComponent', () => {
  let component: RevelationContextComponent;
  let fixture: ComponentFixture<RevelationContextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RevelationContextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RevelationContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
