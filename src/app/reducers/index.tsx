import { combineReducers } from 'redux';
import { reducer as reduxAsyncConnect } from 'redux-connect';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as form } from 'redux-form/es/immutable';

export default combineReducers({
  reduxAsyncConnect,
  routing,
  form,
});
