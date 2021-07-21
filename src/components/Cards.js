import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Meet the Team!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Inwon'
              label='Professor'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Christopher Ng'
              label='Teaching Assistant'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Alexander Montes'
              label='Mentor'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Nishant Srivastava'
              label='Adventure'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Megan Goulet'
              label='Student Lead'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;