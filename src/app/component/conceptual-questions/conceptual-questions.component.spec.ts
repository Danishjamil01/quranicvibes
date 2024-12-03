import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptualQuestionsComponent } from './conceptual-questions.component';

describe('ConceptualQuestionsComponent', () => {
  let component: ConceptualQuestionsComponent;
  let fixture: ComponentFixture<ConceptualQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConceptualQuestionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConceptualQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
