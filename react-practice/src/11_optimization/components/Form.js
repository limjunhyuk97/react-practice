import { useCallback, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import styled from 'styled-components';

const FormWrapper = styled.form`
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

  // 한번 만들고 다시 사용함
  const handleInputChange = useCallback((e) => {
    setInput(e.target.value);
  }, []);

  // input과 onInsert 함수가 변경될때마다 함수를 다시 만든다.
  const handleInputSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (input === '') {
        alert('내용을 입력해주세요!');
        return;
      }
      onInsert(input);
      setInput('');
    },
    [input, onInsert],
  );

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
