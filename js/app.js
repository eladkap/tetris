class Application {
    constructor() {
        this.canvas = document.getElementById('my-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.board = null;
    }

    /* Setup functions */

    setBoard() {
        this.board = new Board(BOARD_POS_X, BOARD_POS_Y, BOARD_ROWS + 2, BOARD_COLS + 2);
    }

    setup() {
        this.setBoard();
        this.board.createRandomShape();
    }

    /* Draw functions */
    draw() {
        this.board.draw();
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    /* Update functions */
    updateElements() {
        this.board.update();
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