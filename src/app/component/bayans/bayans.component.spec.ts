import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BayansComponent } from './bayans.component';

describe('BayansComponent', () => {
  let component: BayansComponent;
  let fixture: ComponentFixture<BayansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BayansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BayansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
