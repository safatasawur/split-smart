import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Groupform } from './groupform';

describe('Groupform', () => {
  let component: Groupform;
  let fixture: ComponentFixture<Groupform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Groupform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Groupform);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
