import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThematicQuizComponent } from './thematic-quiz.component';

describe('ThematicQuizComponent', () => {
  let component: ThematicQuizComponent;
  let fixture: ComponentFixture<ThematicQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThematicQuizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThematicQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
