import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import SideBar from './components/SideBar';
import configureStore from './configureStore';

const store = configureStore();

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      {Component}
    </AppContainer>,
    document.getElementById('app-root')
  );
};

render(<SideBar store={store} />);

if (module.hot) {
  module.hot.accept('./components/SideBar', () => {
    render(<SideBar store={store} />);
  });
}
