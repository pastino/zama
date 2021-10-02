import React from 'react';
//navigation
import Gate from 'navigation/Gate';
//redux
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore} from 'redux';
import rootReducer from '@/redux/rootReducer';
import {persistStore} from 'redux-persist';

const App = () => {
  const store = createStore(rootReducer, composeWithDevTools());
  const persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Gate />
      </PersistGate>
    </Provider>
  );
};

export default App;
