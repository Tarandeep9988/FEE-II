// Create the main container
const container = document.createElement('div');
container.className = 'container';

// Create the display for the calculator
const display = document.createElement('div');
display.className = 'display';
const dispField = document.createElement('span');
dispField.id = 'disp_field';
dispField.textContent = '0'; // Default display value
display.appendChild(dispField);

// Append the display to the container
container.appendChild(display);

// Create the buttons for the calculator
const buttons = document.createElement('div');
buttons.className = 'buttons';

// Array of button values and IDs
const buttonValues = [
    { value: '7', id: '7-btn' },
    { value: '8', id: '8-btn' },
    { value: '9', id: '9-btn' },
    { value: '+', id: 'divide-btn' },
    { value: '4', id: '4-btn' },
    { value: '5', id: '5-btn' },
    { value: '6', id: '6-btn' },
    { value: '-', id: 'mutiply-btn' },
    { value: '1', id: '1-btn' },
    { value: '2', id: '2-btn' },
    { value: '3', id: '3-btn' },
    { value: '*', id: 'diff-btn' },
    { value: '.', id: 'point-btn' },
    { value: '0', id: '0-btn' },
    { value: '=', id: 'result-btn' },
    { value: '/', id: 'add-btn' }
];

// Create buttons dynamically and append them to the buttons container
buttonValues.forEach(btn => {
    const button = document.createElement('button');
    button.value = btn.value;
    button.className = btn.value.match(/[0-9.]/) ? 'btn num-btn' : 'btn op-btn';
    button.id = btn.id;
    button.textContent = btn.value;
    buttons.appendChild(button);
});

// Append the buttons container to the main container
container.appendChild(buttons);

// Append everything to the body
document.body.appendChild(container);