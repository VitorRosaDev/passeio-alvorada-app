import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValeConferirPage } from './vale-conferir.page';

describe('ValeConferirPage', () => {
  let component: ValeConferirPage;
  let fixture: ComponentFixture<ValeConferirPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ValeConferirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
