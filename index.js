
let saveItem = document.getElementById("save-el");
let item = document.getElementById("count-el");
let count = 0;
function increment (){
    count += 1;
    item.textContent = count;
}

function save(){
    let countStr = count + "-";
    saveItem.textContent += countStr;
    item.textContent = 0;
    count = 0;
}

