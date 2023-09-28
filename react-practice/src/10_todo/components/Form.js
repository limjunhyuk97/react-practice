import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import styled from 'styled-components';

const FormWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const Input = styled.input`
  padding: 0 1rem;
  background-color: '#071e22';
  flex: 1;
  font-size: 20px;
  border: none;
  &:focus {
    outline: none;
  }
`;

const Add = styled(AiOutlinePlus)`
  width: 2rem;
  height: 2rem;
  color: white;
`;

const AddButton = styled.button`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ddd3ce;
  border: none;
  outline: none;
  &:hover {
    cursor: pointer;
  }
`;

const Form = ({ onInsert }) => {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleInputSubmit = () => {
    onInsert(input);
    setInput('');
  };

  return (
    <FormWrapper>
      <Input value={input} onChange={handleInputChange} />
      <AddButton onClick={handleInputSubmit}>
        <Add />
      </AddButton>
    </FormWrapper>
  );
};

export default Form;
