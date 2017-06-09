import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Animal } from './animal.model';

@Component({
	selector: 'animal-list',
	template: `
	<ul>
		<li *ngFor="let currentAnimal of childAnimalList">{{currentAnimal.species}} {{currentAnimal.name}}</li>
	</ul>
	`
})

export class AnimalListComponent {
	@Input() childAnimalList: Animal[];
	@Output() clickSender = new EventEmitter();

}
