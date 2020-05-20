import React from 'react';
import PropTypes from 'prop-types';

import './SingleBoard.scss';

class SingleBoard extends React.Component {
  static propTypes = {
    boardId: PropTypes.string.isRequired,
    setSingleBoard: PropTypes.func.isRequired,
  }

  render() {
    const { boardId, setSingleBoard } = this.props;

    return (
      <div className="SingleBoard">
        <button className="btn btn-danger" onClick={() => { setSingleBoard(''); }}>X</button>
        <h2>SingleBoard view</h2>
        <h4>{boardId}</h4>
      </div>
    );
  }
}

export default SingleBoard;
