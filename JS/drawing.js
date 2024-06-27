'use strict';

class FreehandDrawing {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.drawing = false;
        this.brushColor = '#000';
        this.brushSize = 5;

        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());

        this.canvas.addEventListener('mousedown', this.startDrawing.bind(this));
        this.canvas.addEventListener('mouseup', this.stopDrawing.bind(this));
        this.canvas.addEventListener('mousemove', this.draw.bind(this));
    }

    resizeCanvas() {
        // Получаем размеры canvas из CSS
        const computedStyle = getComputedStyle(this.canvas);
        const width = parseFloat(computedStyle.width);
        const height = parseFloat(computedStyle.height);

        // Устанавливаем размеры canvas
        this.canvas.width = width;
        this.canvas.height = height;
        
        // Сбрасываем масштабирование для чётких линий
        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
        // Настраиваем систему координат canvas
        this.ctx.scale(width / this.canvas.clientWidth, height / this.canvas.clientHeight);
    }

    startDrawing(event) {
        this.drawing = true;
        this.ctx.beginPath();
        this.ctx.moveTo(event.offsetX, event.offsetY);
    }

    stopDrawing() {
        this.drawing = false;
        this.ctx.closePath();
    }

    draw(event) {
        if (!this.drawing) return;
        this.ctx.lineWidth = this.brushSize;
        this.ctx.lineCap = 'round';
        this.ctx.strokeStyle = this.brushColor;
        this.ctx.lineTo(event.offsetX, event.offsetY);
        this.ctx.stroke();
    }

    setBrushColor(color) {
        this.brushColor = color;
    }

    setBrushSize(size) {
        this.brushSize = size;
    }

    eraseAll() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}


// выбираем элементы из DOM
const canvas = document.querySelector('#canvas');
const erase = document.querySelector('#erase');
const brushColor = document.querySelector('#brush-color');
const brushSizes = document.querySelectorAll('.brush-size');
const toPNG = document.querySelector('#to-png');

// создаем объект класса FreehandDrawing для указанной области рисования (canvas)
const drawing = new FreehandDrawing(canvas);

// подключаем обработчики кнопок
// стереть рисунок 
erase.addEventListener('click', () => {
    drawing.eraseAll();
});