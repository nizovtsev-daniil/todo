import { FC } from 'react';
import { useAppDispatch } from '../../hooks/useAppRedux';
import {
  showActive,
  showCompleted,
  clearCompleted,
  showAll,
} from '../../store/todoSlice';
import './FormFooter.css';

interface FormFooterProp {
  count: number;
}

export const FormFooter: FC<FormFooterProp> = ({ count }) => {
  const dispatch = useAppDispatch();

  return (
    <div className='form-footer'>
      <p className='form-footer__count'>{`${count} items left`}</p>
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
