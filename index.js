// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
//change the count-el in the html to reflect the new count
let count = 0;
function increment(){
    count ++;
    //gets element from with Id: "count-el" from HTML file and sets
    //the innerText to count.
    document.getElementById("count-el").innerText = count;
}

/*
let countEl = document.getElementById("count-el");

countEl.innerText = count;*/