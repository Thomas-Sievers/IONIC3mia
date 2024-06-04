import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelaValorFinalPage } from './tela-valor-final.page';

describe('TelaValorFinalPage', () => {
  let component: TelaValorFinalPage;
  let fixture: ComponentFixture<TelaValorFinalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaValorFinalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
