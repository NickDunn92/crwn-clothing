import React from 'react';

/*
  withRouter is a higher-order component. A higher-order component is essentially a function that takes a component as an argument
  and returns a modified component. This higher-order component which will give it access to the match, location and history properties. 
*/
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

// We pass history in as a prop,
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} menu-item`}

    /* 
      and we use history by dynamically pushing our linkUrl value from the clothingItems object, into history when an onClickEvent happens. 
      We also use match so that that the url matches our linkUrl value.
    */
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }} 
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);