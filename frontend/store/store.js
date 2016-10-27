import {createStore} from 'redux';
import RootReducer from '../reducers/root_reducer';
import {MasterMiddleware} from '../middleware/master_middleware';

const configureStore = (preloadedState= {}) => (
  createStore(
    RootReducer,
    MasterMiddleware
  )
);


export default configureStore
