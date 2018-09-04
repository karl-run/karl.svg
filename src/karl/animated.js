import React, { Fragment } from 'react';
import { Keyframes, config } from 'react-spring';
import delay from 'delay';
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

const drinkLocations = {
  cup: { x: 99, y: 15 },
  mouth: { x: -12, y: -99 },
};
const doDrink = async next => {
  await next({
    to: {
      x: drinkLocations.cup.x,
      y: drinkLocations.cup.y,
      rotate: 90,
      cup: false,
    },
  });
  await next({
    to: {
      x: drinkLocations.mouth.x,
      y: drinkLocations.mouth.y,
      rotate: 90,
      cup: true,
    },
    delay: 200,
  });
  await next({
    delay: 500,
    to: {
      x: drinkLocations.cup.x,
      y: drinkLocations.cup.y,
      rotate: 90,
      cup: true,
    },
  });
  await next({
    to: {
      x: drinkLocations.cup.x,
      y: drinkLocations.cup.y,
      rotate: 90,
      cup: false,
    },
  });
};

const createHandAnimator = (direction, drink) => {
  let x = 0;
  let y = 0;

  return Keyframes.Spring(async (next, { noDrink }) => {
    await next({
      from: {
        x: 0,
        y: 0,
        rotate: 0,
        cup: false,
      },
    });

    let allowedToDrink = false;
    setTimeout(() => {
      allowedToDrink = true;
    }, 2500);

    while (true) {
      const nextX = Math.random() * 15 * (direction == null ? 1 : direction);
      const nextY = Math.random() * 5;

      if (allowedToDrink && drink && Math.round(Math.random() * 12) === 1) {
        await doDrink(next);
      }

      await next({
        from: {
          x: x,
          y: y,
          rotate: 0,
          cup: false,
        },
        to: {
          x: nextX,
          y: nextY,
          rotate: 0,
          cup: false,
        },
      });
      x = nextX;
      y = nextY;
    }
  });
};

const LeftHandAnimator = createHandAnimator(1, false);
const RightHandAnimator = createHandAnimator(-1, true);

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

const WinkAnimator = Keyframes.Spring(async next => {
  await next({ from: { winkifier: 1 } });
  while (true) {
    await delay(2000 + Math.random() * 2000);
    await next({
      to: { winkifier: 0 },
    });

    await next({
      to: { winkifier: 1 },
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
            <WinkAnimator
              impl={TimingAnimation}
              delay={21}
              config={{ duration: 45, easing: Easing.cubic }}
            >
              {({ winkifier }) => <Eyes winkifier={winkifier} />}
            </WinkAnimator>
            <Nose />
            <Glasses />
            <FacialHair />
          </Head>
          <Desk x={things.desk}>
            <Keyboard />
          </Desk>
          <g>
            <LeftHandAnimator
              impl={TimingAnimation}
              delay={21}
              config={{ duration: 137, easing: Easing.cubic }}
            >
              {values => {
                return (
                  <FingerAnimator
                    impl={TimingAnimation}
                    config={{ duration: 127, easing: Easing.cubic }}
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
              noDrink={things.cup !== 0}
            >
              {values => {
                return (
                  <FingerAnimator
                    impl={TimingAnimation}
                    config={{ duration: 121, easing: Easing.cubic }}
                  >
                    {({ offset }) => (
                      <g>
                        <CoffeeCup
                          x={
                            things.cup
                              ? things.cup
                              : values.cup
                                ? values.x - 99
                                : 0
                          }
                          y={things.cup ? 0 : values.cup ? values.y - 15 : 0}
                        />
                        <Arm
                          right
                          x={values.x + things.body}
                          y={values.y}
                          rotate={values.rotate}
                          fingerOffset={values.rotate ? 0 : offset}
                        />
                      </g>
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
