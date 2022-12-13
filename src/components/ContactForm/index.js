import PropTypes from 'prop-types';
import { useState, useRef } from 'react';

import Button from '../Button';
import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';

import { Form, ButtonContainer } from './styles';

export default function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');

  const emailInput = useRef(null);

  function handleClick() {
    console.log(emailInput.current.value);
  }

  return (
    <Form>
      <button type="button" onClick={handleClick}>
        Pegar emailInput
      </button>
      <FormGroup>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome"
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="E-mail"
          ref={emailInput}
        />
      </FormGroup>

      <FormGroup>
        <Input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Telefone"
        />
      </FormGroup>

      <FormGroup>
        <Select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="instagram">Instagram</option>
          <option value="facebook">Facebook</option>
          <option value="twitter">Twitter</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit">
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
