import React from 'react';
import PropTypes from 'prop-types';
import { Component } from 'react';
import { ContactItem } from './ContactItem';

import * as Styled from './styled';

export class ContactList extends Component {
  render() {
    const { state } = this.props;

    const lowerCaseFilter = state.filter.toLowerCase();
    const visibleContacts = state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowerCaseFilter)
    );

    return (
      visibleContacts.length !== 0 && (
        <Styled.ContactList>
          {visibleContacts.map(contact => {
            return (
              <ContactItem key={contact.id} {...contact} {...this.props} />
            );
          })}
        </Styled.ContactList>
      )
    );
  }
}

ContactList.propTypes = {
  delete: PropTypes.func.isRequired,
  state: PropTypes.shape({
    contacts: PropTypes.arrayOf(
      PropTypes.objectOf(PropTypes.string.isRequired)
    ),
    filter: PropTypes.string.isRequired,
  }),
};
