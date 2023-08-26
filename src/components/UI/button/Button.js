import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './button.scss';

class Button extends Component {
    render() {
        const { text, onClick, className } = this.props;
        return (
            <button className={className} onClick={onClick}>
                {text}
            </button>
        );
    }
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default Button;
