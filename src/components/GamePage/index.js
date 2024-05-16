import {Component} from 'react'
import Rules from '../Rules'
import {
  GamePageContainer,
  NavbarContainer,
  NavbarHeading,
  ScoreContainer,
  ScoreHeading,
  Score,
  GameButtonContainer,
  GameImageButton,
  GameImage,
  GameResultContainer,
  ResultScorePara,
  YouOpponent,
  ResultImageContainer,
  PlayAgainButton,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class GamePage extends Component {
  state = {
    score: 0,
    isGameRunning: true,
    text: 'YOU WON',
  }
  verifyResult = (yourChoice, opponentChoice) => {
    if (yourChoice.id === 'ROCK') {
      switch (opponentChoice.id) {
        case 'PAPER':
          return 'YOU LOSE'
        case 'SCISSORS':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    } else if (yourChoice.id === 'PAPER') {
      switch (opponentChoice.id) {
        case 'ROCK':
          return 'YOU WON'
        case 'SCISSORS':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    } else {
      switch (opponentChoice.id) {
        case 'PAPER':
          return 'YOU WON'
        case 'ROCK':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    }
  }

  checkResult = id => {
    const {score} = this.state
    const opponentChoice =
      choicesList[Math.floor(Math.random() * choicesList.length)]
    const yourChoice = choicesList.filter(each => each.id === id)
    const result = this.verifyResult(yourChoice[0], opponentChoice)
    let newScore = score
    if (result === 'YOU WON') {
      newScore = score + 1
    } else if (result === 'YOU LOSE') {
      newScore = score - 1
    } else {
      newScore = score
    }
    this.setState({
      isGameRunning: false,
      score: newScore,
      text: result,
      newArray: [yourChoice[0], opponentChoice],
    })
  }
  renderGameStarted = () => {
    return (
      <GameButtonContainer>
        <GameImageButton
          type="button"
          data-testid="rockButton"
          onClick={() => this.checkResult(choicesList[0].id)}
        >
          <GameImage src={choicesList[0].imageUrl} alt={choicesList[0].id} />
        </GameImageButton>
        <GameImageButton
          type="button"
          data-testid="scissorsButton"
          onClick={() => this.checkResult(choicesList[1].id)}
        >
          <GameImage src={choicesList[1].imageUrl} alt={choicesList[1].id} />
        </GameImageButton>
        <GameImageButton
          type="button"
          data-testid="paperButton"
          onClick={() => this.checkResult(choicesList[2].id)}
        >
          <GameImage src={choicesList[2].imageUrl} alt={choicesList[2].id} />
        </GameImageButton>
      </GameButtonContainer>
    )
  }

  restartGame = () => {
    this.setState({isGameRunning: true})
  }

  renderGameResult = () => {
    const {newArray, text} = this.state

    return (
      <GameResultContainer>
        <YouOpponent>
          <ResultImageContainer>
            <ResultScorePara>You</ResultScorePara>
            <GameImage src={newArray[0].imageUrl} alt="your choice" />
          </ResultImageContainer>
          <ResultImageContainer>
            <ResultScorePara>Opponent</ResultScorePara>
            <GameImage src={newArray[1].imageUrl} alt="opponent choice" />
          </ResultImageContainer>
        </YouOpponent>
        <ResultScorePara>{text}</ResultScorePara>
        <div>
          <PlayAgainButton type="button" onClick={this.restartGame}>
            PLAY AGAIN
          </PlayAgainButton>
        </div>
      </GameResultContainer>
    )
  }

  render() {
    const {score, isGameRunning} = this.state
    return (
      <GamePageContainer>
        <NavbarContainer>
          <div>
            <NavbarHeading>
              ROCK
              <br />
              PAPER
              <br />
              SCISSORS
            </NavbarHeading>
          </div>
          <ScoreContainer>
            <ScoreHeading>Score</ScoreHeading>
            <Score>{score}</Score>
          </ScoreContainer>
        </NavbarContainer>
        {isGameRunning ? this.renderGameStarted() : this.renderGameResult()}
        <Rules />
      </GamePageContainer>
    )
  }
}

export default GamePage
