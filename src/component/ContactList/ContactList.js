import React from 'react';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={styles.list}>
      {contacts.map(({ name, id, number }) => (
        <li className={styles.contactList} key={id}>
          <span className={styles.contactsNameNumber}>
            {name}: {number}
          </span>
          <button
            className={styles.buttonDelete}
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
