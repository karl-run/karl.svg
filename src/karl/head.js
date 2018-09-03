import React from 'react';

import { Defs, Circle, Head, Eyes, Nose, Glasses, FacialHair } from './parts';

const Normal = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
    <Defs />
    <Circle />
    <Head noNeck scale={2.1} y={69} x={-10}>
      <Eyes />
      <Nose />
      <Glasses />
      <FacialHair />
    </Head>
  </svg>
);

export default Normal;
