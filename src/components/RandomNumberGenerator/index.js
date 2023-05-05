// Write your code here

import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onRandomNumberGenerator = () => {
    const mathNumber = Math.random() * 100
    const randomNumber = Math.ceil(mathNumber)

    return this.setState({
      count: randomNumber,
    })
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="random-container">
          <h1 className="heading">Random Number</h1>
          <p className="paragraph">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="button"
            type="button"
            onClick={this.onRandomNumberGenerator}
          >
            Generate
          </button>
          <p className="random-paragraph">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
