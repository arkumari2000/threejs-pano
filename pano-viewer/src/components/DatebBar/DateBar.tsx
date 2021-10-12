import React from 'react'

import './styles.css'

export const DateBar: React.FC = () => {
    return(
        <div className='date-wrapper'>
            <div className='bar-theme date-bar'>
            <div>
                02-10-2021 <span>&#8964;</span>
            </div>
            </div>
        </div>
    )
}