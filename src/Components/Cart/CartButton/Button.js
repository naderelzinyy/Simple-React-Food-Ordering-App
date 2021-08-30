
import React, {useContext} from 'react'
import classes from './Button.module.css'
import CartIcon from '../CartIcon'
import CartContext from '../../../store/cart-context'



export const Button = (props) => {

    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((curNum,item) => {
        return curNum + item.amount;
    },0);

    return (
        <button className={classes.button} onClick={props.onClick}>

            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>

        </button>
    )
}

export default Button