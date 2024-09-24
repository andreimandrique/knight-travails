function Knight([x, y]) {
    let knight = [];

    this.position = function () {
        knight = [x, y];
        return knight;
    };

    this.topR = function () {
        let move = [x + 1, y + 2];
        if (move[0] > 7 || move[0] < 0 || move[1] > 7 || move[1] < 0) {
            return null;
        }
        return move;
    };

    this.topL = function () {
        let move = [x - 1, y + 2];
        if (move[0] > 7 || move[0] < 0 || move[1] > 7 || move[1] < 0) {
            return null;
        }
        return move;
    };

    this.botR = function () {
        let move = [x + 1, y - 2];
        if (move[0] > 7 || move[0] < 0 || move[1] > 7 || move[1] < 0) {
            return null;
        }
        return move;
    };

    this.botL = function () {
        let move = [x - 1, y - 2];
        if (move[0] > 7 || move[0] < 0 || move[1] > 7 || move[1] < 0) {
            return null;
        }
        return move;
    };

    this.leftT = function () {
        let move = [x + 2, y + 1];
        if (move[0] > 7 || move[0] < 0 || move[1] > 7 || move[1] < 0) {
            return null;
        }
        return move;
    };

    this.leftB = function () {
        let move = [x + 2, y - 1];
        if (move[0] > 7 || move[0] < 0 || move[1] > 7 || move[1] < 0) {
            return null;
        }
        return move;
    };

    this.rightT = function () {
        let move = [x - 2, y + 1];
        if (move[0] > 7 || move[0] < 0 || move[1] > 7 || move[1] < 0) {
            return null;
        }
        return move;
    };

    this.rightB = function () {
        let move = [x - 2, y - 1];
        if (move[0] > 7 || move[0] < 0 || move[1] > 7 || move[1] < 0) {
            return null;
        }
        return move;
    };

    this.moves = function () {
        console.log(`top right  ${this.topR()}`);
        console.log(`top left   ${this.topL()}`);
        console.log(`bot right  ${this.botR()}`);
        console.log(`bot left   ${this.botL()}`);
        console.log(`left top   ${this.leftT()}`);
        console.log(`left bot   ${this.leftB()}`);
        console.log(`right top  ${this.rightT()}`);
        console.log(`right top  ${this.rightB()}`);
    };
}

export default Knight;
