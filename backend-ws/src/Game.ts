import WebSocket from "ws"
import { Chess } from "chess.js";
import { GAME_OVER, INIT_GAME, MOVE } from "./messages";


export class Game{
    public player1: WebSocket;
    public player2: WebSocket;
    public board: Chess;
    private startTime: Date;
    private moveCount: number;

    constructor(player1: WebSocket, player2: WebSocket){
        this.player1 = player1;
        this.player2 = player2;
        this.board = new Chess();
        this.startTime = new Date();
        // when the game has started we should let the users know that the game has started
        this.player1.send(JSON.stringify({
            type: INIT_GAME,
            payload: {
                color: "white"
            }
        }));
        this.player2.send(JSON.stringify({
            type: INIT_GAME,
            payload: {
                color: "black"
            }
        }));
        this.moveCount = 0;
    }

    makemove(socket: WebSocket, move: ({
        from: string,
        to: string
    })){
        // validate the type of move
        // make validation here
        // is it user's turn
        // is the move valid    
        
        if(this.moveCount % 2 === 0 && socket !== this.player1){
            return;
        }
        if(this.moveCount % 2 === 1 && socket !== this.player2){ 
            return;
        }

        try {
            this.board.move(move);
        } catch (error) {
            console.log(error); 
            return;
        }


        if(this.board.isGameOver()){
            // send the game over message
            this.player1.send(JSON.stringify({
                type: GAME_OVER,
                payload :{
                    winner: this.board.turn() === "w" ? "black" : "white",
                }
            }));
            this.player2.send(JSON.stringify({
                type: GAME_OVER,
                payload :{
                    winner: this.board.turn() === "w" ? "black" : "white",
                }
            }));
            return; 
        }

        if(this.moveCount % 2 === 0){
            this.player2.send(JSON.stringify({
                type: MOVE,
                payload: move
            }));

        }else{
            this.player1.send(JSON.stringify({
                type: MOVE,
                payload: move
        }));
        }
        this.moveCount++;
        // check if the game is over

        // send the updated board to both players
    }
}