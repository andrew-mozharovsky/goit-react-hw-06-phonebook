import { combineReducers } from 'redux';
import contactsArr from '../../contactsArr';
import types from './phonebook-types';

//     contacts: contactsArr,
//     filter: '',

//   };
//    const contactsLocal = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contactsLocal);
// return localStorage.setItem('contacts', JSON.stringify( [payload, ...state]));
const contacts = (state = contactsArr, { type, payload }) => {
  switch (type) {
    case types.ADD:
      return [payload, ...state];

    case types.DELETE:
      return state.filter(contact => contact.id !== payload);

    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case types.FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  contacts,
  filter,
});
