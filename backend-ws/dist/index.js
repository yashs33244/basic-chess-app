"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const GameManeger_1 = require("./GameManeger");
const wss = new ws_1.WebSocketServer({ port: 8080 });
const gameManager = new GameManeger_1.GameManager();
wss.on('connection', function connection(ws) {
    gameManager.addUser(ws);
    ws.on('disconnect', () => {
        gameManager.removeUser(ws);
    });
});
