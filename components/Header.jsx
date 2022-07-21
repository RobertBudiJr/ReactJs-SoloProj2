import { useState } from 'react';
import React from 'react';
import Logo from '../src/assets/Earth.svg';

export default function Header() {
  return (
    <header className='header'>
      <img src={Logo} alt='Logo' className='header__img' />
      <h4 className='header__title'>Destination Choices.</h4>
    </header>
  );
}
