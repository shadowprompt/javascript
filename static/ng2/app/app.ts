import {Component} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';

interface Todo {
  completed: boolean;
  label: string;
}

@Component({
  selector: 'app',
  templateUrl: 'index.html',
  styles: [
    `ul li {
      list-style: none;
    }
    .completed {
      text-decoration: line-through;
    }`
  ]
})
export class AppComponent {
  todos: Todo[] = [{
    label: 'Buy milk',
    completed: false
  }, {
    label: "Save the world",
    completed: false
  }];
  name: string = 'John';
  addTodo(label) {
    console.log(label);
    this.todos.push({
      label,
      completed: false
    })
  }
  removeTodo(idx) {
    this.todos.splice(idx, 1);
  }
  toggleCompletion(idx) {
    console.log(this.todos);
    let todo = this.todos[idx];
    todo.completed = !todo.completed;
  }
}

// bootstrap(TodoCtrl);
