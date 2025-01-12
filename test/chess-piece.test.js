import ChessPiece from '../src/chess-piece.js';

describe('ChessPiece', () => {

    beforeEach(() => {
        ChessPiece.registeredPieces = new Set();
    });


    test('should be defined', () => {
        expect(ChessPiece).toBeDefined();
    });

    test('should have a static property registeredPieces', () => {
        expect(ChessPiece.registeredPieces).toBeInstanceOf(Set);
    });

    describe('registerPiece()', () => {
        test('should be defined', () => {
            expect(ChessPiece.registerPiece).toBeDefined();
        });

        test('should register a new piece and return true', () => {
            expect(ChessPiece.registerPiece('Pawn', class extends ChessPiece { })).toBe(true);
            expect(ChessPiece.registerPiece('King', class extends ChessPiece { })).toBe(true);
            expect(ChessPiece.registerPiece('Queen', class extends ChessPiece { })).toBe(true);
        });

        test('should throw error if already registered', () => {
            expect(() => ChessPiece.registerPiece('Pawn')).toThrow();
        });

        test('should throw error if name is not a string', () => {
            expect(() => ChessPiece.registerPiece(123)).toThrow();
        });

        test('should throw error if name is empty', () => {
            expect(() => ChessPiece.registerPiece('')).toThrow();
        });

        test('should throw error if pieceClass is not a function', () => {
            expect(() => ChessPiece.registerPiece('Bishop', {})).toThrow();
        });

        test('should throw error if pieceClass is not an instance of ChessPiece', () => {
            expect(() => ChessPiece.registerPiece('Bishop', class { })).toThrow();
        });

        test('should throw error if pieceClass is not an instance of ChessPiece', () => {
            expect(() => ChessPiece.registerPiece('Dragon', null)).toThrow();
        });
    });

    describe('isValidPiece()', () => {
        test('should be defined', () => {
            expect(ChessPiece.isValidPiece).toBeDefined();
        });

        test('should return true if piece is registered', () => {
            ChessPiece.registerPiece('Pawn', class extends ChessPiece { });
            ChessPiece.registerPiece('King', class extends ChessPiece { });
            ChessPiece.registerPiece('Queen', class extends ChessPiece { });

            expect(ChessPiece.isValidPiece('Pawn')).toBe(true);
            expect(ChessPiece.isValidPiece('King')).toBe(true);
            expect(ChessPiece.isValidPiece('Queen')).toBe(true);
        });

        test('should return false if piece is not registered', () => {
            expect(ChessPiece.isValidPiece('Knight')).toBe(false);
            expect(ChessPiece.isValidPiece(null)).toBe(false);
            expect(ChessPiece.isValidPiece('')).toBe(false);
            expect(ChessPiece.isValidPiece(undefined)).toBe(false);
        });
    });

    describe('calculateMoves()', () => {

        test('should be defined', () => {
            expect(ChessPiece.calculateMoves).toBeDefined();
        });

        test('should calculate moves for a piece', () => {
            const moves = ChessPiece.calculateMoves('E4', [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]], Infinity);
            const expectedMoves = ['A4', 'B4', 'C4', 'D4', 'F4', 'G4', 'H4', 'E1', 'E2', 'E3', 'E5', 'E6', 'E7', 'E8', 'A8', 'B7', 'C6', 'D5', 'F3', 'G2', 'H1', 'B1', 'C2', 'D3', 'F5', 'G6', 'H7'];
            expect(moves.sort()).toEqual(expectedMoves.sort());
        });

        test('should calculate moves for a piece', () => {
            const moves = ChessPiece.calculateMoves('D4', [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]], 1);
            const expectedMoves = ['C3', 'C4', 'C5', 'D3', 'D5', 'E3', 'E4', 'E5'];
            expect(moves.sort()).toEqual(expectedMoves.sort());
        });

        test('should throw error if position is invalid', () => {
            expect(() => piece.calculateMoves(null, [[-1, -1]], Infinity)).toThrow();
        });

        test('should throw error if position is invalid', () => {
            expect(() => piece.calculateMoves(undefined, [[-1, -1]], Infinity)).toThrow();
        });

        test('should throw error if position is invalid', () => {
            expect(() => piece.calculateMoves('', [[-1, -1]], Infinity)).toThrow();
        });

        test('should throw error if directions is invalid', () => {
            expect(() => piece.calculateMoves('D4', null, Infinity)).toThrow();
        });
    });
});