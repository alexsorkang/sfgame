// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import './app'

export default class Home extends React.Component {
  constructor(props, _railsContext) {
    super(props);
    // this.state={name:'alex'}
    // this.openToggle = this.openToggle.bind(this);
  }

  render() {
    return (
      <div className="container">Hello {this.props.name}!</div>
    );
  }
}

Home.defaultProps = {
  name:"alex"
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    // <Hello name="React" />,
    <Home />,
    document.getElementById('root'),
  )
})

