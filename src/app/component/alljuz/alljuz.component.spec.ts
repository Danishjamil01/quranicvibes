import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlljuzComponent } from './alljuz.component';

describe('AlljuzComponent', () => {
  let component: AlljuzComponent;
  let fixture: ComponentFixture<AlljuzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlljuzComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlljuzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
