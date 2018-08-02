import React, { Fragment } from 'react';
import { Keyframes, animated, Spring, config } from 'react-spring';
import { TimingAnimation, Easing } from 'react-spring/dist/addons.cjs';

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
  Arm,
} from './parts';

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

const EndlessRotation = Keyframes.Spring(async next => {
  await next({
    from: { scale: 0 },
    to: { scale: 1.2 },
    config: config.wobbly,
  });
  await next({
    from: { scale: 1.2 },
    to: { scale: 1 },
    config: config.wobbly,
  });
  while (true) {
    await next({
      from: { degrees: 0 },
      to: { degrees: 360 },
      config: config.default,
    });
  }
});

const Animated = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
    <Defs />
    <EndlessRotation>
      {({ scale, degrees }) => <Circle rotation={degrees} scale={scale} />}
    </EndlessRotation>
    <Spring from={{ right: 200 }} to={{ right: 0 }} config={config.wobbly}>
      {styles => (
        <Fragment>
          <Shirt x={styles.right * 1.3} />
          <Head x={-styles.right * 1.5}>
            <Eyes x={styles.right * 1.6} />
            <Nose x={-styles.right * 1.8} />
            <Glasses x={styles.right * 2.1} />
            <FacialHair x={-styles.right * 2.4} />
          </Head>
          <Desk x={styles.right * 1.5}>
            <CoffeeCup x={-styles.right * 1.3} />
            <Keyboard x={styles.right * 0.7} />
          </Desk>
        </Fragment>
      )}
    </Spring>

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
