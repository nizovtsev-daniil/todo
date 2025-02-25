import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Input } from './Input';
import store from '../../store/index';

test('Инпут рендерится без сбоев и ставится фокус на плейсхолдер для начала ввода задачи', () => {
  render(
    <Provider store={store}>
      <Input />
    </Provider>
  );
  const inputField = screen.getByPlaceholderText('What needs to be done?');
  expect(inputField).toHaveFocus();
});
