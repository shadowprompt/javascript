import {Component, Compiler, Input, Output, EventEmitter, OnChanges, OnInit, DoCheck, OnDestroy } from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';

interface Todo {
  completed: boolean;
  label: string;
}

@Component({
  selector: 'app',
  directives: [Panel],
  inputs: ['title'],
  templateUrl: 'test.template.html?' + new Date().getTime(),
  styles: [
    `ul li {
      list-style: none;
    }
    .completed {
      text-decoration: line-through;
    }`
  ]
})
export class AppComponent implements OnChanges, OnInit, DoCheck, OnDestroy{
  
  todos: Todo[] = [{
    label: 'Buy milk',
    completed: false
  }, {
    label: "Save the world",
    completed: false
  }];

  // @Input()
  name: string = 'D.T in the House';
  states : any;
  pTitle = "pTitle";
  par: string = "parText";
  divT: string = "divT";

  constructor(private _compiler: Compiler) {
    console.log(this);
    this._compiler.clearCache();
    enum STATES {
      CONNECTING = 1,
      CONNECTED,
      DISCONNECTED
    };
    this.states = STATES;
    
    var arr: number[] = [1, 4, 9];
    var re: number[] = arr.map(Math.sqrt);
    console.log(re);
  }
  
  addTodo(label) {
    this.todos.push({
      label,
      completed: false
    });
  }
  removeTodo(idx) {
    this.todos.splice(idx, 1);
  }
  toggleCompletion(idx) {
    let todo = this.todos[idx];
    todo.completed = !todo.completed;
  }
  change() {
    this.pTitle = new Date().getTime().toString();
    console.log(this.pTitle);
  }
  cc(){
    console.log('sucess');
  }

  ngOnChanges(changes) {
    console.log('ngOnChanges in App');
  }

  ngOnInit() {
     console.log('ngOnInit in App');
   }

   ngDoCheck() {
     console.log('ngDoCheck in App');
   }

   ngOnDestroy() {
     console.log('ngOnDestroy in App');
   }
}

@Component({
  selector: 'panel',
  template: `
  <input type="" [value]="inText">
  <input type="text" [value]="theTitle" #cInput [title]="ppText">{{theText}}<button (click)="cc()">cc</button>ppText = {{ppText}}<button (click)="pp()">cc</button>
  `
})
// export class Panel implements OnChanges, OnInit, DoCheck, OnDestroy{  //写不写从接口继承，效果是一样的。
export class Panel {
  // pTitle:string= "hehe";
  theText: string = "text";

  constructor(){
    console.log(new Date());
  }

  @Input() theTitle: string;
  @Input() ppText: string = "ppText";
  @Input() inText: string;
  @Output() cp = new EventEmitter(); //此处的cp应与母标签里面的"(cp)"名字保持一致

  cc(){
  	this.cp.emit(new Date().toString());
  }
  pp(){
    this.ppText = new Date().getTime().toString();
  }
  
  ngOnChanges(changes) {
    console.log('ngOnChanges in Panel');
    Object.keys(changes).forEach(prop => {
      console.log(prop, 'changed. Before value', changes[prop].previousValue);
    });
  }

  ngOnInit() {
     console.log('ngOnInit in Panel');

   }

   ngDoCheck() {
     console.log('ngDoCheck in Panel');
   }

   ngOnDestroy() {
     console.log('ngOnDestroy in Panel');
   }

  
}[]