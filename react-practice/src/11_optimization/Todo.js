import TodoTemplate from './components/Template';
import Header from './components/Header';
import Form from './components/Form';
import ItemList from './components/ItemList';
import useItems from './hooks/useItems';

// 2500개 데이터 랜더링
const todoGeneration = Array.from({ length: 2500 }, (el, idx) => ({
  id: idx,
  value: '똥쟁아',
  isdone: true,
}));

const Todo = () => {
  const [items, onInsert, onDelete, onClicked] = useItems(todoGeneration);

  return (
    <TodoTemplate>
      <Header>일정 관리</Header>
      <Form onInsert={onInsert} />
      <ItemList items={items} onDelete={onDelete} onClicked={onClicked} />
    </TodoTemplate>
  );
};

export default Todo;
