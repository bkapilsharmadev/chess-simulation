import ChessBoard from "../src/chess-board.js";

describe("ChessBoard", () => {

    test('should be defined', () => {
        expect(ChessBoard).toBeDefined();
    })

    describe('isValidPosition', () => {
        test('should return true for valid position', () => {
            expect(ChessBoard.isValidPosition('A1')).toBe(true);
            expect(ChessBoard.isValidPosition('a1')).toBe(true);
            expect(ChessBoard.isValidPosition('H2')).toBe(true);
        });

        test('should return false for invalid position', () => {
            expect(ChessBoard.isValidPosition('A10')).toBe(false);
            expect(ChessBoard.isValidPosition('K9')).toBe(false);
            expect(ChessBoard.isValidPosition('A0')).toBe(false);
            expect(ChessBoard.isValidPosition('A')).toBe(false);
            expect(ChessBoard.isValidPosition('AA1')).toBe(false);
            expect(ChessBoard.isValidPosition('5')).toBe(false);
            expect(ChessBoard.isValidPosition('')).toBe(false);
            expect(ChessBoard.isValidPosition(null)).toBe(false);
            expect(ChessBoard.isValidPosition(undefined)).toBe(false);
        });
    });
});