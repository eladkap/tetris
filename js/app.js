class Application {
    constructor() {
        this.canvas = document.getElementById('my-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.shapes = [];
    }

    setup() {
        let shape1 = new Shape(300, 10, CELL_WIDTH, SHAPE_LINE, AQUA);
        let shape2 = new Shape(500, 10, CELL_WIDTH, SHAPE_SKEW, GREENLIGHT);
        let shape3 = new Shape(700, 10, CELL_WIDTH, SHAPE_SQUARE, YELLOW);
        let shape4 = new Shape(900, 10, CELL_WIDTH, SHAPE_T, RED);
        let shape5 = new Shape(1100, 10, CELL_WIDTH, SHAPE_L, BLUE);

        this.shapes.push(shape1);
        this.shapes.push(shape2);
        this.shapes.push(shape3);
        this.shapes.push(shape4);
        this.shapes.push(shape5);
    }

    draw() {
        for (let shape of this.shapes) {
            shape.draw();
        }
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    updateElements() {
        for (let shape of this.shapes) {
            shape.update();
        }
    }

    updateCanvas() {
        this.clearCanvas();
        this.updateElements();
        this.draw();
    }

    update() {
        this.updateCanvas();
        requestAnimationFrame(update);
    }
}