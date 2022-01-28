import React from 'react'
import './Button.css'
export default function button({children, onClick}) {
    return (
        <div>
            <button onClick={onClick} className="add-button">
                {children}
            </button>
        </div>
    )
}
