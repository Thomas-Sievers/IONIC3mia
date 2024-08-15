import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tela-confirmar',
  templateUrl: './tela-confirmar.page.html',
  styleUrls: ['./tela-confirmar.page.scss'],
})
export class TelaConfirmarPage implements OnInit {

  prestacao: any;

  constructor(private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.prestacao = this.activatedRoute.snapshot.paramMap.get('prestacao');
  }

}
