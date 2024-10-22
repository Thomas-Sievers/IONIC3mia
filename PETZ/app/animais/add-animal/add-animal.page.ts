import { Component, OnInit } from '@angular/core';

//Importação do Serviço do produto
import { AnimalService } from 'src/app/services/animal.service';
// Importação da classe Animal
import { Animal } from 'src/app/models/animais';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.page.html',
  styleUrls: ['./add-animal.page.scss'],
})
export class AddAnimalPage implements OnInit {

  animal: Animal = new Animal();

  constructor(private aniService: AnimalService, private route: Router) { }

  ngOnInit() {
  }

  save(){
    // Utiliza o serviço de animais para salvar um registro
    this.aniService.saveAnimal(this.animal);
    this.route.navigateByUrl('/')
  }

}
