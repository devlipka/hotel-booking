import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import HeaderContainer from './components/header/HeaderContainer';
import store from './redux/redux-store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <Route path="/" render={() => <HeaderContainer />} />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
