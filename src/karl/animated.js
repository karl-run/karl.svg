import React from 'react';
import { Keyframes, animated } from 'react-spring';
import { TimingAnimation, Easing } from 'react-spring/dist/addons.cjs';

import { Defs, Circle, Shirt, Head, Eyes, Nose, Glasses, FacialHair, Desk, CoffeeCup, Keyboard, Arm } from './parts';

let prev = 0;
const HandAnimator = Keyframes.Spring(async next => {
  while (true) {
    const nextVal = Math.random() * 20;
    await next({
      from: {
        leftLateral: prev,
        rightLateral: prev,
      },
      to: {
        leftLateral: nextVal,
        rightLateral: nextVal,
      },
    });
    prev = nextVal;
  }
});

const Animated = () => (
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

    <HandAnimator>
      {values => {
        return (
          <g>
            <Arm left x={values.leftLateral} y={values.leftLateral} />
            <Arm right x={values.rightLateral} y={values.leftLateral} />
          </g>
        );
      }}
    </HandAnimator>
  </svg>
);

export default Animated;
