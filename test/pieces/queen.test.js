import Queen from "../../src/pieces/queen.js";
import ChessPiece from "../../src/chess-piece.js";

describe("Queen", () => {

    let queen;

    beforeEach(() => {
        queen = new Queen();
    });

    test("should be a valid chess piece and registered", () => {
        expect(Queen).toBeDefined();
        expect(ChessPiece.isValidPiece("Queen")).toBe(true);
    });

    describe("getPossibleMoves", () => {
        test("should return all valid moves for a Queen", () => {
            expect(queen.getPossibleMoves("E4")).toEqual("A4, B4, C4, D4, F4, G4, H4, E1, E2, E3, E5, E6, E7, E8, A8, B7, C6, D5, F3, G2, H1, B1, C2, D3, F5, G6, H7");
        });

        test("should throw an error for invalid positions", () => {
            expect(() => queen.getPossibleMoves("K9")).toThrow("Invalid position");
            expect(() => queen.getPossibleMoves(null)).toThrow("Invalid position");
            expect(() => queen.getPossibleMoves(undefined)).toThrow("Invalid position");
            expect(() => queen.getPossibleMoves()).toThrow("Invalid position");
            expect(() => queen.getPossibleMoves("")).toThrow("Invalid position");
        });
    });
});
