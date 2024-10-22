import { Component, OnInit } from '@angular/core';
import { AnimalService } from 'src/app/services/animal.service';
import { Animal } from 'src/app/models/animais';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-change-animal',
  templateUrl: './change-animal.page.html',
  styleUrls: ['./change-animal.page.scss'],
})

export class ChangeAnimalPage implements OnInit {

  animal: Animal = new Animal();

  constructor(private aniService: AnimalService, private route: Router, private ActivedRoute: ActivatedRoute) 
  //Pega o id que veio pela rota e salva dentro da propriedade id do produto
  { this.animal.id = this.ActivedRoute.snapshot.params['id']}

  ngOnInit() {
    //Busca os dados do produto com ID que veio pela rota
    this.aniService.searchById(this.animal.id).subscribe((data:any) => {
      this.animal.nome = data['nome'];
      this.animal.especie = data['especie'];
      this.animal.raca = data['raca'];
      this.animal.idade = data['idade'];
      this.animal.adicionais = data['adicionais'];
    });
  }

  save(){
    this.aniService.changeAnimal(this.animal);
    this.route.navigateByUrl('/');
  };
}
