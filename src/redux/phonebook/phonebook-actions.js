import { v4 as uuidv4 } from 'uuid';

import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('phonebook/add', value => {
  return {
    payload: {
      ...value,
      id: uuidv4(),
    },
  };
});

const deleteContact = createAction('phonebook/delete');
const contact_filter = createAction('phonebook/contact_filter');

const actions = {
  addContact,
  deleteContact,
  contact_filter,
};
export default actions;
