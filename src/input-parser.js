import ChessPiece from "./chess-piece.js";
import ChessBoard from "./chess-board.js";

export default function parseInput(input) {
    if (!input || typeof input !== "string" || input.trim().length === 0) {
        throw new Error("Invalid input");
    }

    // Split the input by ',' and trim any whitespace
    const parts = input.split(",").map((part) => part.trim());

    if (parts.length !== 2) {
        throw new Error("Invalid input format. Expected: <Piece>, <Position>.");
    }

    const [piece, position] = parts;

    // Capatilize the first letter, eg pawn -> Pawn
    const formattedPiece = piece.charAt(0).toUpperCase() + piece.slice(1).toLowerCase();

    if (!ChessPiece.isValidPiece(formattedPiece)) {
        throw new Error(`Invalid piece: '${piece}'.`);
    }

    const formattedPosition = position.toUpperCase();
    if (!ChessBoard.isValidPosition(formattedPosition)) {
        throw new Error(`Invalid position: '${position}'.`);
    }

    return { piece: formattedPiece, position: formattedPosition };
}
