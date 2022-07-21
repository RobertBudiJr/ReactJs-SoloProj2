import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Header from '../components/Header';
import Main from '../components/Main';
import data from '../components/data';

export default function App() {
  const cards = data.map((item) => {
    return <Main key={item.title} item={item} />;
  });

  return (
    <div className='container'>
      <Header />
      {cards}
    </div>
  );
}
