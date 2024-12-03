import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurahQuizComponent } from './surah-quiz.component';

describe('SurahQuizComponent', () => {
  let component: SurahQuizComponent;
  let fixture: ComponentFixture<SurahQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SurahQuizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SurahQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
