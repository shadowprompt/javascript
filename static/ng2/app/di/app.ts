// import 'reflect-metadata';
import {  Component, ElementRef, ReflectiveInjector, Injector, Inject, Injectable, OpaqueToken, forwardRef, Self, SkipSelf, Optional } from '@angular/core';


const BUFFER_SIZE = new OpaqueToken('buffer-size');

@Component({
  selector: 'app',
  template: `<panel>
  	<panel-title>##small title</panel-title>
		<panel-content>**Content</panel-content>
	</panel>
	`,
	directives: [ Panel],
})
export class App {
	constructor(){
		console.log(new Date());
	}
}

class PP{
	pc(){
		return "new title !";
	}
}

@Component({
	selector: 'panel',
	styles: [
	  `.panel {
	    width: auto;
	    display: inline-block;
	    border: 1px solid black;
	  }
	  .panel-title {
	    border-bottom: 1px solid black;
	    background-color: #eee;
	  }
	  .panel-content,
	  .panel-title {
	    padding: 5px;
	  }`
	],
	template: `
		<div class="panel">
			<div class="panel-title"><ng-content select="panel-title"></ng-content></div>
			<div class="panel-content"><ng-content select="panel-content"></ng-content></div>
		</div>
	`,
	viewProviders: [PP]
})

export class Panel{
	constructor(private el: ElementRef, private pp: PP){	}
	ngAfterContentInit() {
		let el = this.el.nativeElement;
		let title = el.querySelector('panel-title');
		title.innerHTML = this.pp.pc();
	}
}


//---------------



class Buffer {
  constructor(@Inject(BUFFER_SIZE) private size: Number) {
    console.log(this.size);
  }
}

// @Injectable()  //表示 Socket服务有了一个注入的依赖
class Socket {
  constructor(@Inject(Buffer) private buffer) {
  	console.log("this is Socket.");
  	console.log(this);
  }
}

class BB {
	cc:string = "ct";
	constructor(){
		console.log("this is BB.");
		console.log(this);
	}
	
}


@Injectable()
class CC {
	cc:string = "ccc";
	constructor(@Inject(forwardRef(() => CB)) private cb: CB){
		console.log("this is CC.");
		console.log(this);
	}
}

console.log(CB);

class CB{
	constructor(){
		console.log("this is CB.");
		console.log(this);
	}
}

console.log(CB);

let injector = ReflectiveInjector.resolveAndCreate([
	{ provide: BUFFER_SIZE, useValue: 4},
	CB,
  { provide: BB, useExisting : CB },
  Buffer,
  Socket
]);

console.log(injector.get(Socket));
console.log(injector.get(BB));

class Http {}

class DummyService {}

@Injectable()
class UserService {
  constructor(public http: Http) {}
}

let dummyHttp = {
  get() {},
  post() {}
};

console.log('hehe');

let injector2 = ReflectiveInjector.resolveAndCreate([
  { provide: DummyService, useValue: dummyHttp },
  { provide: Http, useExisting: DummyService },
  UserService
]);

//  === dummyHttp，原因是；UserService.http(Http) -> DummyService -> dummyHttp
console.log(injector2.get(UserService).http);

//----------------------------

const VALIDATOR = new OpaqueToken('validator');


interface EmployeeValidator {
	(person: Employee);
};


class Employee {
  name: string="c";
  constructor(@Inject(VALIDATOR) private validators: EmployeeValidator[]) {}
  validate() {
    return this.validators
      .map(v => v(this))
      .filter(value => !!value);
  }
}

let injector3 = ReflectiveInjector.resolveAndCreate([
  { provide: VALIDATOR, multi: true, useValue: (person: Employee) => {
  	console.log('person.name = ' + person.name);
    if (!person.name) {
      return 'The name is required';
    }
  }},
  { provide: VALIDATOR, multi: true, useValue: (person: Employee) => {
    if (!person.name || person.name.length < 3) {
      return 'The name should be more than 3 symbol long';
    }
  }},
  Employee
]);

console.log(injector3.get(Employee).validate());

//----------------------------
class TLSConnection{
	public socket: Socket
}

let injector4 = ReflectiveInjector.resolveAndCreate([
	{ 
		provide: TLSConnection,
		useFactory: (socket: Socket, buffer: Buffer) =>  {
		  let connection = new TLSConnection();
		  connection.socket = socket;
		  return connection;
		},
		deps: [Socket, Buffer]
	},
	{ provide: BUFFER_SIZE, useValue: 4 },
	Socket,
	Buffer
])

console.log(injector4.get(TLSConnection));

//---------------
abstract class Channel {}

class Http2 extends Channel {}

class WebSocket extends Channel {}

@Injectable()
class UserService2 {
  constructor(@Self() public channel: Channel) {}  //@Self 从当前的注射器（也就是childInjector）里面获得所依赖的Channel类，所以用的是WebSocket而不是Http2。这是默认行为，删除@Self效果不变
}

let parentInjector = ReflectiveInjector.resolveAndCreate([
  { provide: Channel, useClass: Http2 }
]);
let childInjector = parentInjector.resolveAndCreateChild([
  { provide: Channel, useClass: WebSocket },  
  UserService2 //上面不加@Self，下面的channel是Http2；如果不注释上一行，下面的channel是WebSocket
]);

console.log(childInjector.get(UserService2).channel);

//--------------------
class Context {
  constructor(@SkipSelf() public parentContext: Context) {} //加上@SkipSelf，使用父层注射器里面所注册的provider，而不要使用当前注射器所注册的provider
}

let parentInjector2 = ReflectiveInjector.resolveAndCreate([
  { provide: Context, useValue: new Context(null) }
]);
let childInjector2 = parentInjector2.resolveAndCreateChild([
  Context
]);

console.log(childInjector2.get(Context).parentContext);

//---------------------------
abstract class SortingAlgorithm {
  abstract sort(collection: BaseCollection): Collection;
}

class BaseCollection {
  getDefaultSort(): SortingAlgorithm {
    // get some generic sorting algorithm...
    return null;
  }
}

@Injectable()
class Collection extends BaseCollection {
  private sort: SortingAlgorithm;
  constructor(@Optional() sort: SortingAlgorithm) { //加上@Optional()声明了对sort对象的依赖是可选的，意味着如果angular没有找到此符号所对应的provider，就会给该符号传递一个null值
    super();
    this.sort = sort || this.getDefaultSort();
  }
}

let injector5 = ReflectiveInjector.resolveAndCreate([
	// { provide: SortingAlgorithm, useValue: null},  //配置SortingAlgorithm的provider，不配置的话上面                                                就需要@Optional()
  Collection
]);

console.log(injector5.get(Collection).sort);