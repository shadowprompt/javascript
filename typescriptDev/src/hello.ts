class Hello{
    word: string;
    constructor(word){
        this.word = word;
    }
    sayHi= function(){
        console.log(this.word + '...');
    }
}