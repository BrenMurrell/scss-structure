import React from 'react'
import { connect } from 'react-redux'

import { fetchFruits } from '../actions'

export class App extends React.Component {
  state = {
    fruits: []
  }

  componentDidMount () {
    this.props.dispatch(fetchFruits())
  }

  render () {
    return (
      <div className='app'>
        <h1>Fullstack Boilerplate - with Fruits!</h1>
        <ul>
          {this.props.fruits.map(fruit => (
            <li key={fruit}>{fruit}</li>
          ))}
        </ul>
        <div className="cards">
          <div className="card">
            <button class='btn'>Example button</button>
            <button class='btn btn--warn'>Example button</button>
            <button class='btn btn--success'>Example button</button>
          </div>
          <div className="card">
            <button class='btn'>Example button</button>
            <button class='btn btn--warn'>Example button</button>
            <button class='btn btn--success'>Example button</button>
          </div>
          <div className="card">
            <button class='btn'>Example button</button>
            <button class='btn btn--warn'>Example button</button>
            <button class='btn btn--success'>Example button</button>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (globalState) {
  return {
    fruits: globalState.fruits
  }
}

export default connect(mapStateToProps)(App)
