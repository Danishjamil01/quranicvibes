import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IslamiccultureComponent } from './islamicculture.component';

describe('IslamiccultureComponent', () => {
  let component: IslamiccultureComponent;
  let fixture: ComponentFixture<IslamiccultureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IslamiccultureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IslamiccultureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
