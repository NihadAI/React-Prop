import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../UI/button/Button';
import Modal from '../UI/modal/Modal';
import './productCard.scss';

class ProductCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openModal: false,
            isCardInFavorite: false,
            isCardInBasket: false,
        };
    }

    handleModal = () => {
        this.setState(prevState => ({
            openModal: !prevState.openModal,
            isCardInBasket: prevState.isCardInBasket,
        }));
    };

    componentDidMount() {
        const { id } = this.props;
        const favoriteCards = JSON.parse(localStorage.getItem('favorite')) || [];
        const isCardInFavorite = favoriteCards.includes(id);
        const basketCards = JSON.parse(localStorage.getItem('basket')) || [];
        const isCardInBasket = basketCards.includes(id);
        this.setState({
            isCardInFavorite: isCardInFavorite,
            isCardInBasket: isCardInBasket,
        });
    }
    isFavorite = id => {
        const favoriteCards = JSON.parse(localStorage.getItem('favorite')) || [];
        const isCardInFavorite = favoriteCards.includes(id);
        const updatedFavoriteCards = isCardInFavorite ? favoriteCards.filter(cardId => cardId !== id) : [...favoriteCards, id];
        localStorage.setItem('favorite', JSON.stringify(updatedFavoriteCards));
        this.setState({ isCardInFavorite: !isCardInFavorite });
        this.props.onFavoriteChange(updatedFavoriteCards);
    };

    isBasket = id => {
        const basketCards = JSON.parse(localStorage.getItem('basket')) || [];
        const isCardInBasket = basketCards.includes(id);
        const updatedBasketCards = isCardInBasket ? basketCards.filter(cardId => cardId !== id) : [...basketCards, id];
        localStorage.setItem('basket', JSON.stringify(updatedBasketCards));
        this.setState({ isCardInBasket: !isCardInBasket });
        this.props.onBasketChange(updatedBasketCards);
        this.handleModal();
    };

    render() {
        const { image, name, genre, price, id } = this.props;

        return (
            <div className="card">
                <div className="card__img-container">
                    <img className="card__img" src={image} alt="" />
                </div>

                <div className="card__main">
                    <img
                        className="card__main-favorite-icon"
                        src={this.state.isCardInFavorite ? '/img/star-colored.svg' : '/img/star-black.svg'}
                        onClick={() => this.isFavorite(id)}
                        alt="favorite star"
                    />
                    <h1 className="card__main-name">{name}</h1>
                    <p className="card__main-genre">{genre}</p>
                </div>
                <div className="card__footer">
                    <p className="card__footer-price">{price} $</p>
                    <Button className="card__footer-button" text={this.state.isCardInBasket ? 'Cart in basket' : 'Add to cart'} onClick={this.handleModal} />
                    {this.state.openModal && (
                        <Modal
                            header={name}
                            closeButton={true}
                            onClose={this.handleModal}
                            text={
                                this.state.isCardInBasket ? 'Are you sure you want to remove this game from your shopping basket?' : 'Are you sure you want to add this game to your shopping basket?'
                            }
                            actions={
                                <div className="modal__footer">
                                    <Button className="card__footer-button" text="Yes" onClick={() => this.isBasket(id)} />
                                    <Button className="card__footer-button" text="No" onClick={this.handleModal} />
                                </div>
                            }
                        />
                    )}
                </div>
            </div>
        );
    }
}

ProductCard.propTypes = {
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    onFavoriteChange: PropTypes.func.isRequired,
    onBasketChange: PropTypes.func.isRequired,
};

export default ProductCard;
