import React, { Component } from 'react';
import MenuItem from '../menu-item/menu-item.component';
import ClothingItems from './clothingItems.data';
import './directory.styles.scss';

class Directory extends Component {
  constructor() {
    super();
    this.state = {
      ClothingItems
    }
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.ClothingItems.map(({id, ...otherClothingItems}) => (
          <MenuItem key={id} {...otherClothingItems} />
        ))}
      </div>
    );
  }
}

export default Directory;