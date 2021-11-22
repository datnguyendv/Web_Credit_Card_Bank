import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Main from './features/Main';

const App: React.FC = () => {
  return(
    <Provider store = {store}>
      <Main/>
    </Provider>
  )
}

export default App;
