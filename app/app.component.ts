import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
	selector: 'app-root',
	template:`
	<div class="container">
		<h1>The Zoo</h1>
    <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
    <animal-list [childAnimalList]="masterAnimalList"></animal-list>
	</div>
	`
})

export class AppComponent {

	masterAnimalList: Animal[] = [];

	addAnimal(newAnimalFromChild: Animal) {
		this.masterAnimalList.push(newAnimalFromChild)
	}
}
