import { Component } from 'react';
import PropTypes from 'prop-types';

class ContactForm extends Component {
    state = {
        contacts: [],
        name: ''
    }


// handleChange = event => {
//     const { name, value } = event.currentTarget;
//     // console.log(event.currentTarget.value);
//     this.setState({ [name]: value })
// }

// handleSubmit = event => {
//     event.preventDefault();

//     this.props.onSubmit(this.state);

//     this.reset();
// }

// hanleLicenceChange = event => {
//     console.log(event.currentTarget.checked);
//     this.setState({licence: event.currentTarget.checked});
// }

// reset = () => {
//     this.setState({ name: "", tag: '', })
// }

render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          <span>Name</span>
        </label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={this.handleNameChange}
          id={this.nameInputId}
        />

        <label htmlFor={this.numberInputId}>
          <span>Number</span>
        </label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={this.handleNameChange}
          id={this.numberInputId}
        />

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;