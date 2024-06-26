import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllChapterComponent } from './all-chapter.component';

describe('AllChapterComponent', () => {
  let component: AllChapterComponent;
  let fixture: ComponentFixture<AllChapterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllChapterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllChapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
