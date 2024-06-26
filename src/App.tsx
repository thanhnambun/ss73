import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Todolist from './components/Todolist';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/todoList' element={<Todolist />} />
      </Routes>
    </div>
  );
}