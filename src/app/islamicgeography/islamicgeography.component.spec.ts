import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IslamicgeographyComponent } from './islamicgeography.component';

describe('IslamicgeographyComponent', () => {
  let component: IslamicgeographyComponent;
  let fixture: ComponentFixture<IslamicgeographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IslamicgeographyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IslamicgeographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
