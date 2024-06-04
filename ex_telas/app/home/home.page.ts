import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public router: Router) {}

  tempoDiaria = 0;
  precoDiaria = 0;
  valorTotal = 0;

  trocarTela(){
    this.valorTotal = this.precoDiaria * this.precoDiaria;
    this.router.navigateByUrl(`/tela-confirmar/${this.tempoDiaria}/${this.precoDiaria}/${this.valorTotal}`)
  }

  pinFormatter(value: number) {
    return `${value}`;
  }
}
