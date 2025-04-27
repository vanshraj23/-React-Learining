function MyComponent(name) {
    const element = document.createElement('div');
    element.textContent = `Hello ${name}`;
    element.classList.add('greeting');
    
    return element;
}

export default MyComponent;