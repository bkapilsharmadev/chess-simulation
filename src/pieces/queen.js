import ChessPiece from "../chess-piece.js";
import ChessBoard from "../chess-board.js";

export default class Queen extends ChessPiece {

    getPossibleMoves(position) {
        if (!ChessBoard.isValidPosition(position)) {
            throw new Error("Invalid position");
        }

 
        const horizontalDirections = [[0, -1], [0, 1]]; 
        const verticalDirections = [[-1, 0], [1, 0]]; 
        const topLeftToBottomRight = [[1, 1], [-1, -1]];
        const topRightToBottomLeft = [[1, -1], [-1, 1]];
  
        const horizontalMoves = ChessPiece.calculateMoves(position, horizontalDirections, Infinity).sort((a, b) => {
            const [, colA] = ChessBoard.getPositionCoordinates(a);
            const [, colB] = ChessBoard.getPositionCoordinates(b);
            return colA - colB;
        });

        const verticalMoves = ChessPiece.calculateMoves(position, verticalDirections, Infinity).sort((a, b) => {
            const [rowA] = ChessBoard.getPositionCoordinates(a);
            const [rowB] = ChessBoard.getPositionCoordinates(b);
            return rowA - rowB; 
        });


        const diagonalMoves1 = ChessPiece.calculateMoves(position, topRightToBottomLeft, Infinity).sort((a, b) => {
            const [rowA, colA] = ChessBoard.getPositionCoordinates(a);
            const [rowB, colB] = ChessBoard.getPositionCoordinates(b);
            return colA === colB ? rowA - rowB : colA - colB;
        });

        const diagonalMoves2 = ChessPiece.calculateMoves(position, topLeftToBottomRight, Infinity).sort((a, b) => {
            const [rowA, colA] = ChessBoard.getPositionCoordinates(a);
            const [rowB, colB] = ChessBoard.getPositionCoordinates(b);
            return colA === colB ? rowA - rowB : colB - colA;
        }).reverse();

      
        const allMoves = [
            ...horizontalMoves,
            ...verticalMoves, 
            ...diagonalMoves1, 
            ...diagonalMoves2,
        ];

        return allMoves.join(", ");
    }
}

// Register the Queen piece
ChessPiece.registerPiece("Queen", Queen);
