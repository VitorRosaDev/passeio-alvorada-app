import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkatePage } from './skate.page';

describe('SkatePage', () => {
  let component: SkatePage;
  let fixture: ComponentFixture<SkatePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SkatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
