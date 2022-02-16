let counterEl = document.querySelector('.counter-el');
let count = 0;

let entryEl = document.querySelector('.entry-el');

function increment() {
    count += 1;
    counterEl.textContent = count;
    console.log(counterEl);
}

function decrement() {
    count -= 1;
    counterEl.textContent = count;
    console.log(counterEl);
}

function save() {
    `${entryEl.textContent += counterEl.textContent += ', '}`;
    count = 0;
    counterEl.textContent = count;
}