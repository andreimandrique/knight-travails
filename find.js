import Knight from "./knight.js";

function find(start, end) {
    const queue = [[start, []]];
    const visited = new Set();

    while (queue.length > 0) {
        const [current, path] = queue.shift();

        if (current.toString() === end.toString()) {
            return { start, path };
        }

        visited.add(current.toString());

        const knight = new Knight(current);
        const moves = [
            knight.topR(),
            knight.topL(),
            knight.botR(),
            knight.botL(),
            knight.rightT(),
            knight.rightB(),
            knight.leftT(),
            knight.leftB(),
        ];

        for (const move of moves) {
            if (move != null && !visited.has(move.toString())) {
                queue.push([move, [...path, move]]);
            }
        }
    }

    return null;
}

export default find;
