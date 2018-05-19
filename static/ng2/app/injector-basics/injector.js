"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// import 'reflect-metadata';
var core_1 = require("@angular/core");
var BUFFER_SIZE = new core_1.OpaqueToken('buffer-size');
var Buffer = (function () {
    function Buffer(size) {
        this.size = size;
        console.log(this.size);
    }
    return Buffer;
}());
Buffer = __decorate([
    __param(0, core_1.Inject(BUFFER_SIZE)),
    __metadata("design:paramtypes", [Number])
], Buffer);
// @Injectable()  //表示 Socket服务有了一个注入的依赖
var Socket = (function () {
    function Socket(buffer) {
        this.buffer = buffer;
        console.log("this is Socket.");
        console.log(this);
    }
    return Socket;
}());
Socket = __decorate([
    __param(0, core_1.Inject(Buffer)),
    __metadata("design:paramtypes", [Object])
], Socket);
var BB = (function () {
    function BB() {
        this.cc = "ct";
        console.log("this is BB.");
        console.log(this);
    }
    return BB;
}());
var CC = (function () {
    function CC() {
        this.cc = "cBc";
        console.log("this is CC.");
    }
    return CC;
}());
var injector = core_1.ReflectiveInjector.resolveAndCreate([
    { provide: BUFFER_SIZE, useValue: 4 },
    CC,
    { provide: BB, useExisting: CC },
    Buffer,
    Socket
]);
console.log(injector.get(Socket));
console.log(injector.get(BB));
var App = (function () {
    function App() {
    }
    return App;
}());
App = __decorate([
    core_1.Component({
        selector: 'app',
        template: "Index"
    })
], App);
exports.App = App;
//# sourceMappingURL=injector.js.map