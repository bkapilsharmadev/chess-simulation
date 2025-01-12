export default class ChessBoard {
    constructor() {
        this.rows = 8;
        this.columns = 8;
    }

    /** 
     * Check if position is within the bounds A1 to H8.
     * @param {string} position - The chessboard position to check(eg. A1, H8).
     * @returns {boolean} - true for valid, false for invalid.
    */
    static isValidPosition(position) {
        if(typeof position !== 'string' || position.length !== 2) {
            return false;
        }

        const col = position[0].toUpperCase();
        const row = parseInt(position[1]);
        
        const isValidColumn = col.charCodeAt(0) >= 65 && col.charCodeAt(0) <= 72;
        const isValidRow = row >= 1 && row <= 8;

        return isValidColumn && isValidRow;
    }
}