import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import phonebookReduser from './phonebook/phonebook-reducer';

const rootReducer = combineReducers({
  phonebook: phonebookReduser,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
