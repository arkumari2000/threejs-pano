import React from 'react';
import { Icon } from '@material-ui/core';
import {
  DehazeSharp,
  DomainSharp,
  InfoSharp,
  ShareSharp,
} from '@material-ui/icons';

import './styles.css';

export const LeftBar = () => {
  return (
    <div className='left-wrapper'>
      <div className='bottom-bar'>
        <div className='button'>
          <Icon component={DehazeSharp}></Icon>
        </div>
        <div className='button'>
          <Icon component={DomainSharp}></Icon>
        </div>
        <div className='button'>
          <Icon component={InfoSharp}></Icon>
        </div>
        <div className='button'>
          <Icon component={ShareSharp}></Icon>
        </div>
      </div>
    </div>
  );
};
