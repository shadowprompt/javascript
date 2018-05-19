// hasOwnProperty
// Object.getOwnPropertyDescriptor
(function(){
    function Person(){
    }
    Person.prototype.name = "Nicholas";
    Person.prototype.age = 29;
    Person.prototype.job = "Software Engineer";
    Person.prototype.sayName = function(){
        console.log(this.name);
    }
    var person1 = new Person();
    var person2 = new Person();
    console.log(person1.hasOwnProperty("name")); //false
    console.log(Object.getOwnPropertyDescriptor(person1, 'name')); //undefined
    console.log(Object.getOwnPropertyDescriptor(Person.prototype, 'name')); //Object {value: "Nicholas", writable: true, enumerable: true, configurable: true}
    console.log("name" in person1); //true
    person1.name = "Greg";
    console.log(person1.name); //"Greg"—— 来自实例
    console.log(person1.hasOwnProperty("name")); //true
    console.log("name" in person1); //true
    console.log(person2.name); //"Nicholas"—— 来自原型
    console.log(person2.hasOwnProperty("name")); //false
    delete person1.name;
    console.log(person1.name); //"Nicholas"—— 来自原型
    console.log(person1.hasOwnProperty("name")); //false
})();

// 判断该属性是对象实例的还是原型的
(function(){
    function hasPrototypeProperty(object, name) {
        return !object.hasOwnProperty(name) && (name in object);
    }

    function Person() {}
    Person.prototype.name = "Nicholas";
    Person.prototype.age = 29;
    Person.prototype.job = "Software Engineer";
    Person.prototype.sayName = function() {
        console.log(this.name);
    };
    var person = new Person();
    console.log(hasPrototypeProperty(person, "name")); //true
    person.name = "Greg";
    console.log(hasPrototypeProperty(person, "name")); //false
})();

// Object.keys方法接收一个对象作为参数，返回一个包含所有可枚举属性的字符串数组。
// Object.getOwnPropertyNames 如果你想要得到所有实例属性，无论它是否可枚举
// for-in 返回所有能够通过对象访问的，可枚举的属性，包括对象实例的和原型的。屏蔽了原型中不可枚举的属性的实例属性也会在for-in返回
(function(){
    function Person() {}
    Person.prototype.name = "Nicholas";
    Person.prototype.age = 29;
    Person.prototype.job = "Software Engineer";
    Person.prototype.sayName = function() {
        console.log(this.name);
    };
    var keys = Object.keys(Person.prototype);
    console.log(keys); // ["name", "age", "job", "sayName"]
    var keys2 = Object.getOwnPropertyNames(Person.prototype);
    console.log(keys2); // ["constructor", "name", "age", "job", "sayName"]
    var propsArr = [];
    for(key in Person.prototype){
        propsArr.push( Person.prototype[key])
    }
    console.log(propsArr);

    var p1 = new Person();
    p1.name = "Rob";
    p1.age = 31;
    var p1keys = Object.keys(p1);
    console.log(p1keys); // ["name", "age"]
    var p1keys2 = Object.getOwnPropertyNames(p1);
    console.log(p1keys2); // ["name", "age"]
})();

//constructor属性被改变，必须手动更正
(function(){
    function Person() {}
    Person.prototype = {
        //constructor : Person,
        // 以这种方式重设 constructor 属性会导致它的[[Enumerable]]特性被设置为 true。默认情况下，原生的 constructor 属性是不可枚举的，因此如果你使用兼容 ECMAScript 5 的 JavaScript 引擎，可以试一试 Object.defineProperty()。
        name: "Nicholas",
        age: 29,
        job: "Software Engineer",
        sayName: function() {
            alert(this.name);
        }
    };

    var friend = new Person();
    console.log(friend instanceof Object); //true
    console.log(friend instanceof Person); //true
    console.log(friend.constructor == Person); //false
    console.log(friend.constructor == Object); //true

    //重设构造函数，只适用于 ECMAScript 5 兼容的浏览器
    Object.defineProperty(Person.prototype, "constructor", {
        enumerable: false,
        value: Person
    });
    console.log(friend instanceof Object); //true
    console.log(friend instanceof Person); //true
    console.log(friend.constructor == Person); //true
    console.log(friend.constructor == Object); //false
})();

(function(){
    function Person() {}
    var friend = new Person();
    Person.prototype = {
        constructor: Person,
        name: "Nicholas",
        age: 29,
        job: "Software Engineer",
        sayName: function() {
            console.log(this.name);
        }
    };
    var friend2 = new Person();
    // friend.sayName(); //error
    friend2.sayName();
})();

// 寄生构造函数模式
(function(){
    function SpecialArray() {
        //创建数组
        var values = new Array();
        //添加值
        values.push.apply(values, arguments);
        //添加方法
        values.toPipedString = function() {
            return this.join("|");
        };
        //返回数组
        return values;
    }
    var colors = new SpecialArray("red", "blue", "green");
    console.log(colors); //["red", "blue", "green", toPipedString: function]
    console.log(colors.toPipedString()); //"red|blue|green"
    console.log(colors instanceof SpecialArray); //false 返回的对象与构造函数或者构造函数的原型没有什么关系
})();

// 稳妥构造函数模式
(function() {
    function Person(name, age, job) {
        //创建要返回的对象
        var o = new Object();
        //可以在这里定义私有变量和函数
        //添加方法
        o.sayName = function() {
            console.log(name);
        };
        //返回对象
        return o;
    }
    var friend = Person("Nicholas", 29, "Software Engineer");
    friend.sayName(); //"Nicholas"
})();

(function(){
    function SuperType(){
    this.property = true;
    }
    SuperType.prototype.getSuperValue = function(){
    return this.property;
    };
    function SubType(){
    this.subproperty = false;
    }
    //继承了 SuperType
    SubType.prototype = new SuperType();
    SubType.prototype.getSubValue = function (){
    return this.subproperty;
    };
    var instance = new SubType();
    console.log(instance.getSuperValue()); //true
    console.log(instance instanceof Object); //true
    console.log(instance instanceof SuperType); //true
    console.log(instance instanceof SubType); //true

    console.log(Object.prototype.isPrototypeOf(instance)); //true
    console.log(SuperType.prototype.isPrototypeOf(instance)); //true
    console.log(SubType.prototype.isPrototypeOf(instance)); //true
})();

(function(){
    function SuperType() {
        this.colors = ["red", "blue", "green"];
    }

    function SubType() {}
    //继承了 SuperType
    SubType.prototype = new SuperType();

    var instance1 = new SubType();
    instance1.colors.push("black");
    console.log(instance1.colors); //"red,blue,green,black"
    var instance2 = new SubType();
    console.log(instance2.colors); //"red,blue,green,black"
    var st = new SuperType();
    console.log(st.colors); //["red", "blue", "green"] 它不受影响
})();

(function(){
    function SuperType(name) {
        this.name = name;
    }
    SuperType.prototype.getName = function(){
        console.log(this.name);
    }

    function SubType() {
        //继承了 SuperType，同时还传递了参数
        SuperType.call(this, "Nicholas");
        //实例属性
        this.age = 29;
    }
    var instance = new SubType();
    console.log(instance.name); //"Nicholas";
    console.log(instance.age); //29
    // console.log(instance.getName()); //报错，因为并非用的原型链方式，此时父类原型的方法不可见
})();

//组合继承(伪经典继承)
(function(){
    function SuperType(name) {
        this.name = name;
        this.colors = ["red", "blue", "green"];
    }
    SuperType.prototype.sayName = function() {
        console.log(this.name);
    };

    function SubType(name, age) {
        //继承属性
        SuperType.call(this, name);
        this.age = age;
    }
    //继承方法
    SubType.prototype = new SuperType();
    SubType.prototype.constructor = SubType;
    SubType.prototype.sayAge = function() {
        console.log(this.age);
    };
    var instance1 = new SubType("Nicholas", 29);
    instance1.colors.push("black");
    console.log(instance1.colors); //"red,blue,green,black"
    instance1.sayName(); //"Nicholas";
    instance1.sayAge(); //29
    var instance2 = new SubType("Greg", 27);
    console.log(instance2.colors); //"red,blue,green"
    instance2.sayName(); //"Greg";
    instance2.sayAge(); //27
})();

// 原型式继承和寄生式继承
(function(){
    function object(o) {
        function F() {}
        F.prototype = o;
        return new F();
    }
    var person = {
        name: "Nicholas",
        friends: ["Shelby", "Court", "Van"]
    };
    var person2 = {
        name: "Nicholas",
        friends: ["Shelby", "Court", "Van"]
    };
    var anotherPerson = object(person);
    anotherPerson.name = "Greg";
    anotherPerson.friends.push("Rob");
    var yetAnotherPerson = object(person);
    yetAnotherPerson.name = "Linda";
    yetAnotherPerson.friends.push("Barbie");
    console.log(person.friends); //"Shelby,Court,Van,Rob,Barbie"

    var anotherPerson2 = Object.create(person2);
    anotherPerson2.name = "Greg";
    anotherPerson2.friends.push("Rob");
    var yetAnotherPerson2 = Object.create(person2);
    yetAnotherPerson2.name = "Linda";
    yetAnotherPerson2.friends.push("Barbie");
    console.log(person2.friends); //"Shelby,Court,Van,Rob,Barbie"

    function createAnother(original) {
        var clone = object(original); //通过调用函数创建一个新对象
        clone.sayHi = function() { //以某种方式来增强这个对象
            console.log("hi");
        };
        return clone; //返回这个对象
    }
    var anotherPerson = createAnother(person);
    anotherPerson.sayHi(); //"hi
})();

//寄生组合式继承1
(function(){
    function object(o) {
        function F() {}
        F.prototype = o;
        return new F();
    }

    function SuperType(name) {
        this.name = name;
        this.colors = ["red", "blue", "green"];
    }
    SuperType.prototype.sayName = function() {
        console.log(this.name);
    };

    function SubType(name, age) {
        SuperType.call(this, name); //第二次调用 SuperType()
        this.age = age;
    }
    SubType.prototype = new SuperType(); //第一次调用 SuperType()
    SubType.prototype.constructor = SubType;
    SubType.prototype.sayAge = function() {
        console.log(this.age);
    };

    function inheritPrototype(subType, superType){
    var prototype = object(superType.prototype); //创建对象
    prototype.constructor = subType; //增强对象
    subType.prototype = prototype; //指定对象
    }
})();

//寄生组合式继承
(function(){
    function object(o) {
        function F() {}
        F.prototype = o;
        return new F();
    }

    function SuperType(name) {
        this.name = name;
        this.colors = ["red", "blue", "green"];
    }
    SuperType.prototype.sayName = function() {
        console.log(this.name);
    };

    function SubType(name, age) {
        SuperType.call(this, name);
        this.age = age;
    }
    inheritPrototype(SubType, SuperType);
    SubType.prototype.sayAge = function() {
        console.log(this.age);
    };

    function inheritPrototype(subType, superType) {
        var prototype = object(superType.prototype); //创建对象
        prototype.constructor = subType; //增强对象
        subType.prototype = prototype; //指定对象
    }
})();


(function(){
    function foo(){
        console.log(this.a);
    }
    var testFn = function(){};

    var obj = {
        a: 2,
        foo: foo
    };

    var obj2 = {
        a: 4,
        obj: obj
    }

    this.a = 'oops global';

    obj.foo(); //2
    var bar = obj.foo; // bar = function foo()
    bar(); //虽然bar是obj.foo的一个引用，但是实际上，它引用的是foo函数本身，因此此时的bar其实是一个不带任何修饰的函数调用，因此应用了默认绑定; 即不带修饰的函数调用，this就是window

    obj2.obj.foo(); //2

    var bar2 =  obj2.obj.foo; // bar2 = function foo()
    bar2(); //uoops global

    var bar22 = obj2.obj;
    bar22.foo(); //2

    this.c = 'global c';

    var obq = {
        c: '10',
        boo: function(){
            console.log(this.c);
        }
    }
    obq.boo(); //10
    var obq2 ={
        c: '20',
        obq: obq.boo //这里的点式调用决定了非直接调用而是点式调用(如bbb22.obq())，并且通过obq2调用 boo()时，this为obq2
    }

    var obq22 ={
        c: '200',
        obq: obq2
    }
    var obq23 ={
        c: '200',
        obq: obq2.obq
    }

    obq2.obq(); //20
    var bbb = obq2.obq;
    bbb(); //global c

    var bbb22 = obq22.obq;
    bbb22.obq(); //20 点式调用，最终的一步是obq2里面的obq.boo
    var bbb222 = obq22.obq.obq;
    bbb222(); //global c

    var bbb23 = obq23.obq;
    bbb23(); //global c


})();

(function(){
    function foo(num){
        console.log('foo: ' + num);
        this.count ++;
    }

    foo.count = 0;
    var i;
    for (i = 0; i < 10; i++) {
        if(i>5){
            foo(i);
        }
    };
    console.log(this.count);
    console.log(foo.count);
})();

//声明提升
(function(){
    foo();

    function foo(){
        console.log(a);
        var a = 2;
    }
})();

(function(){
    foo(); // 1
    function foo(){
        console.log(1);
    }
    var foo = function(){
        console.log(2);
    }
    foo(); // 2
})();

(function(){
    foo(); // 2
    function foo(){
        console.log(1);
    }
    function foo(){
        console.log(2);
    }
    foo(); // 2
})();


(function(){
    // foo(); // TypeError: foo is not a function
    var a = true;
    if(a){
        function foo(){
            console.log('a');
        }
    }else{
        function foo(){
            console.log('b');
        }
    }
    foo(); // a

})();

//闭包
(function() {
    function foo() {
        var a = 2;

        function bar() {
            console.log(a);
        }

        bar();
    }
    foo(); //2

})();

(function() {
    function foo() {
        var a = 2;

        function bar() {
            console.log(a);
        }

        return bar;
    }
    var baz = foo();
    baz(); //2--这就是闭包的效果
})();

(function(){
    // for (var i = 0; i < 5; i++) {
    //     (function(){
    //         setTimeout(function(){
    //             console.log(i); //一直是5,累计五个5
    //         }, i*1000);
    //     })();
    // };

    // for (var i = 0; i < 5; i++) {
    //     (function(j){
    //         setTimeout(function(){
    //             console.log(j); //0, 1, 2, 3, 4
    //         }, j*1000);
    //     })(i);
    // };

    // for (var i = 0; i < 5; i++) {
    //     let j = i;
    //     setTimeout(function(){
    //         console.log(j); //0, 1, 2, 3, 4
    //     }, j*1000);
    // };

    // for (let i = 0; i < 5; i++) {
    //     setTimeout(function(){
    //         console.log(i); //0, 1, 2, 3, 4
    //     }, i*1000);
    // };
})();

//模块
(function(){
    function CoollModule(id){
        function identify(){
            console.log(id);
        }

        return {
            identify: identify
        };
    }
    var foo1 = CoollModule('foo 1');
    var foo2 = CoollModule('foo 2');

    foo1.identify();
    foo2.identify();

    var foo = (function CoollModule(id){
        function change(){
            publicAPI.identify = identify2;
        }

        function identify1(){
            console.log(id);
        }
        function identify2(){
            console.log(id.toUpperCase());
        }

        var publicAPI = {
            change: change,
            identify: identify1
        };

        return publicAPI;
    })('foo module');

    foo.identify();
    foo.change();
    foo.identify();
})();

(function(){
    //获取某元素在页面上的偏移量
    function getElementLeft(element){
        var actualLeft = element.offsetLeft;
        var current = element.offsetParent;

        while(current != null){
            actualLeft += current.offsetLeft;
            current = current.offsetParent;
        }

        return actualLeft;
    }
})();

var EventUtil = {
    addHandler: function(element, type, handler){
        if(element.addEventListener){
            element.addEventListener(type, handler, false);
        }else if(element.attachEvent){
            element.attachEvent('on' + type.handler);
        }else{
            element['on' + type] = handler;
        }
    },
    removeHandler: function(element, type, handler){
        if(element.removeEventListener){
            element.removeEventListener(type, handler, false);
        }else if(element.attachEvent){
            element.detachEvent('on' + type.handler);
        }else{
            element['on' + type] = null;
        }
    }
};