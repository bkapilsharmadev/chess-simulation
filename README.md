# chess-simulation
This is a simple chess simulation console app made with Node.js

## Installation

Follow these steps to install and run the application:

1.  **Clone the Repository**:
    
    ```bash
    git clone https://github.com/bkapilsharmadev/chess-simulation.git
    cd chess-simulation
    ```
2.  **Install Dependencies**:
    
    ```bash
    npm install
    ```
    
3.  **Run the Application**:
    
	 ```bash
	 npm start
	 ```
    

----------

## Usage

1.  Start the application:
    
    ```bash
    npm start
    ```
2.  Follow the prompts in the terminal:
    
    -   Enter a chess piece and position in the format `<Piece>, <Position>` (e.g., `King, D5`).
    -   Type `exit` to quit the application.
3.  Example Interaction:
    
    ```bash
	Welcome to the Chess Moves Simulator!
    Enter the piece and position in the format '<Piece>, <Position>' (e.g., 'King, D5').
    Type 'exit' to quit the application.
    
    > King, D5
    Possible moves for King at D5: C4, C5, C6, D4, D6, E4, E5, E6
    
    > Pawn, G1
    Possible moves for Pawn at G1: G2
    
    > exit
    Exiting the application... Bye!
	```
    
----------

## Testing

To run the unit tests:

```bash
npm test
```
Jest is used for testing. All test files are located in the `test` directory.