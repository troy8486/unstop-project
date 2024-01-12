import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';

import DesktopLayout from './desktoplayout/DesktopLayout';
import MobileLayout from './mobilelayout/MobileLayout';
import { Provider } from 'react-redux';
import appStore from './utlis/appStore';

const App = () => {
  return (
    <Provider store={appStore}>
      <BrowserView>
        <DesktopLayout />
      </BrowserView>
      <MobileView>
        <MobileLayout />
      </MobileView>
    </Provider>
  );
}

export default App;