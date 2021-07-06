import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import styles from './ContactsList.module.scss';

const ContactsList = ({ contacts, deleteContact }) => (
  <TransitionGroup component="ul" className={styles.list}>
    {contacts.map(({ name, id, number }) => (
      <CSSTransition key={id} timeout={250} classNames={styles}>
        <li key={id} className={styles.item}>
          <span className={styles.item_name}>{name}</span>
          <span className={styles.item_number}>{number}</span>

          <button
            className={styles.button}
            type="button"
            onClick={() => deleteContact(id)}
          >
            Delete
          </button>
        </li>
      </CSSTransition>
    ))}
  </TransitionGroup>
);
ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
export default ContactsList;
