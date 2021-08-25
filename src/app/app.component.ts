import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'todo';

  allItems = [
    { description: 'TestTask'}
  ];

  addTodo(description: string) {
    this.allItems.unshift({
      description
    });
  }

  removeTodo(i:any){
    this.items.splice(i,1)
  }

  get items() {
      return this.allItems;
  }



}
