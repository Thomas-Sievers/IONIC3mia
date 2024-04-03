import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  quilometragem = "";
  preco = "";
  radioSelecionada = "";
  total = 0;
  constructor(private toastController: ToastController) {}

  calcularGasto(){
    if(this.radioSelecionada == "etanol"){
      this.total = (parseFloat(this.quilometragem)/9)*parseFloat(this.preco)
    }
    else if(this.radioSelecionada == "gasolina"){
      this.total = (parseFloat(this.quilometragem)/12)*parseFloat(this.preco)
    }
    else{
      this.total = (parseFloat(this.quilometragem)/15)*parseFloat(this.preco)
    }
    this.exibirToast('bottom')
  }

  async exibirToast(position:'bottom') {
    const toast = await this.toastController.create({
      message: `O gasto de combustível é: ${this.total.toFixed(2)}`,
      duration: 1500,
      position: position,
    });

    await toast.present();
  }
}
