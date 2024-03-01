import React, { useEffect, useState } from "react";
import "../App.css";
import Squares from "./Squares";
import { Patterns } from "../Pattern";

export default function GameBoard() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("O");
  const [result, setResult] = useState({ winner: "none", state: "none" });

  useEffect(() => {
    checkWin();
    checkIfTie();
    // Change the Player
    if (player === "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }
  }, [board]);

  useEffect(() => {
    if (result.state !== "none") {
      alert(`Game Finished!! The Winner Player: ${result.winner}`);
    }
  }, [result]);

  const chooseSquare = (square) => {
    setBoard(
      board.map((val, index) => {
        if (index === square && val === "") {
          return player;
        }
        return val;
      })
    );
  };

  const checkWin = () => {
    Patterns.forEach((currentPattern) => {
      const firstPlayer = board[currentPattern[0]];
      if (firstPlayer === "") return;
      let winningPattern = true;

      currentPattern.forEach((index) => {
        if (board[index] !== firstPlayer) {
          winningPattern = false;
        }
      });

      if (winningPattern) {
        setResult({ winner: player, state: "Won" });
      }
    });
  };

  const checkIfTie = () => {
    let filled = true;
    board.forEach((square) => {
      if (square === "") {
        filled = false;
      }
    });

    if (filled) {
      setResult({ winner: "Its Tied", state: "Tie" });
    }
  };

  const restartGame = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setPlayer("O");
  };
  return (
    <div className="board">
      <div className="gameBoard">
        <div className="row">
          <Squares
            value={board[0]}
            chooseSquare={() => {
              chooseSquare(0);
            }}
          />
          <Squares
            value={board[1]}
            chooseSquare={() => {
              chooseSquare(1);
            }}
          />
          <Squares
            value={board[2]}
            chooseSquare={() => {
              chooseSquare(2);
            }}
          />
        </div>
        <div className="row">
          <Squares
            value={board[3]}
            chooseSquare={() => {
              chooseSquare(3);
            }}
          />
          <Squares
            value={board[4]}
            chooseSquare={() => {
              chooseSquare(4);
            }}
          />
          <Squares
            value={board[5]}
            chooseSquare={() => {
              chooseSquare(5);
            }}
          />
        </div>
        <div className="row">
          <Squares
            value={board[6]}
            chooseSquare={() => {
              chooseSquare(6);
            }}
          />
          <Squares
            value={board[7]}
            chooseSquare={() => {
              chooseSquare(7);
            }}
          />
          <Squares
            value={board[8]}
            chooseSquare={() => {
              chooseSquare(8);
            }}
          />
        </div>
      </div>
      <div className="player">
        <h3>
          It`s <span className="playerChosen">{player}</span> Turn
        </h3>
      </div>
      <div className="buttonClick">
        <button className="restart" onClick={restartGame}>
          Restart The Game
        </button>
      </div>
    </div>
  );
}
