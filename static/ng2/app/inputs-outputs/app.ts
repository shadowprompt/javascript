import {Component, Input, Output, EventEmitter} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';

interface Todo {
  completed: boolean;
  label: string;
}

@Component({
  selector: 'input-box',
  template: `
    <input #todoInput [placeholder]="inputPlaceholder">
    <button (click)="emitText(todoInput.value); todoInput.value = '';">
      {{buttonLabel}}
    </button>
  `
})
export class InputBox {
  @Input() 
    inputPlaceholder: string;
  @Input() 
    buttonLabel: string;
  @Output() 
    inputText = new EventEmitter<string>();
  emitText(text: string) {
    this.inputText.emit(text);
  }
}

@Component({
  selector: 'todo-list',
  template: `
    <ul>
      <li *ngFor="let todo of todoss; let index = index" [class.completed]="todo.completed">
        <input type="checkbox" [checked]="todo.completed"
          (change)="toggleCompletion(index)">
        {{todo.label}}
      </li>
    </ul>
  `,
  styles: [
    `ul li {
      list-style: none;
    }
    .completed {
      text-decoration: line-through;
    }`
  ]
})
export class TodoList {
  @Input() 
    todoss: Todo[];
  @Output() 
    toggled = new EventEmitter<Todo>();
  toggleCompletion(index: number) {
    let todo = this.todoss[index];
    this.toggled.emit(todo);
  };
}

@Component({
  selector: 'todo-app',
  // directives: [InputBox, TodoList], //directives已经没有用了
  template: `
    <h1>Hello {{name}}!</h1>

    <p>
      Add a new todo:
      <input-box inputPlaceholder="New todo..."
        buttonLabel="Add"
        (click)="handleClick($event)"
        (inputText)="addTodo($event)">
      </input-box>
    </p>

    <p>Here's the list of pending todo items:</p>
    <todo-list [todoss]="todos"
      (toggled)="toggleCompletion($event)">
    </todo-list>
  `
})
export class App {
  todos: Todo[] = [{
    label: 'Buy milk',
    completed: false
  }, {
    label: "Save the world",
    completed: false
  }];
  name: string = 'Key';
  addTodo(label: string) {
    this.todos.push({
      label,
      completed: false
    });
  }
  toggleCompletion(todo: Todo) {
    todo.completed = !todo.completed;
  }
}

// bootstrap(TodoApp);