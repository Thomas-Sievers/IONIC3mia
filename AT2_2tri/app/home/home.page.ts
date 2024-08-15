import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public router: Router) {}

  prestacao = 0;
  juros = 0;
  meses = 0;

  calcular(){

    let i = 0;

    while(i < this.meses){
      this.prestacao = Number(this.prestacao / 100 * this.juros) + Number(this.prestacao);
      i++
    }
    
    this.router.navigateByUrl(`/tela-confirmar/${this.prestacao}`)
  }

  pinFormatterPercentage(value: number) {
    return `${value}%`;
  }

  pinFormatterNormal(value: number) {
    return `${value}`;
  }
}
