const unOrderedList = document.querySelector(".unordered-list");
console.log(unOrderedList);

const firstListItem = document.querySelector(".list-item");
console.log(firstListItem);

const allListItems = document.querySelectorAll(".list-item");
// console.log(allListItems);
// console.log(typeof allListItems);
console.log(allListItems.length)

for(let key = 0; key < allListItems.length; key++){
    console.log(key);
    const listItem = allListItems[key];
    console.log(listItem);
}

// for(initialization, condition, operation){

// }




// console.log(allListItems[0]);
// console.log(allListItems[1]);
// console.log(allListItems[2]);