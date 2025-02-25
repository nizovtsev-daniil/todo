import { FC } from 'react';
import { Header } from './components/Header/Header';
import { TodosForm } from './components/TodosForm/TodosForm';
import './App.css';

export const App: FC = () => {
  return (
    <>
      <Header />
      <TodosForm />
    </>
  );
};
