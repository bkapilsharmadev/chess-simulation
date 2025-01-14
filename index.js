import readline from "readline";

import parseInput from "./src/input-parser.js";
import Pawn from "./src/pieces/pawn.js";
import King from "./src/pieces/king.js";
import Queen from "./src/pieces/queen.js";
import ChessPiece from "./src/chess-piece.js";

function initChess() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    console.log("Welcome to the Chess Moves Simulator!");
    console.log("Enter the piece and position in the format '<Piece>, <Position>' (e.g., 'King, D5').");
    console.log("Type 'exit' to quit the application.\n");

    rl.on("line", (input) => {
        if (input.trim().toLowerCase() === "exit") {
            console.log("Exiting the application... Bye!");
            rl.close();
            return;
        }

        try {
            const { piece, position } = parseInput(input);

            if (!ChessPiece.isValidPiece(piece)) {
                throw new Error(`Invalid piece: '${piece}'.`);
            }


            let possibleMoves;

            // Logic for each piece
            switch (piece.toLowerCase()) {
                case "pawn":
                    const pawn = new Pawn();
                    possibleMoves = pawn.getPossibleMoves(position);
                    break;
                case "king":
                    const king = new King();
                    possibleMoves = king.getPossibleMoves(position);
                    break;
                case "queen":
                    const queen = new Queen();
                    possibleMoves = queen.getPossibleMoves(position);
                    break;
                default:
                    throw new Error(`Invalid piece: '${piece}'.`);
            }

            console.log(possibleMoves);
        } catch (error) {
            console.error(`Error: ${error.message}\n`);
        }
    });
}


initChess();
