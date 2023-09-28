import styled from 'styled-components';
import Item from './Item';

const ItemListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ItemList = ({ items, onDelete, onClicked }) => {
  console.log(items);
  return (
    <ItemListWrapper>
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          onDelete={onDelete}
          onClicked={onClicked}
        />
      ))}
    </ItemListWrapper>
  );
};

export default ItemList;
