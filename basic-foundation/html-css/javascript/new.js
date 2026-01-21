function counter(){
    let count = 0;
    function increment(){
    console.log("count:",count);
    count = count + 1;
    return count;
    }

    function decrement(){
        count = count - 1;
        console.log("count: ",count);
        return count;
    }

    const funcArr = [increment, decrement];
    return funcArr;
    //(or) return [increment, decrement]
}
const [increment, decrement] = counter();
console.log(increment)
console.log(decrement)