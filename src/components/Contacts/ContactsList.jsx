import { useDispatch, useSelector } from "react-redux";

import ContactItem from "components/ContactItem/ContactItem";
import { List } from "../Contacts/Contacts.styled";
import { useEffect } from "react";
import { getContactThunk } from "redux/auth/thunk";
import {
  selectContacts,
  selectError,
  selectFilter,
  selectIsAuth,
  selectIsLoading,
} from "redux/selectors";

function ContactsList() {
  const dispatch = useDispatch();

  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const isAuth = useSelector(selectIsAuth);

  const items = useSelector(selectContacts);
  const { filter } = useSelector(selectFilter);

  useEffect(() => {
    if (!isAuth) return;

    dispatch(getContactThunk());
  }, [isAuth, dispatch]);

  return (
    <div>
      {isLoading && <h3> Please wait. Contacts are downloading</h3>}

      {items && Array.isArray(items) && items.length !== 0 ? (
        <List>
          {items
            .filter(({ name }) =>
              name.toLowerCase().includes(filter.toLowerCase())
            )
            .map((contact) => {
              return <ContactItem key={contact.id} contact={contact} />;
            })}
        </List>
      ) : (
        "Your contact list is empty"
      )}
      {error && <h3>Oops. Something went wrong.</h3>}
    </div>
  );
}

export default ContactsList;
