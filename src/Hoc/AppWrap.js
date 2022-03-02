import React from 'react';

import NavigationDots from '../component/NavigationDots';

const AppWrap = (Component, idName, classNames) => function HOC() {
    return <div id={idName} className={`app__container`}>
        <Component />

        <NavigationDots check={idName} />
    </div>
}
export default AppWrap;
