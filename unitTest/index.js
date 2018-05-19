
const todos = (state=[], action)=>{

}

const testAddTodo = ()=>{
    const stateBefore=[];
    const action = {
        type: 'ADD',
        id:0,
        text: 'learn'
    }

    const stateAfter=[{
        id:0,
        text:'learn',
        complete: false
    }];

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
        todos(stateBefore,action)).toEqual(stateAfter);
}

testAddTodo();

console.log("passed");