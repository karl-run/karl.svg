import React, { Fragment } from 'react';
import { Keyframes, config } from 'react-spring';
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

const createHandAnimator = (direction = 1) => {
  let x = 0;
  let y = 0;

  return Keyframes.Spring(async next => {
    while (true) {
      const nextX = Math.random() * 15 * (direction == null ? 1 : direction);
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

const CircleEntry = Keyframes.Spring(async next => {
  await next({
    from: { scale: 0 },
    to: { scale: 1.2 },
    config: config.wobbly,
    delay: 500,
  });
  await next({
    from: { scale: 1.2 },
    to: { scale: 1 },
    config: config.wobbly,
  });
});

const ThingsEntry = Keyframes.Spring(async next => {
  await next({ delay: 200, to: { desk: -500, body: -500, cup: 200 } });
  await next({ to: { desk: 0, body: -500, cup: 200 }, config: config.wobbly });
  await next({ to: { desk: 0, body: 0, cup: 200 }, config: config.wobbly });
  await next({ to: { desk: 0, body: 0, cup: 0 }, config: config.wobbly });
});

const Animated = ({ noEntry }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
    <Defs />
    <CircleEntry immediate={noEntry}>
      {({ scale }) => <Circle scale={scale} />}
    </CircleEntry>
    <ThingsEntry immediate={noEntry}>
      {things => (
        <Fragment>
          <Shirt x={things.body} />
          <Head x={things.body}>
            <Eyes />
            <Nose />
            <Glasses />
            <FacialHair />
          </Head>
          <Desk x={things.desk}>
            <Keyboard />
          </Desk>
          <CoffeeCup x={things.cup} />
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
                      <Arm
                        left
                        x={values.x + things.body}
                        y={values.y}
                        fingerOffset={offset}
                      />
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
                      <Arm
                        right
                        x={values.x + things.body}
                        y={values.y}
                        fingerOffset={offset}
                      />
                    )}
                  </FingerAnimator>
                );
              }}
            </RightHandAnimator>
          </g>
        </Fragment>
      )}
    </ThingsEntry>
  </svg>
);

Animated.defaultProps = {
  noEntry: false,
};

export default Animated;
