import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyatQuizComponent } from './ayat-quiz.component';

describe('AyatQuizComponent', () => {
  let component: AyatQuizComponent;
  let fixture: ComponentFixture<AyatQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AyatQuizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AyatQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
