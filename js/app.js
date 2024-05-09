class Application {
    constructor() {
        this.canvas = document.getElementById('my-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.shapes = [];
    }

    setup() {
        let shape1 = new Shape(300, 300, CELL_WIDTH, SHAPE_LINE, AQUA);
        let shape2 = new Shape(400, 400, CELL_WIDTH, SHAPE_SKEW, GREENLIGHT);

        this.shapes.push(shape1);
        this.shapes.push(shape2);
    }

    draw() {
        for (let shape of this.shapes) {
            shape.draw();
        }
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    updateCanvas() {
        this.clearCanvas();
        this.draw();
    }

    update() {
        this.updateCanvas();
        requestAnimationFrame(update);
    }
}