"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var App = (function () {
    function App() {
        console.log(new Date());
    }
    return App;
}());
App = __decorate([
    core_1.Component({
        selector: 'app',
        template: "<panel>\n  \t<panel-title>##small title</panel-title>\n\t\t<panel-content>**Content</panel-content>\n\t</panel>\n\t",
        directives: [Panel],
    }),
    __metadata("design:paramtypes", [])
], App);
exports.App = App;
var PP = (function () {
    function PP() {
    }
    PP.prototype.pc = function () {
        return "new title !";
    };
    return PP;
}());
var Panel = (function () {
    function Panel(el, pp) {
        this.el = el;
        this.pp = pp;
    }
    Panel.prototype.ngAfterContentInit = function () {
        var el = this.el.nativeElement;
        var title = el.querySelector('panel-title');
        title.innerHTML = this.pp.pc();
    };
    return Panel;
}());
Panel = __decorate([
    core_1.Component({
        selector: 'panel',
        styles: [
            ".panel {\n\t    width: auto;\n\t    display: inline-block;\n\t    border: 1px solid black;\n\t  }\n\t  .panel-title {\n\t    border-bottom: 1px solid black;\n\t    background-color: #eee;\n\t  }\n\t  .panel-content,\n\t  .panel-title {\n\t    padding: 5px;\n\t  }"
        ],
        template: "\n\t\t<div class=\"panel\">\n\t\t\t<div class=\"panel-title\"><ng-content select=\"panel-title\"></ng-content></div>\n\t\t\t<div class=\"panel-content\"><ng-content select=\"panel-content\"></ng-content></div>\n\t\t</div>\n\t",
        viewProviders: [PP]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object, PP])
], Panel);
exports.Panel = Panel;
//---------------
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
    function CC(cb) {
        this.cb = cb;
        this.cc = "ccc";
        console.log("this is CC.");
        console.log(this);
    }
    return CC;
}());
CC = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Inject(core_1.forwardRef(function () { return CB; }))),
    __metadata("design:paramtypes", [CB])
], CC);
console.log(CB);
var CB = (function () {
    function CB() {
        console.log("this is CB.");
        console.log(this);
    }
    return CB;
}());
console.log(CB);
var injector = core_1.ReflectiveInjector.resolveAndCreate([
    { provide: BUFFER_SIZE, useValue: 4 },
    CB,
    { provide: BB, useExisting: CB },
    Buffer,
    Socket
]);
console.log(injector.get(Socket));
console.log(injector.get(BB));
var Http = (function () {
    function Http() {
    }
    return Http;
}());
var DummyService = (function () {
    function DummyService() {
    }
    return DummyService;
}());
var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [Http])
], UserService);
var dummyHttp = {
    get: function () { },
    post: function () { }
};
console.log('hehe');
var injector2 = core_1.ReflectiveInjector.resolveAndCreate([
    { provide: DummyService, useValue: dummyHttp },
    { provide: Http, useExisting: DummyService },
    UserService
]);
//  === dummyHttp，原因是；UserService.http(Http) -> DummyService -> dummyHttp
console.log(injector2.get(UserService).http);
//----------------------------
var VALIDATOR = new core_1.OpaqueToken('validator');
;
var Employee = (function () {
    function Employee(validators) {
        this.validators = validators;
        this.name = "c";
    }
    Employee.prototype.validate = function () {
        var _this = this;
        return this.validators
            .map(function (v) { return v(_this); })
            .filter(function (value) { return !!value; });
    };
    return Employee;
}());
Employee = __decorate([
    __param(0, core_1.Inject(VALIDATOR)),
    __metadata("design:paramtypes", [Array])
], Employee);
var injector3 = core_1.ReflectiveInjector.resolveAndCreate([
    { provide: VALIDATOR, multi: true, useValue: function (person) {
            console.log('person.name = ' + person.name);
            if (!person.name) {
                return 'The name is required';
            }
        } },
    { provide: VALIDATOR, multi: true, useValue: function (person) {
            if (!person.name || person.name.length < 3) {
                return 'The name should be more than 3 symbol long';
            }
        } },
    Employee
]);
console.log(injector3.get(Employee).validate());
//----------------------------
var TLSConnection = (function () {
    function TLSConnection() {
    }
    return TLSConnection;
}());
var injector4 = core_1.ReflectiveInjector.resolveAndCreate([
    {
        provide: TLSConnection,
        useFactory: function (socket, buffer) {
            var connection = new TLSConnection();
            connection.socket = socket;
            return connection;
        },
        deps: [Socket, Buffer]
    },
    { provide: BUFFER_SIZE, useValue: 4 },
    Socket,
    Buffer
]);
console.log(injector4.get(TLSConnection));
//---------------
var Channel = (function () {
    function Channel() {
    }
    return Channel;
}());
var Http2 = (function (_super) {
    __extends(Http2, _super);
    function Http2() {
        return _super.apply(this, arguments) || this;
    }
    return Http2;
}(Channel));
var WebSocket = (function (_super) {
    __extends(WebSocket, _super);
    function WebSocket() {
        return _super.apply(this, arguments) || this;
    }
    return WebSocket;
}(Channel));
var UserService2 = (function () {
    function UserService2(channel) {
        this.channel = channel;
    } //@Self 从当前的注射器（也就是childInjector）里面获得所依赖的Channel类，所以用的是WebSocket而不是Http2。这是默认行为，删除@Self效果不变
    return UserService2;
}());
UserService2 = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Self()),
    __metadata("design:paramtypes", [Channel])
], UserService2);
var parentInjector = core_1.ReflectiveInjector.resolveAndCreate([
    { provide: Channel, useClass: Http2 }
]);
var childInjector = parentInjector.resolveAndCreateChild([
    { provide: Channel, useClass: WebSocket },
    UserService2 //上面不加@Self，下面的channel是Http2；如果不注释上一行，下面的channel是WebSocket
]);
console.log(childInjector.get(UserService2).channel);
//--------------------
var Context = (function () {
    function Context(parentContext) {
        this.parentContext = parentContext;
    } //加上@SkipSelf，使用父层注射器里面所注册的provider，而不要使用当前注射器所注册的provider
    return Context;
}());
Context = __decorate([
    __param(0, core_1.SkipSelf()),
    __metadata("design:paramtypes", [Context])
], Context);
var parentInjector2 = core_1.ReflectiveInjector.resolveAndCreate([
    { provide: Context, useValue: new Context(null) }
]);
var childInjector2 = parentInjector2.resolveAndCreateChild([
    Context
]);
console.log(childInjector2.get(Context).parentContext);
//---------------------------
var SortingAlgorithm = (function () {
    function SortingAlgorithm() {
    }
    return SortingAlgorithm;
}());
var BaseCollection = (function () {
    function BaseCollection() {
    }
    BaseCollection.prototype.getDefaultSort = function () {
        // get some generic sorting algorithm...
        return null;
    };
    return BaseCollection;
}());
var Collection = (function (_super) {
    __extends(Collection, _super);
    function Collection(sort) {
        var _this = _super.call(this) || this;
        _this.sort = sort || _this.getDefaultSort();
        return _this;
    }
    return Collection;
}(BaseCollection));
Collection = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Optional()),
    __metadata("design:paramtypes", [SortingAlgorithm])
], Collection);
var injector5 = core_1.ReflectiveInjector.resolveAndCreate([
    // { provide: SortingAlgorithm, useValue: null},  //配置SortingAlgorithm的provider，不配置的话上面                                                就需要@Optional()
    Collection
]);
console.log(injector5.get(Collection).sort);
var _a;
//# sourceMappingURL=app.js.map