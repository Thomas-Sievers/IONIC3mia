import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangeAnimalPage } from './change-animal.page';

describe('ChangeAnimalPage', () => {
  let component: ChangeAnimalPage;
  let fixture: ComponentFixture<ChangeAnimalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeAnimalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
