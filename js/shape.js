class Shape {
    constructor(x, y, width, type, color) {
        this.pos = new Vector(x, y);
        this.width = width;
        this.type = type;
        this.color = color;
        this.velocity = new Vector(0, SHAPE_SPEED);
        this.cellPositions = [];
        this.setCells(type);
    }

    setCells(type) {
        if (type == SHAPE_LINE) {
            let x = this.pos.x;
            for (let i = 0; i < 4; i++) {
                let cellPos = new Vector(x, this.pos.y);
                this.cellPositions.push(cellPos);
                x += this.width;
            }
        }
        else if (type == SHAPE_SQUARE) {
            this.cellPositions.push(new Vector(this.pos.x, this.pos.y));
            this.cellPositions.push(new Vector(this.pos.x + this.width, this.pos.y));
            this.cellPositions.push(new Vector(this.pos.x, this.pos.y + this.width));
            this.cellPositions.push(new Vector(this.pos.x + this.width, this.pos.y + this.width));

        }
        else if (type == SHAPE_T) {
            this.cellPositions.push(new Vector(this.pos.x, this.pos.y));
            this.cellPositions.push(new Vector(this.pos.x + this.width, this.pos.y));
            this.cellPositions.push(new Vector(this.pos.x + 2 * this.width, this.pos.y));
            this.cellPositions.push(new Vector(this.pos.x + this.width, this.pos.y + this.width));
        }
        else if (type == SHAPE_L) {
            this.cellPositions.push(new Vector(this.pos.x, this.pos.y));
            this.cellPositions.push(new Vector(this.pos.x, this.pos.y + this.width));
            this.cellPositions.push(new Vector(this.pos.x, this.pos.y + 2 * this.width));
            this.cellPositions.push(new Vector(this.pos.x + this.width, this.pos.y + 2 * this.width));
        }
        else if (type == SHAPE_SKEW) {
            this.cellPositions.push(new Vector(this.pos.x + this.width, this.pos.y));
            this.cellPositions.push(new Vector(this.pos.x + 2 * this.width, this.pos.y));
            this.cellPositions.push(new Vector(this.pos.x, this.pos.y + this.width));
            this.cellPositions.push(new Vector(this.pos.x + this.width, this.pos.y + this.width));
        }
    }

    draw() {
        app.ctx.beginPath();
        app.ctx.strokeStyle = GRAY1;
        app.ctx.lineWidth = 5;
        for (let cellPos of this.cellPositions) {
            app.ctx.fillStyle = this.color;
            app.ctx.rect(cellPos.x, cellPos.y, this.width, this.width);
            app.ctx.stroke();
            app.ctx.fill();
        }
    }

    update() {
        for (let cellPos of this.cellPositions) {
            cellPos.add(this.velocity);
        }
    }

    rotateBy90Degrees() {

    }
}