import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersInQuranComponent } from './characters-in-quran.component';

describe('CharactersInQuranComponent', () => {
  let component: CharactersInQuranComponent;
  let fixture: ComponentFixture<CharactersInQuranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharactersInQuranComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharactersInQuranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
