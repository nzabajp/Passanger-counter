// initialize the count as 0
let count = 0;
// listen for clicks on the increment button
function increment(){
    // increment the count variable when the button is clicked
    count ++;
    //change the count-el in the html to reflect the new count
    //gets element from with Id: "count-el" from HTML file and sets
    //the innerText to count.
    document.getElementById("count-el").textContent = count;
}
//create a function called save(), which logs out the count when it's called
let savedArr = [];
let saved;
function save(){
    saved = count + ", ";
    savedArr.push(count);
    document.getElementById("save-el").textContent += saved;
    count = 0;
    document.getElementById("count-el").textContent = count;
}
//returns the total passangers
let sumArr;
let total = () => {
    sumArr = savedArr.reduce((x,y) => x + y);
    document.getElementById("total-el").textContent = `Total entered: ${sumArr}`;
}
let reset = () => {
    document.location.reload();
}