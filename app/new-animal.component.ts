import { Component, Output, EventEmitter } from '@angular/core';
import  { Animal } from './animal.model';

 @Component({
 	selector: 'new-animal',
 	template:`
  <br>
  <br>
  <hr>
  <br>
  <br>
 	<h2>New Arrival Animal</h2>

  <div class="new-arrival">
   	<div>
   		<label>Species:</label>
   		<input class="form-control" #newSpecies >
   	</div>
   	<div>
   		<label>Name:</label>
   		<input class="form-control" #newName>
   	</div>
   	<div>
   		<label>Age:</label>
   		<input type="number" class="form-control" #newAge>
   	</div>
   	<div>
   		<label>Diet:</label>
   		<input class="form-control"#newDiet>
   	</div>
   	<div>
   		<label>Location:</label>
   		<input class="form-control" #newLocation>
   	</div>
   	<div>
   		<label>Caretakers:</label>
   		<input type="number" class="form-control"#newCaretakers>
   	</div>
   	<div>
   		<label>Sex:</label>
   		<input class="form-control" #newSex>
   	</div>
   	<div>
   		<label>Likes:</label>
   		<input class="form-control" #newLikes>
   	</div>
   	<div>
   		<label>Dislikes:</label>
   		<input class="form-control" #newDislikes>
   	</div>

   	<button class="btn btn-success" (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value); newSpecies.value=''; newName.value=''; newAge.value=''; newDiet.value=''; newLocation.value='';newCaretakers.value='';newSex.value='';newLikes.value='';newDislikes.value='';">Add</button>
  </div>
 	`
 })

 export class NewAnimalComponent {
 	@Output() newAnimalSender = new EventEmitter();

 	submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string){
 		var newAnimalToAdd: Animal = new Animal (species, name, age, diet, location, caretakers, sex, likes, dislikes);
 		this.newAnimalSender.emit(newAnimalToAdd);
 	}
 }
