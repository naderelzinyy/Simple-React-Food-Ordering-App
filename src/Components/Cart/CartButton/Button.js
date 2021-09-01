
import React, {useContext,useEffect,useState} from 'react';
import classes from './Button.module.css'
import CartIcon from '../CartIcon'
import CartContext from '../../../store/cart-context'



export const Button = (props) => {
    const [btnHighlighted,setBtnHighlighted] = useState(false);

    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((curNum,item) => {
        return curNum + item.amount;
    },0);

    const btnClasses = `${classes.button} ${btnHighlighted ? classes.bump : ''}`
    useEffect(()=>{
        if(cartCtx.items.length === 0) {
            return;
        }
        setBtnHighlighted(true);

        const timer = setTimeout(()=>{
            setBtnHighlighted(false);
        },300);

        return()=>{
            clearTimeout(timer);
        }

    },[cartCtx.items])

    return (
        <button className={btnClasses} onClick={props.onClick}>

            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>

        </button>
    )
}

export default Button