import { useDispatch } from "react-redux";
import { ItemList, Contact, ContactBox, Button } from "./ContactItem.styled";
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
      <Button onClick={() => handleDelete(contact.id)}>delete</Button>
    </ItemList>
  );
}

export default ContactItem;
