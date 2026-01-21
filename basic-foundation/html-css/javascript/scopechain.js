function counter(){
    let count = 0;

    function increment (){
        count = count + 1;
        console.log("Count:" , count);
        return count;
    }

    function decrement(){
        count = count - 1;
        console.log("Count: ", count);
        return count;
    }

    const funcArr = [increment, decrement];
    return funcArr;
    //(or) return [increment, decrement];

}

const[increment, decrement] = counter();

increment();
increment();
increment();
decrement();
increment();