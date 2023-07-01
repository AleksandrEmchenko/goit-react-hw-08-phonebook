import { useDispatch } from "react-redux";
import { ItemList, Contact, ContactBox, DelBtn } from "./ContactItem.styled";
import { deleteContactThunk } from "redux/auth/thunk";

export function ContactItem({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = (contactId) => {
    dispatch(deleteContactThunk(contactId));
  };

  return (
    <ItemList>
      <ContactBox>
        <Contact>{contact.name}:</Contact> {contact.number}
      </ContactBox>
      <DelBtn onClick={() => handleDelete(contact.id)}>delete</DelBtn>
    </ItemList>
  );
}

export default ContactItem;
