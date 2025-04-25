import MyComponent from './impaerative.js';

const root = document.querySelector('#root');

function renderDiv(name) {
    const element = MyComponent(name);
    root.append(element);
}

renderDiv("Vansh");
renderDiv("Raj");
renderDiv("Bir");
renderDiv("Bantu");
renderDiv("Loligitak");
renderDiv("Mantoo");