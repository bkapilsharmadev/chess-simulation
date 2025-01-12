import ChessPiece from '../src/chess-piece.js';

describe('ChessPiece', () => {

    test('should be defined', () => {
        expect(ChessPiece).toBeDefined();
    });

    test('should have a static property registeredPieces', () => {
        expect(ChessPiece.registeredPieces).toBeInstanceOf(Set);
    });

    describe('registerPiece()', () => {
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
    });



});