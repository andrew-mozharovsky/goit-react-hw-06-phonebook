import { v4 as uuidv4 } from 'uuid';
import types from './phonebook-types';

const addContact = value => ({
  type: types.ADD,
  payload: {
    ...value,
    id: uuidv4(),
  },
});

const deleteContact = id => ({
  type: types.DELETE,
  payload: id,
});

const contact_filter = value => ({
  type: types.FILTER,
  payload: value,
});
const actions = {
  addContact,
  deleteContact,
  contact_filter,
};
export default actions;
