import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export default class JoinButton extends React.Component {
  constructor(props, _railsContext) {
    super(props);
  }
  render() { 
    // console.log(this.props)
    var $ = require ('jquery')
    var csrfToken = $('meta[name=csrf-token]').attr('content');
    return (
      <div>
        <hr/>
        <form action="/games" method="post">
          <input type='hidden' name='authenticity_token' value={csrfToken} />

          <div className="row">
            <div className="form-group">
              <input type="text" name="name" className="form-control" id="playerName" placeholder="Enter Name"/>
            </div>
          </div>
          <div className="row">
            <div className="form-group">
              <input type="text" name="url" className="form-control" id="gameUrl" placeholder="Enter URL"/>
            </div>
          </div>
          <div className='row justify-content-center'>
            <button type="submit" className="btn btn-secondary">Submit</button>
          </div>
        </form>
        <hr/>
      </div>

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

// <label htmlFor="playerName">name</label>

