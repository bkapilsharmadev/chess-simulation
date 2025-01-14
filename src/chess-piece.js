
import ChessBoard from "./chess-board.js";

export default class ChessPiece {
    static registeredPieces = new Set();

    static DEFAULT_DIRECTIONS = {
        horizontalVertical: [[1, 0], [0, 1], [-1, 0], [0, -1]], 
        diagonal: [[1, 1], [-1, -1], [1, -1], [-1, 1]],
    };

    constructor() {
        if (new.target === ChessPiece) {
            throw new Error('ChessPiece is an abstract class and cannot be instantiated directly.');
        }
    }

    /**
     * Register a new chess piece.
     * @param {string} name - The name of the piece.
     * @returns {boolean} - true if registered successfully.
     * @throws {Error} - If piece is already registered, or name is not a string, or name is empty.
     * @throws {Error} - If pieceClass is not a function, or pieceClass is not an instance of ChessPiece. 
     */
    static registerPiece(name, pieceClass) {
        if (typeof name !== 'string' || name.length === 0) {
            throw new Error('Invalid piece name');
        }

        if (typeof pieceClass !== 'function' || !(pieceClass.prototype instanceof ChessPiece)) {
            throw new Error('Invalid piece class');
        }

        if (ChessPiece.registeredPieces.has(name)) {
            throw new Error(`Piece '${name}' already registered.`);
        }

        ChessPiece.registeredPieces.add(name);
        return true;
    }

    /**
     * Check if a piece is valid.
     * @param {string} name - The name of the piece.
     * @returns {boolean} - true if piece is registered. false otherwise.
     */
    static isValidPiece(name) {
        return ChessPiece.registeredPieces.has(name);
    }

    /**
     * Calculate the possible moves for the piece.
     * @param {string} position - The current position of the piece. e.g. 'A1'
     * @param {Array<Array<number>>} directions - The possible move directions for the piece.
     * @param {number} stepLimit - The maximum number of steps the piece can take.
     * @returns {string} - The possible moves for the piece. e.g. 'A2, A3, A4'
    */
    static calculateMoves(position, directions, stepLimit = Infinity) {
        if (!position || !directions || directions.length === 0 || !stepLimit) {
            throw new Error('Invalid parameters');
        }

        if (!ChessBoard.isValidPosition(position)) {
            throw new Error('Invalid position');
        }

        const [row, col] = ChessBoard.getPositionCoordinates(position);
        const moves = [];

        for (const [dRow, dCol] of directions) {
            let newRow = row + dRow;
            let newCol = col + dCol;
            let step = 0;


            while (
                newRow >= 1 && newRow <= ChessBoard.ROWS &&
                newCol >= 1 && newCol <= ChessBoard.COLS &&
                step < stepLimit
            ) {
                moves.push(ChessBoard.getPosition(newRow, newCol));
                newRow += dRow;
                newCol += dCol;
                step++;
            }
        }

        return moves;
    }

    /**
     * Abstrat method to be implemented by the child class.
     * @param {string} position - The current position of the piece. e.g. 'A1'
     * @throws {Error} - If called by base class.
     */
    getPossibleMoves(position) {
        throw new Error('getPossibleMoves must be implemented by subclass');
    }
}