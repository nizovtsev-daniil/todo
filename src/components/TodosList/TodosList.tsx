import { FC } from 'react';
import { TodoItem } from '../TodoItem/TodoItem';
import './TodosList.css';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

interface ListProps {
  todos: Todo[];
}

export const TodosList: FC<ListProps> = ({ todos }) => {
  return (
    <ul className='list-reset todos-list__list'>
      {todos
        ? todos.map((todo) => (
            <li className='todo-list__item' key={todo.id}>
              <TodoItem
                id={todo.id}
                text={todo.text}
                completed={todo.completed}
              />
            </li>
          ))
        : null}
    </ul>
  );
};
