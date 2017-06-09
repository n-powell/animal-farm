import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template:`
    <div>
      <div *ngIf="childSelectedAnimal">
        <h2>Edit Animal Information</h2>
        <div class="form-group">
          <label>Species:</label>
          <input class="form-control" [(ngModel)]="childSelectedAnimal.species">
        </div>
        <div class="form-group">
          <label>Name:</label>
          <input class="form-control" [(ngModel)]="childSelectedAnimal.name">
        </div>
        <div class="form-group">
          <label>Age:</label>
          <input type="number" class="form-control" [(ngModel)]="childSelectedAnimal.age">
      </div>
        <div class="form-group">
          <label>Diet:</label>
          <input class="form-control" [(ngModel)]="childSelectedAnimal.diet">
        </div>
        <div class="form-group">
          <label>Location:</label>
          <input class="form-control" [(ngModel)]="childSelectedAnimal.location">
        </div>
        <div class="form-group">
          <label>Caretakers:</label>
          <input type="number" class="form-control" [(ngModel)]="childSelectedAnimal.caretakers">
        </div>
        <div class="form-group">
          <label>Sex:</label>
          <input class="form-control" [(ngModel)]="childSelectedAnimal.sex">
        </div>
        <div class="form-group">
          <label>Likes:</label>
          <input class="form-control" [(ngModel)]="childSelectedAnimal.likes">
        </div>
        <div class="form-group">
          <label>Dislikes:</label>
          <input class="form-control" [(ngModel)]="childSelectedAnimal.dislikes">
        </div>
        <button (click)="doneButtonClicked()">Done</button>
      </div>
  </div>
  <br>
  <br>
  <br>
  <br>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
