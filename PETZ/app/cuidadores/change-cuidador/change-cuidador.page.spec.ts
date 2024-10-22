import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangeCuidadorPage } from './change-cuidador.page';

describe('ChangeCuidadorPage', () => {
  let component: ChangeCuidadorPage;
  let fixture: ComponentFixture<ChangeCuidadorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeCuidadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
