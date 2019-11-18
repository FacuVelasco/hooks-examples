import React, { Component } from "react";

export class Modal extends Component {
  state = {
    isOpen: false
  };

  toggleModal = () => {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen
    }));
  };

  handleClose = () => {
    this.toggleModal();
    // some fail action
  };

  handleSuccess = () => {
    this.toggleModal();
    // some other success
  };

  render() {
    return (
      <div className="example">
        {this.state.isOpen && (
          <div className="modal-container" onClick={this.handleClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <h3>Crapy Modal</h3>
              <img
                src="https://i.redd.it/q3fw9j91o7v31.png"
                width="350px"
                alt="doom"
              ></img>
              <div>{this.props.message}</div>
              <button
                style={{ alignSelf: "flex-end" }}
                onClick={this.handleSuccess}
              >
                OK
              </button>
            </div>
          </div>
        )}
        <button onClick={this.toggleModal}>OPEN MODAL</button>
      </div>
    );
  }
}
