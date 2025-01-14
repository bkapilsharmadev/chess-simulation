import ChessPiece from "../chess-piece.js";
import ChessBoard from "../chess-board.js";

export default class Pawn extends ChessPiece {

    getPossibleMoves(position) {
        if (!ChessBoard.isValidPosition(position)) {
            throw new Error("Invalid position");
        }

        const directions = [[1, 0]];

        const moves = ChessPiece.calculateMoves(position, directions, 1);
        return directions.length > 0 ? moves.join(", ") : "";
    }
}

ChessPiece.registerPiece("Pawn", Pawn);
