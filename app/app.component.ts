import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
	selector: 'app-root',
	template:`
	<div class="container">
		<h1>The Zoo</h1>
		<edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
		<animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
    <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
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
