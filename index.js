let count = 0;
function increment(){
    count ++;
    document.getElementById("count-el").textContent = count;
}

let savedArr = [];

function save(){
    savedArr.push(count);
    document.getElementById("save-el").textContent = `Previous entries: ${savedArr.join(" - ")}`;
    count = 0;
    document.getElementById("count-el").textContent = count;
}

let total = () => {
    const sumArr = savedArr.reduce((x,y) => x + y);
    document.getElementById("total-el").textContent = `Total entered: ${sumArr}`;
}

let reset = () => {
    count = 0
    savedArr = []
    document.getElementById("count-el").textContent = count
    document.getElementById("save-el").textContent = "Previous entries:"
    document.getElementById("total-el").textContent = "Total entered:"
}