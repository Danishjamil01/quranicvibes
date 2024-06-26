import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadQuranComponent } from './read-quran.component';

describe('ReadQuranComponent', () => {
  let component: ReadQuranComponent;
  let fixture: ComponentFixture<ReadQuranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReadQuranComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReadQuranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
