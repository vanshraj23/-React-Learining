// Getting the references of the display and button.
const display = document.querySelector(".counter-display");
const counter = document.querySelector(".counter-btn");

// Initializing the count.
let count = 0;

// Adding click listner to the button.
counter.addEventListener("click",() => {
    // incrementing the count
    count++;

    // update the display.
    display.textContent = `You clicked ${count < 10 ? `0${count}` : count} times`;
});