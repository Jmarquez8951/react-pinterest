import React from 'react';
import PropTypes from 'prop-types';

import authData from '../../helpers/data/authData';

import './PinForm.scss';

class PinForm extends React.Component {
  static propTypes = {
    boardId: PropTypes.string.isRequired,
    saveNewPin: PropTypes.func.isRequired,
    putPin: PropTypes.func.isRequired,
    pin: PropTypes.object.isRequired,
  }

  state = {
    pinTitle: '',
    pinImageUrl: '',
    isEditing: false,
  }

  componentDidMount() {
    const { pin } = this.props;
    if (pin.title) {
      this.setState({ pinTitle: pin.title, pinImageUrl: pin.imageUrl, isEditing: true });
    }
  }

  titeChange = (e) => {
    e.preventDefault();
    this.setState({ pinTitle: e.target.value });
  }

  imageUrlChange = (e) => {
    e.preventDefault();
    this.setState({ pinImageUrl: e.target.value });
  }

  savePin = (e) => {
    e.preventDefault();
    const { pinImageUrl, pinTitle } = this.state;
    const { boardId, saveNewPin } = this.props;
    const newPin = {
      boardId,
      imageUrl: pinImageUrl,
      title: pinTitle,
      uid: authData.getUid(),
    };
    saveNewPin(newPin);
  }

  updatePin = (e) => {
    e.preventDefault();
    const { pinImageUrl, pinTitle } = this.state;
    const { boardId, putPin, pin } = this.props;
    const updatedPin = {
      boardId,
      imageUrl: pinImageUrl,
      title: pinTitle,
      uid: authData.getUid(),
    };
    putPin(pin.id, updatedPin);
  }

  render() {
    const { pinImageUrl, pinTitle, isEditing } = this.state;

    return (
      <div className="PinForm">
      <form className="col-6 offset-3 border border-dark">
        <div className="form-group">
          <label htmlFor="pin-title">Title</label>
          <input
            type="text"
            className="form-control"
            id="pin-title"
            placeholder="pin title"
            value={pinTitle}
            onChange={this.titeChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="pin-imageUrl">Image Url</label>
          <input
            type="text"
            className="form-control"
            id="pin-imageUrl"
            placeholder="image Url goes here"
            value={pinImageUrl}
            onChange={this.imageUrlChange}/>
        </div>
        {
        isEditing
          ? <button className="btn btn-dark m-1" onClick={this.updatePin}>Update Pin</button>
          : <button className="btn btn-dark m-1" onClick={this.savePin}>Save Pin</button>
        }
      </form>
      </div>
    );
  }
}

export default PinForm;
