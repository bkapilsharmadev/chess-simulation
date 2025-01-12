export default class ChessPiece {
    static registeredPieces = new Set();

    /**
     * Register a new chess piece.
     * @param {string} name - The name of the piece.
     * @returns {boolean} - true if registered successfully.
     * @throws {Error} - If piece is already registered, or name is not a string, or name is empty.
     * @throws {Error} - If pieceClass is not a function, or pieceClass is not an instance of ChessPiece. 
     */
    static registerPiece(name, pieceClass) {
        if(typeof name !== 'string' || name.length === 0) {
            throw new Error('Invalid piece name');
        }

        if(typeof pieceClass !== 'function' || !(pieceClass.prototype instanceof ChessPiece)) {
            throw new Error('Invalid piece class');
        }

        if(ChessPiece.registeredPieces.has(name)) {
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
}