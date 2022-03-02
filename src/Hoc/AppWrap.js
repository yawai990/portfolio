import React from 'react';

import NavigationDots from '../component/NavigationDots';
import Social from '../component/Social';

const AppWrap = (Component, idName) => function HOC() {

    return <div id={idName} className={`app__container`}>
        <Social />
        <Component />

        <NavigationDots check={idName} />
    </div>
}
export default AppWrap;
