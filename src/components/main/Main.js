import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductsList from './ProductsList';
import './main.scss';

class Main extends Component {
    render() {
        return (
            <div className="main">
                <div className="main__content container">
                    <h1 className="main__content-title">
                        WELCOME TO<span> GSTORE, </span>CHECK OUR LATEST games
                    </h1>
                    <div className="main__content-cards">
                        <div className="main__content-cards__title-content">
                            <h1 className="main__content-cards__title">
                                LATEST ARRIVALS IN <span>G</span>STORE
                            </h1>
                        </div>
                        <ProductsList onFavoriteChange={this.props.onFavoriteChange} onBasketChange={this.props.onBasketChange} />
                    </div>
                </div>
            </div>
        );
    }
}

Main.propTypes = {
    onFavoriteChange: PropTypes.func,
    onBasketChange: PropTypes.func,
};

export default Main;
