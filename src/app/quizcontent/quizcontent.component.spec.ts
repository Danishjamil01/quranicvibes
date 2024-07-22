import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizcontentComponent } from './quizcontent.component';

describe('QuizcontentComponent', () => {
  let component: QuizcontentComponent;
  let fixture: ComponentFixture<QuizcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuizcontentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuizcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
