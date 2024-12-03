import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuzQuizComponent } from './juz-quiz.component';

describe('JuzQuizComponent', () => {
  let component: JuzQuizComponent;
  let fixture: ComponentFixture<JuzQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JuzQuizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JuzQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
