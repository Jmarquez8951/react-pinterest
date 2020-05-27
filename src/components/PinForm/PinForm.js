import React from 'react';
import PropTypes from 'prop-types';

import authData from '../../helpers/data/authData';

import './PinForm.scss';

class PinForm extends React.Component {
  static propTypes = {
    boardId: PropTypes.string.isRequired,
    saveNewPin: PropTypes.func.isRequired,
  }

  state = {
    pinTitle: '',
    pinImageUrl: '',
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

  render() {
    const { pinImageUrl, pinTitle } = this.state;

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
        <button className="btn btn-dark m-1" onClick={this.savePin}>Save Pin</button>
      </form>
      </div>
    );
  }
}

export default PinForm;
