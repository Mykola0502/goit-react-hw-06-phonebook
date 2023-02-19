import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';

import { deleteContact } from 'redux/contactsSlice';

import { Item, Number, DeleteBtn } from './ContactItem.styled';

export const ContactItem = ({ contact }) => {
  const { id, name, number } = contact;

  const dispatch = useDispatch();
  const handleDelete = id => dispatch(deleteContact(id));

  return (
    <Item>
      <span>{name}: </span>
      <Number>{number}</Number>
      <DeleteBtn type="button" onClick={() => handleDelete(id)}>
        Delete
      </DeleteBtn>
    </Item>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
