

import React, { Fragment } from 'react'
import classes from '../Layout/Header.module.css'
//import mealsImage from '../../'
import Button from '../UI/CartButton/Button'

export const Header = () => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Meals</h1>
                <Button>Cart</Button>
            </header>
            <div className={classes['main-image']}>
                <img
                 src="https://images.unsplash.com/photo-1592231167202-a253c3c2d3fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MHwxfHNlYXJjaHw2MXx8TWVhbHN8ZW58MHx8fHwxNjI5OTY1OTM2&ixlib=rb-1.2.1&q=80&w=1080"
                 alt="React Meals"/>
            </div>
        </Fragment>
    )
}
