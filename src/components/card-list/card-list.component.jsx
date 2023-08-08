import { Component } from 'react';
import Card from '../card/card.component';

const CardList = ({monsters}) => (
  //console.log(this.props.monsters);
  //console.log('render from CardList');
  //console.log(this.props);
  <div className='card-list'>
    {monsters.map((monster) => {
      return<Card monster={monster}/>;
    })}
  </div>
);

export default CardList;