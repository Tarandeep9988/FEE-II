const r = document.querySelector('#r');
const g = document.querySelector('#g');
const b = document.querySelector('#b');
const a = document.querySelector('#a');
const inputs = document.querySelectorAll('input');
const result = document.querySelector('#result');


document.querySelector('#btn').addEventListener('click', (e)=> {
    e.preventDefault(); 
    const red = Number(r.value);
    const green = Number(g.value);
    const blue = Number(b.value);
    const alpha = Number(a.value);
    if (red < 0 || green < 0 || blue < 0 || alpha < 0 || red > 255 || green > 255 || blue > 255 || alpha > 1) {
        result.innerHTML = "Invalid input!";
        return;
    }
    const color = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
    for (const e of inputs) {
        e.style.backgroundColor = color;
    }
    result.innerHTML = color;
});