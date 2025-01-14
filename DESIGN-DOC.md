
Design Document
[Design Document: Google Doc](https://docs.google.com/document/d/1HNjKv309Jt81Cgkl9w6ny98x9ZtxrTGHAsgvvRu7tpo/edit?usp=sharing)
  

### Problem Overview:

We need to simulate chess piece movements on an 8x8 chessboard for the following pieces:

  

1.  Pawn - It can only move 1 step at a time, in the vertical forward direction.
    
2.  King - It can only move 1 step at a time, in all 8 directions (vertical, horizontal and diagonal)
    
3.  Queen - It can move across the board in all 8 directions  
      
      
    

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeXGWq-kvwJBmIKt1xD0HyIljkLilOfrX40ZYe76jnWLE0zPKmYCuUWEM1NamFPrDJ9x1zCnz0PChrzos1x2zZiB9PYP5p2AtqPAnG7lPlb2UXfuwz_BLuumB9hIqbe7sSNbPfjwQ?key=mEz0dF_kSCRXBM1vOWkCX61w)

  
  

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcb848Zidvz3Ucys7fb_fHRYC91Qw2ECMg35mGFRr7MObtlccrn1F5k6MzjPbwD-GkQCiiX78gBcBfY90W8UQhYFsvWjEXWaKnMfyP4kleuTBPcIGk6TscmXQ4cAAELy3NniUp66A?key=mEz0dF_kSCRXBM1vOWkCX61w)

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

### Requirements:

#### Functional:

1.  Accept input in the format: <Piece>, <Position>  
    E.g.: King, D5
    
2.  Validate the input:
    

-   Piece must be one of Pawn, King, or Queen.
    
-   Position must be valid chess notation (A1 to H8).
    

4.  Calculate all valid moves for the specified piece based on its movement rules.
    
5.  Output the moves as a comma-separated string.
    

Input - King, D5  
Output - C4, C5, C6, D4, D6, E4, E5, E6

#### Non-Functional:

1.  Modular Design:
    

-   Keep chessboard validation, piece-specific logic, and main program flow modular and separated.
    

3.  Reusability:
    

-   Make a common method/function for calculating possible moves (e.g., direction-based movement for King and Queen).
    

5.  Scalability:
    

-   Design the system to allow adding new chess pieces with minimal changes.
    

7.  Robust Error Handling:
    

-   Handle invalid inputs gracefully.
    

  
  
  
  
  
  
  
  
  
  

### High-Level Design:

#### 1. Modules

| **Module**         | **Responsibilities**                                                                           |
|---------------------|-----------------------------------------------------------------------------------------------|
| `chess-board.js`    | Validate chess positions and convert between row/column indices and chess notation.           |
| `chess-piece.js`    | Define the base class of all the pieces.                                                      |
| `pawn.js`           | Extend `ChessPiece` class.                                                                    |
| `king.js`           | Extend `ChessPiece` class.                                                                    |
| `queen.js`          | Extend `ChessPiece` class.                                                                    |
| `input-parser.js`   | Parse and validate input strings.                                                             |
| `index.js`          | Manage the program flow (input → processing → output).                                        |


----------

### Class and Function Design
---

### ChessBoard

| **Method**           | **Description**                                                                 |
|-----------------------|---------------------------------------------------------------------------------|
| `isValidPosition()`   | Checks if a position is within the bounds of the chessboard (A1 to H8).         |
| `getPosition()`       | Converts row/column indices to chess notation (e.g., 1,1 → A1).                |

---

### ChessPiece

| **Method**            | **Description**                                                                                   |
|------------------------|---------------------------------------------------------------------------------------------------|
| `registerPiece()`      | Static method to dynamically register chess pieces to avoid dependency on centralized hardcoded list. |
| `isValidPiece()`       | Static method to validate if a piece is one of `Pawn`, `King`, or `Queen`.                        |
| `calculateMoves()`     | Calculate possible moves based on directions and step limits.                                     |
| `getPossibleMoves()`   | Abstract method implemented by `Pawn`, `King`, and `Queen` for their movement rules.              |

---

### Derived Pieces | extends ChessPiece

| **Piece**  | **Description**                                  |
|------------|------------------------------------------------------|
| `Pawn`     | Moves 1 step forward vertically.                     |
| `King`     | Moves 1 step in any of 8 directions.                 |
| `Queen`    | Moves any number of steps in any of 8 directions.    |
  
  
  

### Flow Diagram:

  

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXf9QoBQYLI6y4tpUzidFtThJQOaLE-TJy2J5q79fy46T4nqa5VjCS0Z4lPEH1xf33_bG9ZQhHdjJfFInv5wvsKj3DsSrAhWtGAq84NtCfa4qnSreE2FC_nNkHo_tlb7NEpT1iGScQ?key=mEz0dF_kSCRXBM1vOWkCX61w)

  
  

### Implementation Details

#### Input Parsing

-   Accept input as `<Piece>, <Position>`.
    
-   Validate the piece using `ChessPiece.isValidPiece`.
    
-   Validate the position using `ChessBoard.isValidPosition`.
    

  
  

#### Movement Calculation

1.  **Pawn**:
    

-   Move 1 step forward (row + 1).
    
-   Cannot move beyond row 8.
    
-   Cannot move outside 8 columns, A-H.
    

3.  **King**:
    

-   Moves 1 step in any of the 8 possible directions: horizontally, vertically, or diagonally.
    
-   Cannot move beyond row 8 or below row 1.
    
-   Cannot move outside the 8 columns (A-H).
    
-   Use `calculateMoves` with `stepLimit` = 1.
    

  
  

3.  **Queen**:
    

-   Moves any number of steps in any of the 8 possible directions: horizontally, vertically, or diagonally.
    
-   Cannot move beyond row 8.
    
-   Cannot move beyond row 8 or below row 1.
    
-   Cannot move outside the 8 columns (A-H).
    
-   Use `calculateMoves` with `stepLimit` = 8.
    

#### Output

-   Print possible moves as a comma-separated string  
    Eg. C4, C5, C6, D4, D6, E4, E5, E6
    

----------

  

### Test Plan:

#### Unit Tests:

##### Module: chess-board.js

-   ###### isValidPosition
    

1.  ###### Test Case:  isValidPosition('H2')  
    Expected Result:  true  
      
    
2.  ###### Test Case: isValidPosition('A10')  
    Expected Result:  false  
      
    
3.  ###### Test Case: isValidPosition('K9')  
    Expected Result:  false  
      
    
4.  ###### Test Case: isValidPosition('A0')  
    Expected Result:  false  
      
    
5.  ###### Test Case: isValidPosition('A')  
    Expected Result:  false  
      
    
6.  ###### Test Case: isValidPosition('AA1')  
    Expected Result:  false  
      
    
7.  ###### Test Case: isValidPosition('5')  
    Expected Result:  false  
      
    
8.  ###### Test Case: isValidPosition('')  
    Expected Result:  false  
      
    
9.  ###### Test Case: isValidPosition(null)  
    Expected Result:  false  
      
    
10.  ###### Test Case: isValidPosition(undefined)  
    Expected Result:  false  
      
    

-   ###### getPosition
    

1.  ###### Test Case:  getPosition(1, 1)  
    Expected Result:  A1  
      
    
2.  ###### Test Case:  getPosition(8, 8)  
    Expected Result:  H8  
      
    
3.  ###### Test Case:  getPosition(1, 8)  
    Expected Result:  H1  
      
    
4.  ###### Test Case:  getPosition(0, 1)  
    Expected Result:  Error: Invalid position  
      
    
5.  ###### Test Case:  getPosition(9, 1)  
    Expected Result:  Error: Invalid position  
      
    
6.  ###### Test Case:  getPosition(1, 0)  
    Expected Result:  Error: Invalid position  
      
    
7.  ###### Test Case:  getPosition(1, 9)  
    Expected Result:  Error: Invalid position  
      
    
8.  ###### Test Case:  getPosition(‘A’, 1)  
    Expected Result:  Error: Invalid position  
      
    
9.  ###### Test Case:  getPosition(1, ‘A’)  
    Expected Result:  Error: Invalid position  
      
    
10.  ###### Test Case:  getPosition(null, null)  
    Expected Result:  Error: Invalid position  
      
    
11.  ###### Test Case:  getPosition(undefined, undefined)  
    Expected Result:  Error: Invalid position  
      
    
12.  ###### Test Case:  getPosition(‘’, ‘’)  
    Expected Result:  Error: Invalid position  
      
      
      
    

##### Module: chess-piece.js

-   ###### registerPiece
    

1.  ###### Test Case:  ChessPiece.registerPiece('Pawn', class extends ChessPiece {})  
    Expected Result:  Piece 'Pawn' is successfully registered.  
      
    
2.  ###### Test Case:  
    ChessPiece.registerPiece('Queen', class extends ChessPiece {});  
    ChessPiece.registerPiece('Queen', class extends ChessPiece {});  
    Expected Result:  Error: Piece 'Queen' is already registered.  
      
    
3.  ###### Test Case:  ChessPiece.registerPiece('Dragon', null);  
    Expected Result:  Error: Invalid piece class.  
      
    
4.  ###### Test Case:  Input: ChessPiece.registerPiece('', class extends ChessPiece {});  
    Expected Result:  Error: Invalid piece name  
      
    

  

-   ###### isValidPiece
    

5.  ###### Test Case:  
    ChessPiece.registerPiece('Pawn', class extends ChessPiece {});  
    ChessPiece.isValidPiece('Pawn');  
    Expected Result:  true  
      
    
6.  ###### Test Case:  ChessPiece.isValidPiece('Knight');  
    Expected Result:  false  
      
    
7.  ###### Test Case:  ChessPiece.isValidPiece(‘’);  
    Expected Result:  false  
      
    
8.  ###### Test Case:  ChessPiece.isValidPiece(null);  
    Expected Result:  false  
      
    
9.  ###### Test Case:  ChessPiece.isValidPiece(undefined);  
    Expected Result:  false
    

  

-   ###### calculateMoves
    

10.  ###### Test Case:  calculateMoves('D4', board, directions: [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]], stepLimit: Infinity)  
    Expected Result:  A4, B4, C4, E4, F4, G4, H4, D1, D2, D3, D5, D6, D7, D8, A1, B2, C3, E5, F6, G7, H8, A7, B6, C5, E3, F2, G1  
      
    
11.  ###### Test Case:  calculateMoves('D4', board, directions: [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]], stepLimit: 1)  
    Expected Result:  C3, C4, C5, D3, D5, E3, E4, E5  
      
    
12.  ###### Test Case:  calculateMoves(null, board, directions: [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]], stepLimit: Infinity)  
    Expected Result:  Error: Invalid position.  
      
    
13.  ###### Test Case:  calculateMoves(undefined, board, directions: [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]], stepLimit: Infinity)  
    Expected Result:  Error: Invalid position.  
      
    
14.  ###### Test Case:  calculateMoves(‘’, board, directions: [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]], stepLimit: Infinity)  
    Expected Result:  Error: Invalid position.
    

  

-   ###### pawn.getPossibleMoves
    

1.  ###### Test Case:  pawn.getPossibleMoves('G1')  
    Expected Result:  G2  
      
    
2.  ###### Test Case:  pawn.getPossibleMoves('G8')  
    Expected Result:  “”  
      
    
3.  ###### Test Case:  pawn.getPossibleMoves(null)  
    Expected Result:  Error: Invalid position.  
      
    
4.  ###### Test Case:  pawn.getPossibleMoves(undefined)  
    Expected Result:  Error: Invalid position.  
      
    
5.  ###### Test Case:  pawn.getPossibleMoves(‘’)  
    Expected Result:  Error: Invalid position.  
      
    
6.  ###### Test Case:  pawn.getPossibleMoves(‘K9’)  
    Expected Result:  Error: Out of bound.  
      
      
    

  
  
  
  
  

-   ###### king.getPossibleMoves  
      
    

1.  ###### Test Case: king.getPossibleMoves('D5')  
    Expected Result:  C4, C5, C6, D4, D6, E4, E5, E6  
      
    
2.  ###### Test Case: king.getPossibleMoves('A1')  
    Expected Result:  A2, B1, B2  
      
    
3.  ###### Test Case: king.getPossibleMoves('B1')  
    Expected Result:  A1, C1, A2, B2, C2  
      
    
4.  ###### Test Case: king.getPossibleMoves(null)  
    Expected Result:  Error: Invalid position.  
      
      
    
5.  ###### Test Case: king.getPossibleMoves(undefined)  
    Expected Result:Error: Invalid position.  
      
    
6.  ###### Test Case: king.getPossibleMoves(‘’)  
    Expected Result:  A1, C1, A2, B2, C2  
      
    
7.  ###### Test Case: king.getPossibleMoves(‘K9’)  
    Expected Result:  Error: Out of bound.  
      
      
    

-   ###### queen.getPossibleMoves  
      
    

1.  ###### Test Case:  queen.getPossibleMoves('E4')  
    Expected Result:  A4, B4, C4, D4, F4, G4, H4, E1, E2, E3, E5, E6, E7, E8, A8, B7, C6, D5, F3, G2, H1, B1, C2, D3, F5, G6, H7  
      
    
2.  ###### Test Case:  queen.getPossibleMoves('A1')  
    Expected Result:  A2, A3, A4, A5, A6, A7, A8, B1, C1, D1, E1, F1, G1, H1, B2, C3, D4, E5, F6, G7, H8  
      
      
    
3.  ###### Test Case: queen.getPossibleMoves(null)  
    Expected Result:  Error: Invalid position.  
      
    
4.  ###### Test Case: queen.getPossibleMoves(undefined)  
    Expected Result:  Error: Invalid position.  
      
    
5.  ###### Test Case: queen.getPossibleMoves(‘’)  
    Expected Result:  Error: Invalid position.  
      
    
6.  ###### Test Case: queen.getPossibleMoves(‘K9’)  
    Expected Result:  Error: Out of bound.
    

####   
  

#### Integration Tests:

  

##### Module: input-parser.js

1.  ###### Test Case Input:  parseInput("Pawn, G1")  
    Expected Result:  { piece: 'Pawn', position: 'G1' }  
      
    
2.  ###### Test Case Input:  parseInput("")  
    Expected Result:  Error: Invalid input  
      
    
3.  ###### Test Case Input:  parseInput(null)  
    Expected Result:  Error: Invalid input  
      
    
4.  ###### Test Case Input:  parseInput(undefined)  
    Expected Result:  Error: Invalid input  
      
    
5.  ###### Test Case Input:  parseInput("Pawn G1")  
    Expected Result:  Error: Invalid input format. Expected: <Piece>, <Position>.  
      
    
6.  ###### Test Case Input:  parseInput("Dragon, G1")  
    Expected Result:  Error: Invalid piece: 'Dragon'.
    
7.  ###### Test Case Input:  parseInput(" King , D5 ")  
    Expected Result:  { piece: 'King', position: 'D5' }  
      
    
8.  ###### Test Case Input:  parseInput("king, g1")  
    Expected Result:  { piece: 'King', position: 'D5' }
    

  

##### Module: index.js

9.  ###### Test Case Input:  "Pawn, G1"  
    Expected Result:  G2  
      
    
10.  ###### Test Case Input:  "Pawn, G8"  
    Expected Result:  ””  
      
    
11.  ###### Test Case Input:  "Pawn, A9"  
    Expected Result:  Error: Invalid position  
      
    
12.  ###### Test Case Input: "King, D5"  
    Expected Result:  C4, C5, C6, D4, D6, E4, E5, E6  
      
      
    
13.  ###### Test Case Input: "King, C3"  
    Expected Result:  B3, B4, C4, D4, D3  
      
      
    
14.  ###### Test Case Input:  "Queen, E4"  
    Expected Result:  A4, B4, C4, D4, F4, G4, H4, E1, E2, E3, E5, E6, E7, E8, A8, B7, C6, D5, F3, G2, H1, B1, C2, D3, F5, G6, H7  
      
    
15.  ###### Test Case Input:  "Queen, A1"  
    Expected Result:  A2, A3, A4, A5, A6, A7, A8, B1, C1, D1, E1, F1, G1, H1, B2, C3, D4, E5, F6, G7, H8  
      
    
16.  ###### Test Case Input:  "Knight, A1"  
    Expected Result:  Error: Invalid Piece  
      
    
17.  ###### Test Case Input:  "’’, G1"  
    Expected Result:  Error: Invalid piece  
      
    
18.  ###### Test Case Input:  "undefined, G1"  
    Expected Result:  Error: Invalid piece  
      
    
19.  ###### Test Case Input:  "null, G1"  
    Expected Result:  Error: Invalid piece