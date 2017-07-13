import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export default class JoinButton extends React.Component {
  constructor(props, _railsContext) {
    super(props);
  }
  render() {
    return (
      <div><h3>join</h3></div>
    );
  }
}

JoinButton.defaultProps = {
}

// document.addEventListener('DOMContentLoaded', () => {
//   ReactDOM.render(
//     <joinButton/>
    // document.getElementById('buttonContent')
//   )
// })

