import { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './components/header/Header';
import Main from './components/main/Main';
import './App.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favorite: localStorage.getItem('favorite') ? JSON.parse(localStorage.getItem('favorite')) : [],
            basket: localStorage.getItem('basket') ? JSON.parse(localStorage.getItem('basket')) : [],
        };
    }

    static propTypes = {
        favoriteCount: PropTypes.number,
        shoppingBasketCount: PropTypes.number,
    };

    handleFavoriteChange = count => {
        this.setState({ favorite: count });
    };

    handleBasketChange = count => {
        this.setState({ basket: count });
    };

    render() {
        return (
            <div className="App">
                <Header favoriteCount={this.state.favorite.length} shoppingBasketCount={this.state.basket.length} />
                <Main onFavoriteChange={this.handleFavoriteChange} onBasketChange={this.handleBasketChange} />
            </div>
        );
    }
}
export default App;
