import parseInput from "../src/input-parser.js";
import ChessPiece from "../src/chess-piece.js";
import Pawn from "../src/pieces/pawn.js";
import King from "../src/pieces/king.js";
import Queen from "../src/pieces/queen.js";


describe("inputParser fn", () => {

    test("should be defined", () => {
        expect(parseInput).toBeDefined();
    });

    test("should parse valid input: 'Pawn, G1'", () => {
        expect(parseInput("Pawn, G1")).toEqual({ piece: "Pawn", position: "G1" });
    });

    test("should throw an error for invalid input", () => {
        expect(() => parseInput("")).toThrow("Invalid input");
        expect(() => parseInput(null)).toThrow("Invalid input");
        expect(() => parseInput(undefined)).toThrow("Invalid input");
        expect(() => parseInput("Pawn G1")).toThrow("Invalid input format. Expected: <Piece>, <Position>.");
    });

    test("should throw an error for invalid piece: 'Dragon, G1'", () => {
        expect(() => parseInput("Dragon, G1")).toThrow("Invalid piece");
    });

    test("should parse input with extra spaces: ' King , D5 '", () => {
        expect(parseInput(" King , D5 ")).toEqual({ piece: "King", position: "D5" });
    });

    test("should handle lowercase input: 'king, g1'", () => {
        expect(parseInput("king, g1")).toEqual({ piece: "King", position: "G1" });
    });
});
