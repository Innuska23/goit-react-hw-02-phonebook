import React, { Component } from "react"
import shortid from 'shortid';
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  // handleForm = row => {
  //   if (this.state.contacts.find(({ name }) => name === row.name)) {
  //     this.existRow(row.name);
  //   }
  // handleNameChange = event => {
  //   // console.log(event.currentTarget.value);
  //   this.setState({ name: event.currentTarget.value })
  // }
  // handleTagChange = event => {
  //   // console.log(event.currentTarget.value);
  //   this.setState({ tag: event.currentTarget.value })
  // }
// formSumbitHandler = data => {
//   setTimeout(() => {
//     console.log(data);
//   }, 1000);
// }
formSubmitHandler = data => {
  const contact = { id: shortid.generate(), ...data };

  this.setState(({ contacts }) => ({
    contacts: [contact, ...contacts],
  }));
};

handlerChangeFilter = e => this.setState({ filter: e.target.value });

// handleRemoveContact = contactId => {
//   this.setState(state => ({
//     ...state,
//     contacts: state.contacts.filter(contact => contact.id !== contactId),
//   }));
// };
// getFilteredContacts = () => {
//   if (!this.state.filter) return this.state.contacts;

//   return this.state.contacts.filter(contact =>
//     contact.name.includes(this.state.filter)
//   );
// };


  render() {
    const { filter} = this.state;
    return (
      <div
        // style={{
        //   height: '100vh',
        //   display: 'flex',
        //   justifyContent: 'center',
        //   alignItems: 'center',
        //   fontSize: 40,
        //   color: '#010101'
        // }}
      >
      <h1>Phonebook</h1>
      <ContactForm onSubmit={this.formSubmitHandler}/>
      <h2>Contacts</h2>
      <Filter value={filter} handlerChangeFilter={this.handlerChangeFilter}/>
      {/* <ContactList/> */}
      {/* <ContactList  contacts={this.getFilteredContacts()}
          onRemoveContact={this.handleRemoveContact}/> */}
      </div>
    );
  }
};
