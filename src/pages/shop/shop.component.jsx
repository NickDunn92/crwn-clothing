import React, { Component } from 'react'
import ShopData from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

class ShopPage extends Component {
  constructor() {
    super();
    this.state = {
      ShopData
    }
  }

  render() {
    const {ShopData} = this.state;
    return (<div className='shop-page'>
      {
        ShopData.map(({ id, ...ShopData }) => (
          <CollectionPreview key={id} {...ShopData} />
        ))
      }
    </div>);
  }
}

export default ShopPage;