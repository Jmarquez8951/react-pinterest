import React from 'react';
import PropTypes from 'prop-types';

import Pin from '../Pin/Pin';

import boardsData from '../../helpers/data/boardsData';
import pinsData from '../../helpers/data/pinsData';

import './SingleBoard.scss';

class SingleBoard extends React.Component {
  static propTypes = {
    boardId: PropTypes.string.isRequired,
    setSingleBoard: PropTypes.func.isRequired,
  }

  state = {
    board: {},
    pins: [],
  }

  componentDidMount() {
    const { boardId } = this.props;
    boardsData.getSingleBoard(boardId)
      .then((request) => {
        const board = request.data;
        this.setState({ board });
        pinsData.getPinsByBoardId(boardId)
          .then((pins) => this.setState({ pins }));
      })
      .catch((err) => console.error('unable to get single board', err));
  }

  render() {
    const { setSingleBoard } = this.props;
    const { board, pins } = this.state;

    const makePins = pins.map((p) => <Pin key={p.id} pin={p}/>);

    return (
      <div className="SingleBoard">
        <button className="btn btn-danger" onClick={() => { setSingleBoard(''); }}>X</button>
        <h2>{board.name} Board</h2>
        <h3>{board.description}</h3>
        <div className="d-flex flex-wrap">
          {makePins}
        </div>
      </div>
    );
  }
}

export default SingleBoard;
