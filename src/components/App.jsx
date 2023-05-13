import { Component } from 'react';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import * as Styled from './styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      { id: 'id-5', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-6', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-7', name: 'Rosie Simpson', number: '459-12-56' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('CONTACTS');
    const parsedContacts = JSON.parse(contacts);
    const filter = localStorage.getItem('FILTER');

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
    if (filter) {
      this.setState({ filter });
    }
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('CONTACTS', JSON.stringify(this.state.contacts));
    }
    if (this.state.filter !== prevState.filter) {
      localStorage.setItem('FILTER', this.state.filter);
    }
  };

  handleContactFormSubmit = data => {
    this.setState(prev => {
      return { contacts: prev.contacts.concat(data) };
    });
  };

  handleFilter = data => {
    this.setState(data);
  };

  handleDelete = data => {
    this.setState(prev => {
      return { contacts: prev.contacts.filter(el => el.id !== data) };
    });
  };

  render() {
    const { state, handleContactFormSubmit, handleFilter, handleDelete } = this;

    return (
      <Styled.Section>
        <Styled.PhonebookTitle>Phonebook</Styled.PhonebookTitle>
        <ContactForm submit={handleContactFormSubmit} state={state} />
        <Styled.ContactTitle>Contacts</Styled.ContactTitle>
        <Filter filter={handleFilter} value={state.filter} />
        {state.contacts.length !== 0 && (
          <ContactList state={state} delete={handleDelete} />
        )}
      </Styled.Section>
    );
  }
}
