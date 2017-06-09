import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
	selector: 'app-root',
	template:`
	<div class="container">
		<h1>The Zoo</h1>
    <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>

    <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>

    <animal-list [childAnimalList]="masterAnimalList"></animal-list>
	</div>
	`
})

export class AppComponent {

	masterAnimalList: Animal[] = [];
  selectedAnimal = null;

	addAnimal(newAnimalFromChild: Animal) {
		this.masterAnimalList.push(newAnimalFromChild)
	}

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }
}
