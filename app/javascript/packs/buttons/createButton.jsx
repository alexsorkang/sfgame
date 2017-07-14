// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export default class CreateButton extends React.Component {
  constructor(props, _railsContext) {
    super(props);
  }
  render() {
    return (
      <div>
        <hr/>
        <div className="row">
          <div className="form-group">
            <input type="text" className="form-control" id="playerName" placeholder="Enter Name"/>
          </div>
        </div>
        <hr/>
      </div>

    );
  }
}

CreateButton.defaultProps = {
}

// document.addEventListener('DOMContentLoaded', () => {
//   ReactDOM.render(
//     <createButton/>
//     // document.getElementById('buttonContent')
//   )
// })

