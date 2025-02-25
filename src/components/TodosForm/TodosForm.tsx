import { FC } from 'react';
import { useAppSelector } from '../../hooks/useAppRedux';
import { Input } from '../Input/Input';
import { TodosList } from '../TodosList/TodosList';
import { FormFooter } from '../FormFooter/FormFooter';
import './TodosForm.css';

export const TodosForm: FC = () => {
  const { todos, currentTodos } = useAppSelector((state) => state.todos);

  return (
    <main className='main'>
      <div className='container todos-form__container'>
        <Input />
        <TodosList todos={currentTodos} />
        {todos.length !== 0 ? <FormFooter /> : null}
      </div>
    </main>
  );
};
