class MagicSquareBox {
    size;
    matrix;
    constructor(size) {
        this.size = size;
        this.matrix = new Array(this.size);
        for (let i = 0; i < this.size; i++) {
            this.matrix[i] = new Array(this.size);
        }

        this.generateMagicSquare();
    }



    generateMagicSquare() {
        let x = Math.floor(this.size / 2);
        let y = 0;

        for (let num = 1; num <= Math.pow(this.size, 2); num++) {
            this.matrix[y][x] = num;

            const nextX = (x + 1) % this.size;
            const nextY = (y - 1 + this.size) % this.size;

            if (this.matrix[nextY][nextX]) {
                y = (y + 1) % this.size;
            } else {
                x = nextX;
                y = nextY;
            }
        }
    }

    print() {
        console.log(`Magic Square Box of size ${this.size}:`);
        for (let row of this.matrix) {
            console.log(row.join("\t"));
        }
    }
}

const magicSquareBox = new MagicSquareBox(3);
magicSquareBox.print();