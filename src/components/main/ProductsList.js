import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import axios from 'axios';

class ProductsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
        };
    }

    componentDidMount() {
        axios.get('/products.json').then(response => {
            this.setState({ products: response.data.products });
        });
    }

    render() {
        const { onFavoriteChange, onBasketChange } = this.props;

        const product = this.state.products.map(card => {
            return <ProductCard key={card.id} {...card} onFavoriteChange={onFavoriteChange} onBasketChange={onBasketChange} />;
        });

        return <div className="products">{product}</div>;
    }
}

ProductsList.propTypes = {
    products: PropTypes.array,
    onFavoriteChange: PropTypes.func,
    onBasketChange: PropTypes.func,
};

export default ProductsList;
