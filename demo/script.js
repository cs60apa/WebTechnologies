// Get references to the canvas and its context
const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = window.innerWidth * 0.8;
canvas.height = window.innerHeight * 0.6;

// Set up initial brush properties
let painting = false;
let brushColor = '#000000';
let brushSize = 5;

// Handle color picker
const colorPicker = document.getElementById('colorPicker');
colorPicker.addEventListener('input', (e) => {
    brushColor = e.target.value;
});

// Handle brush size
const brushSizeInput = document.getElementById('brushSize');
brushSizeInput.addEventListener('input', (e) => {
    brushSize = e.target.value;
});

// Handle the clear button
const clearButton = document.getElementById('clearButton');
clearButton.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// Start drawing when the mouse is pressed down
canvas.addEventListener('mousedown', (e) => {
    painting = true;
    draw(e);
});

// Stop drawing when the mouse is released or leaves the canvas
canvas.addEventListener('mouseup', () => {
    painting = false;
    ctx.beginPath(); // Reset the path for a clean start
});
canvas.addEventListener('mouseleave', () => {
    painting = false;
    ctx.beginPath();
});

// Draw on the canvas
function draw(e) {
    if (!painting) return;

    ctx.lineWidth = brushSize;
    ctx.lineCap = 'round';
    ctx.strokeStyle = brushColor;

    // Draw line
    ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
}

// Start drawing as the mouse moves over the canvas
canvas.addEventListener('mousemove', draw);
