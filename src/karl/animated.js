import React, { Fragment } from 'react';
import { Keyframes, animated, Spring, config } from 'react-spring';
import {
  TimingAnimation,
  OscillatorAnimation,
  Easing,
} from 'react-spring/dist/addons.cjs';

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

const createHandAnimator = (mod = 1) => {
  let x = 0;
  let y = 0;

  return Keyframes.Spring(async next => {
    while (true) {
      const nextX = Math.random() * 15 * mod;
      const nextY = Math.random() * 5;
      await next({
        from: {
          x: x,
          y: y,
        },
        to: {
          x: nextX,
          y: nextY,
        },
      });
      x = nextX;
      y = nextY;
    }
  });
};

const LeftHandAnimator = createHandAnimator(1);
const RightHandAnimator = createHandAnimator(-1);

const FingerAnimator = Keyframes.Spring(async next => {
  while (true) {
    await next({
      from: { offset: -1 },
      to: { offset: 1 },
    });
    await next({
      from: { offset: 1 },
      to: { offset: -1 },
    });
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
          <Shirt x={styles.right * 2.3} />
          <Head x={-styles.right * 2.5}>
            <Eyes x={styles.right * 2.6} />
            <Nose x={-styles.right * 2.8} />
            <Glasses x={styles.right * 3.1} />
            <FacialHair x={-styles.right * 2.4} />
          </Head>
          <Desk x={styles.right * 2.5}>
            <CoffeeCup x={-styles.right * 2.3} />
            <Keyboard x={styles.right * 1.7} />
          </Desk>
        </Fragment>
      )}
    </Spring>

    <g>
      <LeftHandAnimator
        impl={TimingAnimation}
        delay={37}
        config={{ duration: 137, easing: Easing.cubic }}
      >
        {values => {
          return (
            <FingerAnimator
              impl={TimingAnimation}
              delay={37}
              config={{ duration: 137, easing: Easing.cubic }}
            >
              {({ offset }) => (
                <Arm left x={values.x} y={values.y} fingerOffset={offset} />
              )}
            </FingerAnimator>
          );
        }}
      </LeftHandAnimator>
      <RightHandAnimator
        impl={TimingAnimation}
        delay={37}
        config={{ duration: 137, easing: Easing.cubic }}
      >
        {values => {
          return (
            <FingerAnimator
              impl={TimingAnimation}
              delay={29}
              config={{ duration: 169, easing: Easing.cubic }}
            >
              {({ offset }) => (
                <Arm right x={values.x} y={values.y} fingerOffset={offset} />
              )}
            </FingerAnimator>
          );
        }}
      </RightHandAnimator>
    </g>
  </svg>
);

export default Animated;
