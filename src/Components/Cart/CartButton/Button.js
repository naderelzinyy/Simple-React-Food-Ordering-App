
import React from 'react'
import classes from './Button.module.css'
import CartIcon from '../CartIcon'

export const Button = (props) => {
    return (
        <button className={classes.button} onClick={props.onClick}>

            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Cart</span>
            <span className={classes.badge}>3</span>

        </button>
    )
}

export default Button