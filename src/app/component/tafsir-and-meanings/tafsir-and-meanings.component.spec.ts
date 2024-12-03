import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TafsirAndMeaningsComponent } from './tafsir-and-meanings.component';

describe('TafsirAndMeaningsComponent', () => {
  let component: TafsirAndMeaningsComponent;
  let fixture: ComponentFixture<TafsirAndMeaningsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TafsirAndMeaningsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TafsirAndMeaningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
