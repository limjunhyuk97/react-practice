import styled from 'styled-components';
import Checker from './Checker';
import { AiFillMinusCircle } from 'react-icons/ai';

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  &:hover {
    background-color: #f6f6f6;
    cursor: pointer;
  }
  background-color: ${(props) => (props.isdone ? '#f6f6f6' : 'none')};
  border-bottom: 1px solid #cdcdcd;
`;

const Content = styled.p`
  flex: 1;
  padding-top: 0.2rem;
  text-decoration: ${(props) => (props.isdone ? 'line-through' : '')};
  color: ${(props) => {
    props.isdone ? 'cecece' : 'black';
  }};
`;

const Delete = styled(AiFillMinusCircle)`
  width: 2rem;
  height: 2rem;
  padding: 1rem;
  color: #ff4137;
  &:hover {
    color: #a30800;
  }
`;

const Item = ({ item, onDelete, onClicked }) => {
  const { isdone, value } = item;

  const handleClick = () => {
    onClicked(item);
  };

  const handleDelete = () => {
    onDelete(item);
  };

  return (
    <ItemWrapper onClick={handleClick} isdone={isdone}>
      <Checker checked={isdone} />
      <Content isdone={isdone}>{value}</Content>
      <Delete onClick={handleDelete} />
    </ItemWrapper>
  );
};

export default Item;
