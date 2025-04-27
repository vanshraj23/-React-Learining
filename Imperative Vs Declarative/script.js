import MyComponent from './impaerative.js';

const input = document.querySelector('#input');
const enterBtn = document.querySelector('.enterBtn')
const root = document.querySelector('#root');

function renderDiv(name) {
    const element = MyComponent(name);
    root.append(element);
}

enterBtn.addEventListener('click',() => {
    const name = input.value.trim();
    if (name) {
        renderDiv(name);
    }
});