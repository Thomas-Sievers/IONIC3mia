import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddCuidadorPage } from './add-cuidador.page';

describe('AddCuidadorPage', () => {
  let component: AddCuidadorPage;
  let fixture: ComponentFixture<AddCuidadorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCuidadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
