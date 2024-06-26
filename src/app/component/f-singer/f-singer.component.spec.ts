import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FSingerComponent } from './f-singer.component';

describe('FSingerComponent', () => {
  let component: FSingerComponent;
  let fixture: ComponentFixture<FSingerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FSingerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FSingerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
