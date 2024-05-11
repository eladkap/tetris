class Board {
    constructor(x, y, rows, cols) {
        this.pos = new Vector(x, y);
        this.rows = rows;
        this.cols = cols;
        this.setMatrix();
        this.shapeLocations = [];
        this.shapeColor = null;
        this.colorValue = 0;
    }

    setMatrix() {
        this.mat = [];
        for (let i = 0; i < this.rows; i++) {
            this.mat.push(new Array(this.cols));
        }

        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                this.mat[i][j] = 0;
            } 
        }
        // set frame
        for (let i = 0; i < this.rows; i++) {
            this.mat[i][0] = 1;
        }
        for (let i = 0; i < this.rows; i++) {
            this.mat[i][this.cols - 1] = 1;
        }
        for (let j = 0; j < this.cols; j++) {
            this.mat[0][j] = 1;
        }
        for (let j = 0; j < this.cols; j++) {
            this.mat[this.rows - 1][j] = 1;
        } 
    }

    createRandomShape() {
        let i = Utils.randomRange(0, SHAPE_TYPES.length - 1);
        let shapeType = SHAPE_TYPES[i];
        let value = Utils.randomRange(2, Object.keys(BLOCK_NUMS_TO_COLORS).length - 1);
        let color = i;
        this.shapeColor = color;
        this.colorValue = value;
        console.log(`${this.colorValue}, ${this.shapeColor}`);
        console.log(BLOCK_NUMS_TO_COLORS[value]);

        if (shapeType == SHAPE_LINE) {
            this.shapeLocations = [
                [1, this.cols / 2 - 2],
                [1, this.cols / 2 - 1],
                [1, this.cols / 2],
                [1, this.cols / 2 + 1]
            ];
            this.mat[1][this.cols / 2 - 2] = color;
            this.mat[1][this.cols / 2 - 1] = color;
            this.mat[1][this.cols / 2] = color;
            this.mat[1][this.cols / 2 + 1] = color;
        }
        else if (shapeType == SHAPE_SQUARE) {
            this.shapeLocations = [
                [1, this.cols / 2 - 1],
                [1, this.cols / 2],
                [2, this.cols / 2],
                [2, this.cols / 2 - 1]
            ];
            this.mat[1][this.cols / 2 - 1] = color;
            this.mat[1][this.cols / 2] = color;
            this.mat[2][this.cols / 2] = color;
            this.mat[2][this.cols / 2 - 1] = color;
        }
        else if (shapeType == SHAPE_T) {
            this.shapeLocations = [
                [1, this.cols / 2 - 1],
                [1, this.cols / 2],
                [1, this.cols / 2 + 1],
                [2, this.cols / 2]
            ];
            this.mat[1][this.cols / 2 - 1] = color;
            this.mat[1][this.cols / 2] = color;
            this.mat[1][this.cols / 2 + 1] = color;
            this.mat[2][this.cols / 2] = color;
        }
        else if (shapeType == SHAPE_L) {
            this.shapeLocations = [
                [1, this.cols / 2 - 1],
                [2, this.cols / 2 - 1],
                [3, this.cols / 2 - 1],
                [3, this.cols / 2]
            ];
            this.mat[1][this.cols / 2 - 1] = color;
            this.mat[2][this.cols / 2 - 1] = color;
            this.mat[3][this.cols / 2 - 1] = color;
            this.mat[3][this.cols / 2] = color;
        }
        else if (shapeType == SHAPE_SKEW || 1) {
            this.shapeLocations = [
                [1, this.cols / 2],
                [1, this.cols / 2 - 1],
                [2, this.cols / 2 - 1],
                [2, this.cols / 2 - 2]
            ];
            this.mat[1][this.cols / 2] = color;
            this.mat[1][this.cols / 2 - 1] = color;
            this.mat[2][this.cols / 2 - 1] = color;
            this.mat[2][this.cols / 2 - 2] = color;
        }
    }

    draw() {
        app.ctx.beginPath();
        app.ctx.strokeStyle = GRAY3;
        app.ctx.lineWidth = 1;
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                let x = this.pos.x + BLOCK_WIDTH * j;
                let y = this.pos.y + BLOCK_WIDTH * i;
                let value = this.mat[i][j];
                if (value == 0) {
                    continue;
                }
                let color = BLOCK_NUMS_TO_COLORS[value];
                app.ctx.fillStyle = color;
                app.ctx.rect(x, y, BLOCK_WIDTH, BLOCK_WIDTH);
                app.ctx.fill();
                app.ctx.stroke();
            } 
        }
    }

    canBlockGoDown(row, col) {
        if (row >= this.rows - 2) {
            return false;
        }
        return this.mat[row + 1][col] == 0 || this.mat[row + 1][col] > 1;
    }

    moveShapeDown() {
        for (let shapeLocation of this.shapeLocations) {
            let row = shapeLocation[0];
            let col = shapeLocation[1];
            this.mat[row][col] = 0;
            shapeLocation[0]++;
            this.mat[shapeLocation[0]][shapeLocation[1]] = this.colorValue;
        }
    }

    update() {
        let count = 0;
        for (let shapeLocation of this.shapeLocations) {
            if (this.canBlockGoDown(shapeLocation[0], shapeLocation[1])) {
                count++;
            }
        }
        if (count == this.shapeLocations.length) {
            this.moveShapeDown();
        }
    }
}