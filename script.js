const input = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const results = document.getElementById("results-div")

let inputValue = input.value;

const clear = () => {
    input.value = "";
    results.innerText = ""
}

const check = () => {
    results.innerText += input.value + "\n";
}

checkBtn.addEventListener("click", () => check());

clearBtn.addEventListener("click", () => clear());



