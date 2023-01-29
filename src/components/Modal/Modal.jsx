import { Component } from 'react';
import { Overlay, ModalWrap } from './Modal.styled';
import PropTypes from 'prop-types';

export class Modal extends Component {
  handleKeydown = evt => {
    if (evt.code === 'Escape') {
      this.props.onToggle();
    }
  };
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleBackdropClick = evt => {
    if (evt.currentTarget === evt.target) {
      this.props.onToggle();
    }
  };

  render() {
    return (
      <Overlay onClick={this.handleBackdropClick}>
        <ModalWrap>{this.props.children}</ModalWrap>
      </Overlay>
    );
  }
}

Modal.propTypes = {
  onToggle: PropTypes.func.isRequired,
};
