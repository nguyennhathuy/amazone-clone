import React from 'react';
import '../Style/Product.css';
import '../Style/CheckoutProduct.css';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { connect } from 'react-redux';
import * as Actions from '../actions/index';


function CheckoutProduct({ id, image, title, price, rating, removeProductFromBasket }) {

    const star = [];
    for (var i = 0; i < rating; i++) {
        star.push(<StarIcon className='product__rating' key={i} />);
    }
    if (star.length !== 5) {
        for (var j = star.length; j < 5; j++) {
            star.push(<StarBorderIcon key={j} className='product__rating' />)
        }
    }
    return (
        <div className='checkoutProduct'>

            <img className='checkoutProduct__image' src={image} alt='' />

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className='checkoutProduct__infoPrice'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='checkoutProduct__infoRating'>
                    {star}
                </div>
                <button type='checkoutProduct__buttonRemove' onClick={() => {removeProductFromBasket()}}>Remove</button>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        removeProductFromBasket: () => {
            dispatch(Actions.removeProductFromBasket());
        }
    }
}
export default connect(null, mapDispatchToProps)(CheckoutProduct);
