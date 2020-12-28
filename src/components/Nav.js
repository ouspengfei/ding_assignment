import React from 'react';
import PropTypes from 'prop-types';

export default function Nav(props) {
  return (
    <div className="nav">
      <button
        className='btn'
        id="hot-btn"
        onClick={props.updatedListStatus}
        disabled={!props.fullList}>
        Hot &amp; New
      </button>
      <button
        className='btn'
        id="full-btn"
        onClick={props.updatedListStatus}
        disabled={props.fullList}>
        Full Menu
      </button>
    </div>
  )
}

Nav.propTypes = {
  updatedListStatus: PropTypes.func.isRequired,
  fullList: PropTypes.bool.isRequired
}

