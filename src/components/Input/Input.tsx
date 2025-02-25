import { useState, useLayoutEffect, useRef, FC } from 'react';
import { useAppDispatch } from '../../hooks/useAppRedux';
import { addTodo } from '../../store/todoSlice';
import './Input.css';

export const Input: FC = () => {
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState('');

  useLayoutEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <>
      <input
        type='text'
        className='input-todo'
        placeholder='What needs to be done?'
        value={value}
        ref={inputRef}
        onChange={(event) => {
          setValue(event.currentTarget.value);
        }}
        onKeyDown={(event) => {
          if (event.key === 'Enter' && value !== '') {
            dispatch(addTodo(value));
            setValue('');
          }
        }}
      />
    </>
  );
};
