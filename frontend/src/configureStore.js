import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';

export default function configureStore(initialState) {
  const devTool = typeof window === 'object' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : undefined;

  const composeEnhancers = process.env.NODE_ENV !== 'production' && devTool ? devTool({}) : compose;

  const middlewares = [thunkMiddleware];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  const enhancer = composeEnhancers(applyMiddleware(...middlewares));

  return createStore(rootReducer, initialState, enhancer);
}


