import Pawn from "../../src/pieces/pawn.js";
import ChessPiece from "../../src/chess-piece.js";


describe("Pawn", () => {
    let pawn;

    beforeEach(() => {
        pawn = new Pawn();    
    });


    test("should be a valid chess piece and registered", () => {
        expect(Pawn).toBeDefined();
        expect(ChessPiece.isValidPiece("Pawn")).toBe(true);
    });

    describe("getPossibleMoves", () => {

        
        test("should return the next position for a pawn", () => {
            expect(pawn.getPossibleMoves("G1")).toEqual("G2");
        });

        test("should return an empty string in boundary condition", () => {
            expect(pawn.getPossibleMoves("G8")).toEqual("");
        });

        test("should be case-insensitive", () => {
            expect(pawn.getPossibleMoves("g1")).toEqual("G2");
        });

        test("should throw an error for invalid positions", () => {
            expect(() => pawn.getPossibleMoves("K9")).toThrow("Invalid position");
            expect(() => pawn.getPossibleMoves(null)).toThrow("Invalid position");
            expect(() => pawn.getPossibleMoves(undefined)).toThrow("Invalid position");
            expect(() => pawn.getPossibleMoves()).toThrow("Invalid position");
            expect(() => pawn.getPossibleMoves("")).toThrow("Invalid position");
        });
    });
});
