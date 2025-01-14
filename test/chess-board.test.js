import ChessBoard from "../src/chess-board.js";

describe("ChessBoard", () => {

    test('should be defined', () => {
        expect(ChessBoard).toBeDefined();
    })

    describe('isValidPosition()', () => {
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
            expect(ChessBoard.isValidPosition()).toBe(false);
        });
    });

    describe('getPosition()', () => {
        test('should return chessboard position for valid row and column', () => {
            expect(ChessBoard.getPosition(1, 1)).toBe('A1');
            expect(ChessBoard.getPosition(8, 8)).toBe('H8');
            expect(ChessBoard.getPosition(1, 8)).toBe('H1');
        });

        test('should throw error for invalid row and column', () => {
            expect(() => ChessBoard.getPosition(0, 1)).toThrow();
            expect(() => ChessBoard.getPosition(9, 1)).toThrow();
            expect(() => ChessBoard.getPosition(1, 0)).toThrow();
            expect(() => ChessBoard.getPosition('A', 1)).toThrow();
            expect(() => ChessBoard.getPosition(1, 'A')).toThrow();
            expect(() => ChessBoard.getPosition(null, null)).toThrow();
            expect(() => ChessBoard.getPosition(undefined, undefined)).toThrow();
            expect(() => ChessBoard.getPosition()).toThrow();
        });
    });

    describe('getPositionCoordinates()', () => {
        test('should return row and column for valid position', () => {
            expect(ChessBoard.getPositionCoordinates('A1')).toEqual([1, 1]);
            expect(ChessBoard.getPositionCoordinates('H8')).toEqual([8, 8]);
            expect(ChessBoard.getPositionCoordinates('H1')).toEqual([1, 8]);
        });

        test('should throw error for invalid position', () => {
            expect(() => ChessBoard.getPositionCoordinates('A10')).toThrow();
            expect(() => ChessBoard.getPositionCoordinates('K9')).toThrow();
            expect(() => ChessBoard.getPositionCoordinates('A0')).toThrow();
            expect(() => ChessBoard.getPositionCoordinates('A')).toThrow();
            expect(() => ChessBoard.getPositionCoordinates('AA1')).toThrow();
            expect(() => ChessBoard.getPositionCoordinates('5')).toThrow();
            expect(() => ChessBoard.getPositionCoordinates(null)).toThrow();
            expect(() => ChessBoard.getPositionCoordinates(undefined)).toThrow();
            expect(() => ChessBoard.getPositionCoordinates()).toThrow();
        });
    });
});