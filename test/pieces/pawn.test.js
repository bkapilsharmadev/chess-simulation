import Pawn from "../../src/pieces/pawn.js";

describe("Pawn", () => {
    test("should be a valid chess piece and registered", () => {
        expect(Pawn).toBeDefined();
    });

    describe("getPossibleMoves", () => {
        test("should return the next position for a pawn", () => {
            expect(Pawn.getPossibleMoves("G1")).toEqual("G2");
        });

        test("should return an empty string in boundary condition", () => {
            expect(Pawn.getPossibleMoves("G8")).toEqual("");
        });

        test("should be case-insensitive", () => {
            expect(Pawn.getPossibleMoves("g1")).toEqual("G2");
        });

        test("should throw an error for invalid positions", () => {
            expect(() => Pawn.getPossibleMoves("K9")).toThrow("Invalid position");
            expect(() => Pawn.getPossibleMoves(null)).toThrow("Invalid position");
            expect(() => Pawn.getPossibleMoves(undefined)).toThrow("Invalid position");
            expect(() => Pawn.getPossibleMoves()).toThrow("Invalid position");
            expect(() => Pawn.getPossibleMoves("")).toThrow("Invalid position");
        });
    });
});
