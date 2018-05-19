var result = [1, 2, 3].reduce((total, current) => total + current, 1);
console.log(result);

var even = [3, 2, 56, 7].filter(el => !(el % 2));
console.log(even);

var data = [
    {
        price: 100,
        total: 2
    }, {
        price: 20,
        total: 1
    }, {
        price: 22,
        total: 5
    }, {
        price: 22,
        total: 6
    }
]
var sorted = data.sort((a, b) => {
    var diff = a.price - b.price;
    if (diff !== 0) {
        return diff;
    }
    return a.total - b.total;
})
console.log(sorted);

function MyComponent() {
    this.age = 12;
    setTimeout(() => {
        this.age += 1;
        console.log(this.age);
    }, 100);
}
new MyComponent();

class Human {
    static totalPeople = 0;
    _name;
    constructor(name) {
        this._name = name;
        Human.totalPeople += 1;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    talk() {
        return `Hi, I'm ${this._name}!`;
    }
}

class Developer extends Human {
    _languages;
    constructor(name, languages) {
        super(name);
        this._languages = languages;
    }
    getLanguages() {
        return this._languages;
    }
    talk() {
        return `${super.talk()} And I know ${this
            ._languages
            .join(',')}.`
    }
}

var dev = new Developer('Shadow', ['Javascript', 'Java']);
console.log(dev.talk());

var fns = [];
for (let i = 0; i < 5; i++) {
    fns
        .push(function () {
            console.log(i)
        });
}
fns.forEach(fn => fn());

class Person {
    getKidCount() {
        return 41;
    }
}
class Person2 {
    @nonenumerable
    getKidCount2() {
        return 42;
    }
}
function nonenumerable(target, name, description) {
    description.enumerable = false;
    return description;
}
var person = new Person();
for (let prop in person) {
    console.log(prop);
}
var person2 = new Person2();
for (let prop in person2) {
    console.log(prop);
}

import {square, PI} from './math';
console.log(square(3));

import cube, {square22} from './math2';
console.log(square22(3));

//将默认导出以cc的名字导出
import {default as cc} from './math2';
console.log(cc(2));

let primes : number[] = [];
primes.push(90)

var isPrime = n => {
    return n == 0;
}

//函数表达式方式 入参一个，并且是数值型，返回值为布尔类型
//前面是入参的类型，后面是返回结果类型
let isPrime2 : (n : number) => boolean = m => {
    return m == 5;
}
console.log(isPrime2(3));
//函数声明
function isPrime3(n : number) : boolean {
    return 8 == n;
}
//在对象字面量里面定义方法
let mm = {
    squareRoot(n : number): number {
        return n + 1;
    }
}

interface Accountable{
    accountNumber: string;
    getIncome(): number;
}
class Firm implements Accountable{
    accountNumber: '343';
    getIncome(): number{
        return 444;
    }
}
interface individual extends Accountable, Human{
    ssn: string;
}

class NOde {
    value: any;
}
class BinarySearchTree{
    private root: Node;
    insert(value: string): void{

    }
}
var bst = new BinarySearchTree();
bst.insert('ttt');