import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProphetslifeComponent } from './prophetslife.component';

describe('ProphetslifeComponent', () => {
  let component: ProphetslifeComponent;
  let fixture: ComponentFixture<ProphetslifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProphetslifeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProphetslifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
