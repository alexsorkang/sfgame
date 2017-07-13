// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import './app'
import joinButton from './buttons/joinButton'
import createButton from './buttons/createButton'

export default class Home extends React.Component {
  constructor(props, _railsContext) {
    super(props);
    // this.state={name:'alex'}
    // this.openToggle = this.openToggle.bind(this);
    this.buttonToggle = this.buttonToggle.bind(this);
  }
  buttonToggle(button) {
    this.setState({buttonToggled:button.target.id})
  }
  render() {
    return (
      <div className="container-fluid topMargin">

        <div className="row justify-content-center">
          <h3>
            Hello {this.props.name}!
          </h3>
        </div>

        <div className="row justify-content-center">
          <div className="btn-group">
            <button id="joinButton" type="button" className="btn btn-secondary" role="button" aria-pressed="false" onClick={this.buttonToggle}>Join</button>
            <button id="createButton" type="button" className="btn btn-secondary" role="button" aria-pressed="false" onClick={this.buttonToggle}>Create</button>
          </div>
        </div>
        <div id="buttonContent" className="row">
          
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
    <Home />,
    document.getElementById('root'),
  )
})

