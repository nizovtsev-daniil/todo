import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import {
  showAll,
  showActive,
  showCompleted,
  clearCompleted,
} from '../../store/todoSlice';
import todoReducer from '../../store/todoSlice';
import { AppDispatch } from '../../store';
import { FormFooter } from './FormFooter';

const testStore = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

let mockDispatch: AppDispatch = jest.fn();
jest.mock('../../hooks/useAppRedux', () => ({
  useAppDispatch: () => mockDispatch,
}));

describe('Проверка компонента FormFooter', () => {
  const renderComponent = () => {
    const { container } = render(
      <Provider store={testStore}>
        <FormFooter count={0} />
      </Provider>
    );
    return { container };
  };

  beforeEach(() => {
    mockDispatch = jest.fn();
  });

  it('Проверка отображения количества активных элементов', () => {
    renderComponent();
    expect(screen.getByText('0 items left')).toBeInTheDocument();
  });

  it('Проверка наличия всех кнопок', () => {
    renderComponent();
    const buttons = ['All', 'Active', 'Completed', 'Clear completed'];
    buttons.forEach((text) => {
      expect(screen.getByRole('button', { name: text })).toBeInTheDocument();
    });
  });

  it('Проверка функционала кнопок', () => {
    renderComponent();
    const allButton = screen.getByRole('button', { name: 'All' });
    const activeButton = screen.getByRole('button', { name: 'Active' });
    const completedButton = screen.getByRole('button', { name: 'Completed' });
    const clearButton = screen.getByRole('button', { name: 'Clear completed' });

    fireEvent.click(allButton);
    expect(mockDispatch).toHaveBeenCalledWith(showAll());
    fireEvent.click(activeButton);
    expect(mockDispatch).toHaveBeenCalledWith(showActive());
    fireEvent.click(completedButton);
    expect(mockDispatch).toHaveBeenCalledWith(showCompleted());
    fireEvent.click(clearButton);
    expect(mockDispatch).toHaveBeenCalledWith(clearCompleted());
  });
});
