import find from "./find.js";

function knightTravails(startPoint, endPoint) {
    const { start, path } = find(startPoint, endPoint);
    const moves = path.length;

    console.log(`You made it in ${moves}! Here's your path:`);
    console.log(start);
    for (const step of path) {
        console.log(step);
    }
}

export default knightTravails;
