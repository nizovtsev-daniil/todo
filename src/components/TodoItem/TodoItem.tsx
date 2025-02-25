import { FC } from 'react';
import { useAppDispatch } from '../../hooks/useAppRedux';
import { setCompleted } from '../../store/todoSlice';
import IconCheck from '../../assets/icons/check.svg?react';
import IconCircle from '../../assets/icons/circle.svg?react';
import './TodoItem.css';

interface ItemProps {
  id: string;
  text: string;
  completed: boolean;
}

export const TodoItem: FC<ItemProps> = ({ text, completed, id }) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <button
        className='btn-reset todo-list__checkbox'
        onClick={() => {
          dispatch(setCompleted(id));
        }}
      >
        {completed ? (
          <IconCheck width={'40px'} height={'40px'} />
        ) : (
          <IconCircle width={'40px'} height={'40px'} fill='#e5e5e5' />
        )}
      </button>
      <p
        className={
          completed
            ? 'todo-list__text todo-list__text--line'
            : 'todo-list__text'
        }
      >
        {text}
      </p>
    </>
  );
};
