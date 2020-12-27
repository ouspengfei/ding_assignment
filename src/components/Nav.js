import React from 'react';

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

