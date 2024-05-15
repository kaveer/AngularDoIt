import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'DoIt';
  toDoValue: string = ``;
  toDoList: string[] = [];

  addToDo() {
    if (this.toDoValue) {
      this.toDoList.push(this.toDoValue)
      console.log("Array of strings:", this.toDoList);
    }
  }
}
