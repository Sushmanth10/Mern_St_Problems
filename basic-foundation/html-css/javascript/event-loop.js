console.log("1. start of the program");

setTimeout(function goal(){
   console.log("2. First timeout")
},0)
setTimeout(function goal(){
   console.log("3. Second timeout")
},0)
setTimeout(function goal(){
   console.log("4. Third timeout")
},0)


fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
.then((data)=> {return  data.json()})
.then(jsonData=>console.log(jsonData))
.catch((error)=>console.error(error));

const prms = new Promise((resolve,reject) => {
    setTimeout(function(){
    resolve("resolved");      
    },100)
})

prms.then((data) => console.log(data)).catch((error)=>consol.error(error));

console.log("6. end of the program");