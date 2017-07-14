// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import './app'
import JoinButton from './buttons/joinButton.jsx'
import CreateButton from './buttons/createButton.jsx'

export default class Home extends React.Component {
  constructor(props, _railsContext) {
    super(props);
    this.state={buttonToggled:''}
    // this.openToggle = this.openToggle.bind(this);
    this.buttonToggle = this.buttonToggle.bind(this);
  }
  buttonToggle(button) {
    this.setState({buttonToggled:button.target.id})
  }
  render() {
    let button = null
    let createClass = null
    let joinClass = null
    if (this.state.buttonToggled == "joinButton") {
      button = <JoinButton/>
      joinClass = 'active'
      createClass = ''
    } else if (this.state.buttonToggled == 'createButton') {
      button = <CreateButton/>
      joinClass = ''
      createClass = 'active'
    }
    return (
      <div className="container topMargin">

        <div className="row justify-content-center">
          <h3>
            Hello {this.props.name}!
          </h3>
        </div>

        <div className="row justify-content-center">
          <div className="btn-group">
            <button id="joinButton" type="button" className={"btn btn-secondary "+joinClass} role="button" aria-pressed="false" onClick={this.buttonToggle}>Join game</button>
            <button id="createButton" type="button" className={"btn btn-secondary "+createClass} role="button" aria-pressed="false" onClick={this.buttonToggle}>New game</button>
          </div>
        </div>
        
        <div id="buttonContent" className="row justify-content-center">
          {button}
        </div>
      </div>
    );
  }
}

Home.defaultProps = {
  name:"alex"
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home/>,
    document.getElementById('root')
  )
})

