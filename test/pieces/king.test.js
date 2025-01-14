import King from "../../src/pieces/king.js";
import ChessPiece from "../../src/chess-piece.js";

describe("King", () => {

    let king;

    beforeEach(() => {
        king = new King();
    });

    test("should be a valid chess piece and registered", () => {
        expect(king).toBeDefined();
        expect(ChessPiece.isValidPiece("King")).toBe(true);
    });

    describe("getPossibleMoves", () => {
        test("should return all valid moves for a King", () => {
            expect(king.getPossibleMoves("D5")).toEqual("C4, C5, C6, D4, D6, E4, E5, E6");
            expect(king.getPossibleMoves("A1")).toEqual("A2, B1, B2");
            expect(king.getPossibleMoves("B1")).toEqual("A1, A2, B2, C1, C2");
        });

        test("should throw an error for invalid positions", () => {
            expect(() => king.getPossibleMoves("K9")).toThrow("Invalid position");
            expect(() => king.getPossibleMoves(null)).toThrow("Invalid position");
            expect(() => king.getPossibleMoves(undefined)).toThrow("Invalid position");
            expect(() => king.getPossibleMoves()).toThrow("Invalid position");
            expect(() => king.getPossibleMoves("")).toThrow("Invalid position");
        });
    });
});
