import ChessPiece from "../chess-piece.js";
import ChessBoard from "../chess-board.js";

export default class King extends ChessPiece {

    getPossibleMoves(position) {
        if (!ChessBoard.isValidPosition(position)) {
            throw new Error("Invalid position");
        }

        const directions = [
            [-1, -1], [-1, 0], [-1, 1],
            [0, -1],         [0, 1], 
            [1, -1], [1, 0], [1, 1],
        ];

        let moves = ChessPiece.calculateMoves(position, directions, 1);
        moves = moves.sort((a, b) => {
            console.log('a>>', a, 'b>>', b);
            const [rowA, colA] = ChessBoard.getPositionCoordinates(a);
            const [rowB, colB] = ChessBoard.getPositionCoordinates(b);

            // First sort by column (ascending), then by row (ascending)
            return colA === colB ? rowA - rowB : colA - colB;
        });

        return directions.length > 0 ? moves.join(", ") : "";
    }
}

// Register the King piece
ChessPiece.registerPiece("King", King);
