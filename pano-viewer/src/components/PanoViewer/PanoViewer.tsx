import React, { useLayoutEffect } from 'react';
import { BottomBar } from '../BottomBar/BottomBar';
import { LeftBar } from '../LeftBar/LeftBar';
import { ZoomBar } from '../ZoomBar/ZoomBar';
import { init, animate } from '../ThreeCanvas/ThreeCanvas';

import './styles.css'

export const PanoViewer = () => {
  useLayoutEffect(() => {
    init();
    animate();
  }, []);

  return (
    <div id='container'>
      <LeftBar></LeftBar>
      <BottomBar></BottomBar>
      <ZoomBar></ZoomBar>
    </div>
  );
};