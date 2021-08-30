
import classes from './Input.module.css'
import React,{useRef} from 'react'


export const Input = React.forwardRef((props,ref) => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}> {props.label} </label>
            <input ref={ref} {...props.input}></input>
        </div>
    )
})

export default Input