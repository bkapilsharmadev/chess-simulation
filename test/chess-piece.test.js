import ChessPiece from '../src/chess-piece.js';

describe('ChessPiece', () => {

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
        const piece = new ChessPiece();
        
        test('should be defined', () => {
            expect(piece.calculateMoves).toBeDefined();
        });

        test('should calculate moves for a piece', () => {
            const moves = piece.calculateMoves('D4', [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]], Infinity)
            expect(moves).toEqual("A4, B4, C4, E4, F4, G4, H4, D1, D2, D3, D5, D6, D7, D8, A1, B2, C3, E5, F6, G7, H8, A7, B6, C5, E3, F2, G1");
        });

        test('should calculate moves for a piece', () => {
            const moves = piece.calculateMoves('D4', [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]], 1)
            expect(moves).toEqual("C3, C4, C5, D3, D5, E3, E4, E5");
        });

        test('should throw error if position is invalid', () => {
            expect(() => piece.calculateMoves(null, [[-1, -1]], Infinity)).toThrow('Invalid position');
        });

        test('should throw error if position is invalid', () => {
            expect(() => piece.calculateMoves(undefined, [[-1, -1]], Infinity)).toThrow('Invalid position');
        });

        test('should throw error if position is invalid', () => {
            expect(() => piece.calculateMoves('', [[-1, -1]], Infinity)).toThrow('Invalid position');
        });
    });




});