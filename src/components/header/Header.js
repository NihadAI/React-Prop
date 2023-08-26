import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShopingBasket from './ShopingBasket';
import Favorite from './Favorite';
import Button from '../UI/button/Button';
import './header.scss';

class Header extends Component {
    render() {
        const { favoriteCount, shoppingBasketCount } = this.props;
        return (
            <header className="header">
                <div className="header-top">
                    <div className="header-top__navbar container">
                        <div className="header-top__navbar__icons">
                            <img src="/img/facebook-top-icon.svg" alt="facebook" />
                            <img src="/img/top-dribble-icon.svg" alt="dribble" />
                            <img src="/img/top-mail-icon.svg" alt="mail" />
                            <img src="/img/top-twitter-icon.svg" alt="twitter" />
                            <img src="/img/top-vimeo-icon.svg" alt="vimeo" />
                        </div>
                        <div className="header-top__navbar__shop">
                            <ShopingBasket shoppingBasketCount={shoppingBasketCount} />
                            <Favorite favoriteCount={favoriteCount} />
                        </div>
                    </div>
                </div>
                <div className="header-main">
                    <div className="header-main__navbar container">
                        <div className="header-main__navbar-logo">
                            <img src="/img/gamepad-solid.svg" alt="gamepad" />
                            <p className="header-main__navbar-logo__name">
                                <span>G</span>Store
                            </p>
                        </div>
                        <div className="header-main__search">
                            <Button text="Search" className="header-main__search-button" />
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

Header.propTypes = {
    favoriteCount: PropTypes.number.isRequired,
    shoppingBasketCount: PropTypes.number.isRequired,
};

export default Header;
