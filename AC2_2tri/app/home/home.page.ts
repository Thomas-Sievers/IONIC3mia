import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  tempMedia = 0;
  frutas: string[] = [];
  mensagem = "";

  constructor(public router: Router) {}

  checarCulturas(){
    if(this.tempMedia >= 15 && this.tempMedia <= 25){
      this.frutas = [];
      this.frutas.push("Banana", "Abacate", "Limão", "Pêssego", "Morango", "Kiwi", "Abacaxi", "Maracujá", "Melancia");
      this.mensagem = "Estas frutas precisam de uma temperatura estável e equilibrada"
    }
    else if(this.tempMedia >= 30 && this.tempMedia <= 35){
      this.frutas = [];
      this.frutas.push("Coco", "Mamão", "Carambola", "Lichia", "Melancia", "Pitaya", "Goiaba", "Caju", "Jambo");
      this.mensagem = "Estas frutas precisam de uma temperatura alta e úmida."
    }
    else{
      this.frutas = [];
      this.frutas.push("Maça", "Pera", "Ameixa", "Cereja", "Blueberry", "Amora", "Goiaba", "Caju", "Jambo");
      this.mensagem = "Estas frutas precisam de uma temperatura baixa e seca"
    }

    this.router.navigateByUrl(`/tela-culturas/${this.frutas}/${this.mensagem}`)
  }

  pinFormatter(value: number) {
    return `${value}°C`;
  }
}
