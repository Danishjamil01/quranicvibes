import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosesingerComponent } from './choosesinger.component';

describe('ChoosesingerComponent', () => {
  let component: ChoosesingerComponent;
  let fixture: ComponentFixture<ChoosesingerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChoosesingerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChoosesingerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
