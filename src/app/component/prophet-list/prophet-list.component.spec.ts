import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProphetListComponent } from './prophet-list.component';

describe('ProphetListComponent', () => {
  let component: ProphetListComponent;
  let fixture: ComponentFixture<ProphetListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProphetListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProphetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
