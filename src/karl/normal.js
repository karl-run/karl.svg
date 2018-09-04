import React from 'react';

import {
  Defs,
  Circle,
  Shirt,
  Head,
  Eyes,
  Nose,
  Glasses,
  FacialHair,
  Desk,
  CoffeeCup,
  Keyboard,
  Hand,
} from './parts';

const Normal = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
    <Defs />
    <Circle />
    <Shirt />
    <Head>
      <Eyes />
      <Nose />
      <Glasses />
      <FacialHair />
    </Head>
    <Desk>
      <CoffeeCup />
      <Keyboard />
    </Desk>

    <Hand left />
    <Hand right />
  </svg>
);

export default Normal;
