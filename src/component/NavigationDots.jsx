import React from 'react';

import Data from './Data';
import './NavigationDots.scss';

const NavigationDots = ({ check }) => {
    return <div className="app__navigation-dots app__mid">
        {Data.map((dot, ind) => {
            return <a href={`#${dot.linkName}`} key={ind}
                style={check === dot.linkName ? { backgroundColor: 'var(--info-color)' } : { backgroundColor: 'var(--primary-color)' }}></a>
        })}
    </div>
}
export default NavigationDots;