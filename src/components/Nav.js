import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Hidden from '@material-ui/core/Hidden';

export class Nav extends Component {
  constructor(props) {
    super(props);
    this.initPageX = '';
  }

  componentDidMount() {
    let buttons = document.getElementsByClassName('nav-li');
    for (let button of buttons) {
      button.addEventListener("touchstart", (e) => {
        this.initPageX = e.targetTouches[0].pageX;
      });

      button.addEventListener('touchend', (e) => {
        let switchDirection = '';
        if (e.changedTouches[0].pageX - this.initPageX > 0) {
            switchDirection = 'right'
        } else if (e.changedTouches[0].pageX - this.initPageX < 0) {
            switchDirection = 'left'
        }
        if (e.target.id === 'hot-li') {
          if (e.target.classList.contains('active') && switchDirection === 'right') {
            this.props.updatedListStatus();
            for (let b of buttons) {
              b.classList.add("active");
              e.target.classList.remove("active");
            }
          }
        } else {
          if (e.target.classList.contains('active') && switchDirection === 'left') {
            this.props.updatedListStatus();
            for (let b of buttons) {
              b.classList.add("active");
              e.target.classList.remove("active");
            }
          }
        }
      })
    }
  }

  render() {
    return (
      <div className="nav">
        <ul>
          <li className='nav-li' id='hot-li'>Hot &amp; New</li>
          <li className='nav-li active' id='full-li'>Full Menu</li>
          <Hidden smDown>
            <button
              className='nav-li'
              id="hot-li"
              onClick={this.props.updatedListStatus}
              disabled={!this.props.fullList}>
              Hot &amp; New
            </button>
            <button
              className='nav-li'
              id="full-li"
              onClick={this.props.updatedListStatus}
              disabled={this.props.fullList}>
              Full Menu
            </button>
          </Hidden>
        </ul>
      </div>
    )
  }
}

export default Nav

Nav.propTypes = {
  updatedListStatus: PropTypes.func.isRequired,
  fullList: PropTypes.bool.isRequired
}