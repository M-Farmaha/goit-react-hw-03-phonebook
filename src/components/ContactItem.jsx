import { Component } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styled';

export class ContactItem extends Component {
  handleDelete = e => {
    this.props.delete(e.currentTarget.id);
  };

  render() {
    const { id, name, number } = this.props;

    return (
      <Styled.ContactItem>
        <Styled.ContactName>{name}: </Styled.ContactName>
        <Styled.ContactNumber>{number}</Styled.ContactNumber>
        <Styled.DeleteButton type="button" id={id} onClick={this.handleDelete}>
          <Styled.DeleteIcon />
        </Styled.DeleteButton>
      </Styled.ContactItem>
    );
  }
}

ContactItem.propTypes = {
  delete: PropTypes.func.isRequired,
};
