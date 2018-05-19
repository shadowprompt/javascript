// import 'reflect-metadata';
import {
  ReflectiveInjector, Inject, Injectable,  OpaqueToken, Component
} from '@angular/core';

const BUFFER_SIZE = new OpaqueToken('buffer-size');

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

class CC {
	cc:string = "cBc";
	constructor(){
		console.log("this is CC.");
	}
}

let injector = ReflectiveInjector.resolveAndCreate([
	{ provide: BUFFER_SIZE, useValue: 4},
	CC,
  { provide: BB, useExisting : CC},
  Buffer,
  Socket
]);

console.log(injector.get(Socket));
console.log(injector.get(BB));


@Component({
  selector: 'app',
  template: "Index"
})
export class App {}