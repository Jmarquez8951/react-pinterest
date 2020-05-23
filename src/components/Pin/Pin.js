import React from 'react';
import PropTypes from 'prop-types';

import pinShape from '../../helpers/propz/pinShape';

import './Pin.scss';

class Pin extends React.Component {
  static propTypes = {
    pin: pinShape.pinShape,
    removePin: PropTypes.func.isRequired,
  }

  deletePinEvent = (e) => {
    e.preventDefault();
    const { pin, removePin } = this.props;
    removePin(pin.id);
  };

  render() {
    const { pin } = this.props;

    return (
      <div className="Pin col-3">
        <div className="card">
          <img src={pin.imageUrl} className="card-img-top" alt="pin"/>
          <div className="card-body">
            <h5 className="card-title">{pin.title}</h5>
            <button className="btn btn-danger" onClick={this.deletePinEvent}><i className="fas fa-trash"></i></button>
          </div>
        </div>
      </div>
    );
  }
}

export default Pin;
