import { useSelector } from "react-redux";
import ContactForm from "../../ContactForm";
import ContactsList from "../../Contacts";
import Filter from "../../Filter";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { selectIsAuth } from "redux/selectors";

function Phonebook() {
  const navigate = useNavigate();
  const isLoading = useSelector((store) => store.contacts.contacts.loading);
  const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
    !isAuth && navigate("/login");
  }, [isAuth, navigate]);

  return (
    <div>
      <h1>Phonebook</h1>

      <ContactForm />

      <h2>Contacts</h2>

      <Filter />
      {isLoading && <h3> Please wait. Contacts are downloading</h3>}
      <ContactsList />
    </div>
  );
}

export default Phonebook;
