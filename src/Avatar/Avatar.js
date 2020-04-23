import React from 'react';
import './Avatar.css'

export function Avatar (props) {
    return (
        <div>
            <img src={props.url} width={props.width} shape={props.shape} alt="" className={props.shape} />
        </div>
    )
}