import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grouppage } from './grouppage';

describe('Grouppage', () => {
  let component: Grouppage;
  let fixture: ComponentFixture<Grouppage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Grouppage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Grouppage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
