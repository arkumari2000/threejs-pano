import React from 'react';
import { Icon } from '@material-ui/core';
import { Add, RemoveSharp } from '@material-ui/icons';
import './styles.css';

export const ZoomBar: React.FC = () => {
  return (
    <div className='zoom-wrapper'>
      <div className='bottom-bar zoom-bar'>
        <div className='button'>
          <Icon component={RemoveSharp}></Icon>
        </div>
        <div className='button'>
          <Icon component={Add}></Icon>
        </div>
      </div>
    </div>
  );
};
