import React from 'react'
import './Display.css'

export default props =>
    <div className='display' style={{fontSize: props.value.length >= 11 ? '1em' : '2.1em' }}>{props.value}</div>