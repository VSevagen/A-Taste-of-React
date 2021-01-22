import React, { Component } from "react";
import Cell from "./Cell";
import "./Board.css";

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {
  static defaultProps = {
    nrows: 5,
    ncols: 5,
    chanceLightStartsOn: 0.25,
  };

  constructor(props) {
    super(props);
    this.state = {
      hasWon: false,
      board: this.createBoard(),
    };

    this.flipCellsAround = this.flipCellsAround.bind(this);

    // TODO: set initial state
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

  createBoard() {
    let board = [];
    // TODO: create array-of-arrays of true/false values
    for (let x = 0; x < this.props.ncols; x++) {
      let rows = [];
      for (let y = 0; y < this.props.nrows; y++) {
        rows.push(Math.random() < this.props.chanceLightStartsOn);
      }

      board.push(rows);
    }
    return board;
  }

  /** handle changing a cell: update board & determine if winner */

  flipCellsAround(coord) {
    console.log("Flipping");
    let { ncols, nrows } = this.props;
    let board = this.state.board;
    let [x, y] = coord.split("-").map(Number);
    console.group(x, y);

    function flipCell(x, y) {
      // if this coord is actually on board, flip it

      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[x][y] = !board[x][y];
      }
    }

    flipCell(x, y);
    flipCell(x - 1, y);
    flipCell(x, y - 1);
    flipCell(x + 1, y);
    flipCell(x, y + 1);

    let hasWon = board.every((row) => row.every((cell) => !cell));

    // TODO: flip this cell and the cells around it

    // win when every cell is turned off
    // TODO: determine is the game has been won

    this.setState({ board: board, hasWon: hasWon });
  }

  /** Render game board or winning message. */

  render() {
    if (this.state.hasWon) {
      return <h1>You won !</h1>;
    }
    let tblboard = [];
    for (let x = 0; x < this.props.ncols; x++) {
      let rows = [];
      for (let y = 0; y < this.props.nrows; y++) {
        let coord = `${x}-${y}`;
        rows.push(
          <Cell
            key={coord}
            isLit={this.state.board[x][y]}
            flipCellsAroundMe={() => this.flipCellsAround(coord)}
          />
        );
      }
      tblboard.push(<tr key={x}>{rows}</tr>);
    }

    return (
      <table className="Board">
        <tbody>
          <tr>{tblboard}</tr>
        </tbody>
      </table>
    );
    // if the game is won, just show a winning msg & render nothing else
    // TODO
    // make table board
    // TODO
  }
}

export default Board;
