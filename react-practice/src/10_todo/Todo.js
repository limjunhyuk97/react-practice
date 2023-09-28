import TodoTemplate from './components/Template';
import Header from './components/Header';
import Form from './components/Form';
import ItemList from './components/ItemList';
import useItems from './hooks/useItems';

const Todo = () => {
  const [items, onInsert, onDelete, onClicked] = useItems([]);

  return (
    <TodoTemplate>
      <Header>일정 관리</Header>
      <Form onInsert={onInsert} />
      <ItemList items={items} onDelete={onDelete} onClicked={onClicked} />
    </TodoTemplate>
  );
};

export default Todo;
