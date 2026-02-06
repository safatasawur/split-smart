import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Verifypage } from './verifypage';

describe('Verifypage', () => {
  let component: Verifypage;
  let fixture: ComponentFixture<Verifypage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Verifypage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Verifypage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
