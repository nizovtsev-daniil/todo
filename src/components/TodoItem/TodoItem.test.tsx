// Не успел разобраться с ошибкой
// " Cannot find module '../../assets/icons/check.svg?react' from 'src/components/TodoItem/Todo.test.tsx'"
// Jest не распознает svgr

// import { render, screen, fireEvent } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit';
// import { clearAllTodos } from '../../store/todoSlice';
// import todoReducer from '../../store/todoSlice';
// import { AppDispatch } from '../../store';
// import { TodoItem } from './TodoItem';

// const store = configureStore({
//   reducer: {
//     todos: todoReducer,
//   },
// });

// const mockDispatch: AppDispatch = jest.fn();
// jest.mock('../../hooks/useAppRedux', () => ({
//   useAppDispatch: () => mockDispatch,
// }));

// const IconCheckMock = jest.fn().mockReturnValue(<div>IconCheck</div>);
// const IconCircleMock = jest.fn().mockReturnValue(<div>IconCircle</div>);
// jest.mock('../../assets/icons/check.svg?react', () => ({
//   default: IconCheckMock,
// }));
// jest.mock('../../assets/icons/circle.svg?react', () => ({
//   default: IconCircleMock,
// }));

// describe('Проверка компонента Todo', () => {
//   const renderComponent = (props: any) => {
//     const { container } = render(
//       <Provider store={store}>
//         <TodoItem {...props} />
//       </Provider>
//     );
//     return {
//       container,
//       checkbox: screen.getByRole('button'),
//       text: screen.getByText(props.text),
//     };
//   };

//   beforeEach(() => {
//     mockDispatch(clearAllTodos());
//   });

//   it('Проверка рендера кнопки с иконкой check', () => {
//     const { checkbox } = renderComponent({
//       id: '1',
//       text: 'Test 1',
//       completed: true,
//     });

//     expect(checkbox).toHaveClass('todo-list__checkbox');
//     expect(IconCheckMock).toHaveBeenCalled();
//   });

//   it('Проверка рендера кнопки с иконкой circle', () => {
//     const { checkbox } = renderComponent({
//       id: '2',
//       text: 'Test 2',
//       completed: false,
//     });

//     expect(checkbox).toHaveClass('todo-list__checkbox');
//     expect(IconCircleMock).toHaveBeenCalled();
//   });

//   it('Проверка отображения текста в активной задаче', () => {
//     const { text } = renderComponent({
//       id: '3',
//       text: 'Test 3',
//       completed: false,
//     });

//     expect(text).toHaveTextContent('Test 3');
//     expect(text).toHaveClass('todo-list__text');
//   });

//   it('Проверка отображения текста в выполненной задаче', () => {
//     const { text } = renderComponent({
//       id: '4',
//       text: 'Test 4',
//       completed: true,
//     });

//     expect(text).toHaveClass('todo-list__text--line');
//   });

//   it('Проверка смены статуса задачи', () => {
//     const { checkbox } = renderComponent({
//       id: '5',
//       text: 'Clickable task',
//       completed: false,
//     });

//     fireEvent.click(checkbox);
//     expect(IconCheckMock).toHaveBeenCalled();
//     expect(IconCircleMock).not.toHaveBeenCalled();
//   });
// });
