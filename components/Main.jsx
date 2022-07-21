import { useState } from 'react';
import React from 'react';
import Loc from '../src/assets/Loc.svg';

export default function Main(props) {
  return (
    <main className='main'>
      <div className='main__card'>
        <div className='main__left'>
          <img src={props.item.imageUrl} alt='Picture' className='main__img' />
        </div>

        <div className='main__right'>
          <div className='main__top'>
            <img src={Loc} alt='Location' className='main__logo-loc' />
            <h5 className='main__location'>{props.item.location}</h5>
            <a href={props.item.googleMapsUrl} className='main__nav'>
              View on Google Maps
            </a>
          </div>

          <div className='main__mid'>
            <h1 className='main__title'>{props.item.title}</h1>
            <h3 className='main__date'>
              {props.item.startDate} - {props.item.endDate}
            </h3>
            <p className='main__desc'>{props.item.description}</p>
          </div>
        </div>
      </div>
      <div className='main__line'>&nbsp;</div>
    </main>
  );
}
