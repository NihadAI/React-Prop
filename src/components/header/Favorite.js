import { Component } from 'react';
import PropTypes from 'prop-types';

class Favorite extends Component {
    render() {
        const { favoriteCount } = this.props;
        return (
            <div className="header-top__favorite">
                <img className="header-top__favorite__img" src="/img/star-white.svg" alt="Favotire star" />
                <p className="header-top__favorite__count">({favoriteCount})</p>
            </div>
        );
    }
}

Favorite.propTypes = {
    favoriteCount: PropTypes.number.isRequired,
};

export default Favorite;
