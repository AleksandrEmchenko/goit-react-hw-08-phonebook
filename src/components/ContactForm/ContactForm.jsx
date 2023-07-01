import { useDispatch } from "react-redux";

import {
  Container,
  ContactFild,
  ContactLabel,
  AddBtn,
} from "./ContactForm.styled";
import { useState } from "react";
import { createContactThunk } from "redux/auth/thunk";
import { HomePageBody } from "components/Pages/Homepage/Homepage.styled";

function ContactForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (e) => {
    switch (e.currentTarget.name) {
      case "name":
        setName(e.currentTarget.value);
        break;
      case "number":
        setNumber(e.currentTarget.value);
        break;
      default:
        return;
    }
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();

    dispatch(createContactThunk({ name, number }));
    setName("");
    setNumber("");
  };

  return (
    <div>
      <HomePageBody>
        <form onSubmit={handleSubmitForm}>
          <Container>
            <ContactLabel>
              Name
              <ContactFild
                type="text"
                name="name"
                placeholder="Enter name"
                value={name}
                onChange={handleChange}
                // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </ContactLabel>
            <ContactLabel>
              Number
              <ContactFild
                type="tel"
                name="number"
                placeholder="Enter number"
                value={number}
                onChange={handleChange}
                // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </ContactLabel>
            <AddBtn type="submit">Add contact</AddBtn>
          </Container>
        </form>
      </HomePageBody>
    </div>
  );
}

export default ContactForm;
