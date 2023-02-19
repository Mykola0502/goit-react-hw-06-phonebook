import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';

import { Container, Title, SubTitle, ContactText } from './App.styled';

export const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  return (
    <Container>
      <Toaster position="top-center" reverseOrder={false} />
      <Title>Phonebook</Title>
      <ContactForm />
      <SubTitle>Contacts</SubTitle>
      {contacts.length || filter ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <ContactText>There are no phone numbers in Contacts!</ContactText>
      )}
    </Container>
  );
};
