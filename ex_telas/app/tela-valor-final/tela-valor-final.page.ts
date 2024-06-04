import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tela-valor-final',
  templateUrl: './tela-valor-final.page.html',
  styleUrls: ['./tela-valor-final.page.scss'],
})
export class TelaValorFinalPage implements OnInit {

  valorTotal: any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.valorTotal = this.activatedRoute.snapshot.paramMap.get('valorTotal');
  }

}
