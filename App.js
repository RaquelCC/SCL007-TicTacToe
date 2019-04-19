import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import Board from './components/Board';
import Square from './components/Square';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: Array(9).fill(null),
      xTurn: true,
      winner: null,
      winnerCombination: null,
    }

    this.fillBoard = this.fillBoard.bind(this);
    this.playMove = this.playMove.bind(this);
    this.resetBoard = this.resetBoard.bind(this);
    this.winCondition = this.winCondition.bind(this);
  }

  fillBoard() {
    const squares = this.state.rows.map((sq, i) => {
      if (this.state.winnerCombination && this.state.winnerCombination.indexOf(i) !== -1) {
        return (
          <Square
            content={sq}
            index={i}
            key={i}
            playMove={this.playMove}
            winCondition={this.winCondition}
            color="green"
          />
        )
      } else {
        return (
          <Square
            content={sq}
            index={i}
            key={i}
            playMove={this.playMove}
            winCondition={this.winCondition}
            color="black"
          />
        )
      }

    })
    return squares
  }

  playMove(i) {
    const newRows = this.state.rows;
    if (newRows[i] === null) {
      newRows[i] = this.state.xTurn ? "X" : "O";
      this.setState({
        ...this.state,
        rows: newRows,
        xTurn: !this.state.xTurn,
      }, this.winCondition)
    }
  }

  resetBoard() {
    this.setState({
      ...this.state,
      rows: Array(9).fill(null),
      xTurn: true,
      winner: null,
      winnerCombination: null,
    })
  }

  winCondition() {
    const winCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    winCombinations.forEach(combination => {
      if (this.state.rows[combination[0]] && this.state.rows[combination[0]] === this.state.rows[combination[1]] && this.state.rows[combination[1]] === this.state.rows[combination[2]]) {
        this.setState({
          ...this.state,
          winner: this.state.rows[combination[0]],
          winnerCombination: combination,
        })
        return
      }
    })
    if (this.state.rows.indexOf(null) === -1) {
      this.setState({
        ...this.state,
        winner: "Empate"
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.playerTurn}>Turno de: {this.state.xTurn ? "X" : "O"}</Text>
        <Board
          fillBoard={this.fillBoard}
        />
        <Button
          onPress={this.resetBoard}
          title="Reiniciar"
        />
        {this.state.winner &&
          <View style={styles.winnerContainer}>
            <Text style={styles.winnerText}>{this.state.winner === "X" || this.state.winner === "O" ? "Ganó: " + this.state.winner : this.state.winner}</Text>
            <TouchableOpacity
              style={styles.playAgainButton}
              onPress={this.resetBoard}
            >
            <Text style={styles.playAgainText}>Volver a Jugar</Text>
            </TouchableOpacity>
          </View>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  playerTurn: {
    fontSize: 30,
  },
  winnerContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: 'rgba(52, 52, 52, 0.7)',
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  winnerText: {
    color: "white",
    width: "100%",
    // backgroundColor: "rgba(249, 249, 249, 0.7)",
    borderBottomWidth: 1,
    // borderBottomStyle: "solid",
    borderBottomColor: "rgba(52, 52, 52, 0.7)",
    fontSize: 20,
    fontWeight: "700",
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: "center"
  },
  playAgainButton: {
    backgroundColor: 'rgba(52, 52, 52, 0.7)',
    width: "100%",
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "rgba(249, 249, 249, 0.7)",
  },
  playAgainText: {
    fontSize: 20,
    textAlign: "center"
  }
});
