import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './modal.scss';
import '../button/button.scss';

class Modal extends Component {
    handleClose = event => {
        if (event.target === event.currentTarget) {
            this.props.onClose();
        }
    };
    render() {
        const { header, closeButton, text, actions, onClose } = this.props;
        return (
            <div className="modal" onClick={this.handleClose}>
                <div className="modal__header">
                    <h1 className="modal__header-title">{header}</h1>
                    {closeButton && (
                        <button className="modal__header-close" onClick={onClose}>
                            &times;
                        </button>
                    )}
                </div>
                <div className="modal__main">
                    <p className="modal__main-content">{text}</p>
                </div>
                {actions}
            </div>
        );
    }
}

Modal.propTypes = {
    header: PropTypes.string.isRequired,
    closeButton: PropTypes.bool,
    text: PropTypes.string.isRequired,
    actions: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

Modal.defaultProps = {
    closeButton: false,
    actions: null,
};

export default Modal;
