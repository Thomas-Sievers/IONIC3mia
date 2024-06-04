import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-confirmar',
  templateUrl: './tela-confirmar.page.html',
  styleUrls: ['./tela-confirmar.page.scss'],
})
export class TelaConfirmarPage implements OnInit {

  tempoDiaria: any;
  precoDiaria: any;
  valorTotal: any;

  constructor(private activatedRoute: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    this.tempoDiaria = this.activatedRoute.snapshot.paramMap.get('tempoDiaria');
    this.precoDiaria = this.activatedRoute.snapshot.paramMap.get('precoDiaria');
    this.valorTotal = this.activatedRoute.snapshot.paramMap.get('valorTotal');
  }

  telaFinal(){
      this.router.navigateByUrl(`/tela-valor-final/${this.valorTotal}`)
  }

  voltarTela(){
    this.router.navigateByUrl(`/home`)
  }
}
