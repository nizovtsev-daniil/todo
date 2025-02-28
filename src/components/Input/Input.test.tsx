import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { addTodo } from '../../store/todoSlice';
import todoReducer from '../../store/todoSlice';
import { AppDispatch } from '../../store';
import { Input } from './Input';

const testStore = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

let mockDispatch: AppDispatch = jest.fn();
jest.mock('../../hooks/useAppRedux', () => ({
  useAppDispatch: () => mockDispatch,
}));

describe('Проверка компонента Input', () => {
  const renderComponent = () => {
    const { container } = render(
      <Provider store={testStore}>
        <Input />
      </Provider>
    );
    return { container };
  };

  beforeEach(() => {
    mockDispatch = jest.fn();
  });

  it('Проверка фокусировки на инпуте после рендера', () => {
    renderComponent();
    const input = screen.getByPlaceholderText('What needs to be done?');
    expect(input).toHaveFocus();
  });

  it('Проверка ввода текста в инпуте', () => {
    renderComponent();
    const input = screen.getByPlaceholderText('What needs to be done?');
    fireEvent.change(input, { target: { value: 'Test text' } });
    expect(input).toHaveValue('Test text');
  });

  it('Проверка отправки данных после ввода текста и нажания на enter, очистки поля ввода', () => {
    renderComponent();
    const input = screen.getByPlaceholderText('What needs to be done?');
    fireEvent.change(input, { target: { value: 'Test other text' } });
    fireEvent.keyDown(input, { key: 'Enter', keyCode: 13 });
    expect(mockDispatch).toHaveBeenCalledWith(addTodo('Test other text'));
    expect(input).toHaveValue('');
  });

  it('Данные не отправляются если поле ввода не заполнено', () => {
    renderComponent();
    const input = screen.getByPlaceholderText('What needs to be done?');
    fireEvent.keyDown(input, { key: 'Enter', keyCode: 13 });

    expect(mockDispatch).not.toHaveBeenCalled();
  });
});
