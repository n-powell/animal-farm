import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Animal } from './animal.model';

@Component({
	selector: 'animal-list',
	template: `
			<select (change)="onChange($event.target.value)">
				<option value="allAnimals">All Animals</option>
				<option value="young">Young Animals under 2</option>
				<option value="older">Older Animals over 2</option>
			</select>

	<div class="row">
		<div class = col-md-4 *ngFor="let currentAnimal of childAnimalList | age:filterbyAge">
			<div>
				<p>Species: {{currentAnimal.species}}</p>
				<p>Name: {{currentAnimal.name}}</p>
				<p>Age: {{currentAnimal.age}}</p>
				<p>Location: {{currentAnimal.location}}</p>
				<p>Caretakers: {{currentAnimal.caretakers}}</p>
				<button class="btn btn-success" (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button>
			</div>
		</div>
	</div>
`
})

export class AnimalListComponent {
	@Input() childAnimalList: Animal[];
	@Output() clickSender = new EventEmitter();

	filterbyAge: string = "allAnimals";

	onChange(optionFromMenu) {
		this.filterbyAge = optionFromMenu;
	}

	editButtonHasBeenClicked(animalToEdit: Animal) {
		this.clickSender.emit(animalToEdit);
	}

}
