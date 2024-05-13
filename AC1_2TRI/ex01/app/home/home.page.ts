import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  emprestimo = 0;
  juros = 0;
  meses = 0;
  prestacaoMensal = 0;
  total = 0;

  constructor() {}

  fazerCalculos(){
    this.prestacaoMensal = this.emprestimo * (this.juros/100)
    this.total = (this.prestacaoMensal * this.meses) + this.emprestimo
  }

  pinFormatterNormal(value: number) {
    return `${value}`;
  }

  pinFormatterPorcentage(value: number) {
    return `${value}%`;
  }
}
