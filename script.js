const input = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const results = document.getElementById("results-div")

// Think this may be a suitable regex to use for the check button function.
const regex = /^1?[\s\(]?[\d][\d][\d][\s\)-]?[\d][\d][\d][-\s]?[\d][\d][\d][\d]/;

const clear = () => {
    input.value = "";
    results.innerText = ""
}

const check = () => {
    if (regex.test(input.value)) {
        results.innerHTML += `Valid US Number:<br>${input.value}<br>`;
    } else {
        results.innerHTML += `Invalid US Number:<br>${input.value}<br>`;
    }
}

checkBtn.addEventListener("click", () => check());

clearBtn.addEventListener("click", () => clear());



