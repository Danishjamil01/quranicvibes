import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadByJuzComponent } from './read-by-juz.component';

describe('ReadByJuzComponent', () => {
  let component: ReadByJuzComponent;
  let fixture: ComponentFixture<ReadByJuzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReadByJuzComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReadByJuzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
