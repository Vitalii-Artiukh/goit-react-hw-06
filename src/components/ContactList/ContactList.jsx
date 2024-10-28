import { React, useState } from 'react';
import Contact from '../Contact/Contact';
import clsx from 'clsx';
import initialContacts from '../API/initialContacts';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();

  const onDelete = contactId => {
    // const action = deleteContact(contactId);
    // dispatch(action);
    dispatch(deleteContact(contactId));
  };

  const filteredContacts = contacts.filter(
    cont =>
      cont.name.toLowerCase().includes(filter.toLowerCase()) ||
      cont.number.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={clsx(css.contactsWrapper)}>
      {filteredContacts.map(cont => (
        <li key={cont.id} className={clsx(css.listItem)}>
          <Contact data={cont} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
