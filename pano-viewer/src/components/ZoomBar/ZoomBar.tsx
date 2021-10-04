import React from 'react';
import { onDocumentMouseWheel } from '../ThreeCanvas/ThreeCanvas';

import './styles.css';

export const ZoomBar = () => {
  return (
    <div className='zoom-wrapper'>
      <div className='bottom-bar'>
        <div className='button' onClick={onDocumentMouseWheel}>
          +
          {/* <ion-icon name='remove-outline' size='large' role='zoom-out'></ion-icon> */}
        </div>
        <div className='button' onClick={onDocumentMouseWheel}>
          -
          {/* <ion-icon name='add-outline' size='large' role='zoom-in'></ion-icon> */}
        </div>
      </div>
    </div>
  );
};
