import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Groupcard } from './groupcard';

describe('Groupcard', () => {
  let component: Groupcard;
  let fixture: ComponentFixture<Groupcard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Groupcard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Groupcard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
