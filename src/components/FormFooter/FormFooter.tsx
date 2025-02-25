import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useAppRedux';
import {
  showActive,
  showCompleted,
  clearCompleted,
  showAll,
} from '../../store/todoSlice';
import './FormFooter.css';

export const FormFooter: FC = () => {
  const dispatch = useAppDispatch();
  const { todos } = useAppSelector((state) => state.todos);

  const activeItems = todos.filter((todo) => todo.completed === false);

  return (
    <div className='form-footer'>
      <p className='form-footer__count'>{activeItems.length} items left</p>
      <div className='form-footer__button-wrap'>
        <button
          className='btn-reset form-footer__button'
          onClick={() => {
            dispatch(showAll());
          }}
        >
          All
        </button>
        <button
          className='btn-reset form-footer__button'
          onClick={() => {
            dispatch(showActive());
          }}
        >
          Active
        </button>
        <button
          className='btn-reset form-footer__button'
          onClick={() => {
            dispatch(showCompleted());
          }}
        >
          Completed
        </button>
      </div>
      <button
        className='btn-reset form-footer__button'
        onClick={() => {
          dispatch(clearCompleted());
        }}
      >
        Clear completed
      </button>
    </div>
  );
};
