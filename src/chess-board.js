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
        if (typeof position !== 'string' || position.length !== 2) {
            return false;
        }

        const col = position[0].toUpperCase();
        const row = parseInt(position[1]);

        const isValidColumn = col.charCodeAt(0) >= 65 && col.charCodeAt(0) <= 72;
        const isValidRow = row >= 1 && row <= 8;

        return isValidColumn && isValidRow;
    }

    /**
     * Get chessboard position for given row and column.
     * @param {number} row - The row number. 1 to 8.
     * @param {number} col - The column number. 1 to 8.
     * @returns {string} - The chessboard position. Eg. A1, H8.
     * @throws {Error} - If row or column is invalid.
     */
    static getPosition(row, col) {
        if (typeof row !== 'number' || typeof col !== 'number') {
            throw new Error('Invalid row or column');
        }

        if (row < 1 || row > 8 || col < 1 || col > 8) {
            throw new Error('Invalid row or column');
        }

        const colName = String.fromCharCode(64 + col);
        return `${colName}${row}`;
    }
}