// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    number: 0,
  }

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onClickGenerate = () => {
    const randomNumber = this.getRandomNumber()
    this.setState({number: randomNumber})
  }

  render() {
    const {number} = this.state

    return (
      <div className="app-container">
        <div className="main-container">
          <h1 className="heading">Random Number</h1>
          <p className="content">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="button"
            type="button"
            onClick={this.onClickGenerate}
          >
            Generate
          </button>
          <p className="number">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
