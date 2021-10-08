import React from 'react';
import { Icon } from '@material-ui/core';
import {
  CropSquareSharp,
  VerticalSplitSharp,
  InboxSharp,
} from '@material-ui/icons';

import './styles.css';

export const BottomBar: React.FC = () => {
  return (
    <div className='bottom-wrapper'>
      <div className='bottom-bar'>
        <div className='button'>
          <Icon component={CropSquareSharp}></Icon>
        </div>
        <div className='button'>
          <Icon component={VerticalSplitSharp}></Icon>
        </div>
        <div className='button'>
          <Icon component={InboxSharp}></Icon>
        </div>
      </div>
    </div>
  );
};
