import { AiFillCheckSquare, AiOutlineCheckSquare } from 'react-icons/ai';
import { primaryColor } from '../styles/utils';
import styled from 'styled-components';

const Checked = styled(AiFillCheckSquare)`
  width: 2rem;
  height: 2rem;
  margin: 1rem;
  color: ${primaryColor};
  &:hover {
    cursor: pointer;
  }
`;

const UnChecked = styled(AiOutlineCheckSquare)`
  width: 2rem;
  height: 2rem;
  margin: 1rem;
  color: ${primaryColor};
  &:hover {
    cursor: pointer;
  }
`;

const Checker = ({ checked }) => {
  return checked ? <Checked /> : <UnChecked />;
};

export default Checker;
