import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  preco = "";
  radioSelecionada = "";
  precoTotal= 0;
  porcentagem = 0;

  constructor(private toastController: ToastController) {}

  calcularDesconto(){
    if(this.radioSelecionada == "pix"){
      this.porcentagem = (parseFloat(this.preco) / 100) * 10;
      this.precoTotal = parseFloat(this.preco) - this.porcentagem
    }
    else if(this.radioSelecionada == "credito"){
      this.porcentagem = (parseFloat(this.preco) / 100) * 10;
      this.precoTotal = parseFloat(this.preco) + this.porcentagem
    }
    else{
      this.precoTotal = parseFloat(this.preco);
    }
    this.exibirToast('middle');
  }

  async exibirToast(position:'middle') {
    const toast = await this.toastController.create({
      message: `O preço final da sua compra é: ${this.precoTotal}`,
      duration: 1500,
      position: position,
    });

    await toast.present();
  }
}




