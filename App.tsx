import React from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import NavContainer from './src/navigation/NavContainer';
import { store } from './src/rtk/store';

let persistor = persistStore(store);

const App: React.FC = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <NavContainer/>
    </PersistGate>
  </Provider>
);

export default App;
