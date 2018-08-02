import React from 'react';

export const Defs = () => (
  <defs>
    <style>
      {`.cls-3{fill: #e2c2a6}.cls-4,.cls-9{fill: #e4f4f9}.cls-5{fill: #c28d8b}.cls-6{fill: #a67c52}.cls-7{fill: #1a1a1a}.cls-19,.cls-8{fill: none;stroke-miterlimit:10}.cls-8{stroke: #333;stroke-width:3.12px}.cls-9{opacity: .45}.cls-10{fill: #333}.cls-11{fill: #b5e2f4}.cls-15{fill: #e6e6e6}.cls-16{fill: #ccc}.cls-19{stroke: #e4f4f9;stroke-linecap:round;stroke-width:1.04px;opacity:.78}.cls-20{fill: #e6cfbf}`}
    </style>
  </defs>
);

export const Circle = ({ rotation, scale }) => (
  <ellipse
    transform={`rotate(${rotation}) scale(${scale})`}
    transform-origin="center"
    fill="#07897c"
    cx="250"
    cy="250"
    rx="197"
    ry="197"
  />
);

Circle.defaultProps = {
  rotation: 0,
  scale: 1,
};

export const Head = ({ children, x, y }) => (
  <g transform={`translate(${x} ${y})`}>
    {/* høyre øre ytterst */}
    <ellipse
      cx="310.8"
      cy="222.3"
      className="cls-3"
      rx="15.9"
      ry="11.3"
      transform="rotate(-69 310.8 222.3)"
    />
    {/* høyre øre indre */}
    <ellipse
      cx="310.8"
      cy="222.3"
      className="cls-5"
      rx="9.2"
      ry="6.5"
      transform="rotate(-69 310.8 222.3)"
    />
    {/* venstre øre ytterst */}
    <ellipse
      cx="199.9"
      cy="222.3"
      className="cls-3"
      rx="11.3"
      ry="15.9"
      transform="rotate(-21 199.9 222.3)"
    />

    {/* venstre øre indre */}
    <ellipse
      cx="199.9"
      cy="222.3"
      className="cls-5"
      rx="6.5"
      ry="9.2"
      transform="rotate(-21 199.9 222.3)"
    />

    {/* head */}
    <rect
      width="34.1"
      height="42.5"
      x="237.3"
      y="271.3"
      className="cls-3"
      rx="12"
      ry="4"
    />
    <path
      d="M263.6 285l-18.3-.5c-20.5-.3-42.1-18.7-41.9-40.9l-5-61.7c.3-23.6 19-42.5 41.9-42l31.8.5c22.8.5 41.1 20 40.8 43.6l-6.4 61.6c-.3 22.2-22.4 39.9-42.9 39.5z"
      className="cls-3"
    />
    <path
      d="M274.2 193c.4-3.1 21-5.3 22-2s6.3 2 5.3-1.4c-2-6.5-12.7-5.7-17.7-5.1s-14.3 2-15 8.5c-.3 3.5 5.1 3.5 5.5 0zM214 191.2c.7-2.2 9.6-1.5 11.4-1.4 1.5.1 10.4 1.2 10.6 2.9.4 3.4 5.9 3.5 5.5 0-.8-6.5-10-7.7-15.2-8.3s-15.7-1-17.6 5.4c-1 3.4 4.3 4.8 5.3 1.4z"
      className="cls-6"
    />
    <ellipse
      cx="290.8"
      cy="159.2"
      className="cls-20"
      rx="6.2"
      ry="12.4"
      transform="rotate(-60 290.8 159.2)"
    />
    <circle cx="268.9" cy="149.3" r="2.6" className="cls-20" />

    {/* mouth */}
    <path
      d="M243 265.4a22 22 0 0 1 24.6 0c3 2.2 7.6-1.3 4.6-3.4a30.2 30.2 0 0 0-33.9 0c-3 2.1 1.6 5.6 4.6 3.4z"
      className="cls-5"
    />

    {children}
  </g>
);

Head.defaultProps = {
  x: 0,
  y: 0,
};

export const Shirt = ({ x, y }) => (
  <g transform={`translate(${x} ${y})`}>
    <ellipse cx="254.8" cy="305.1" fill="#a6d0dd" rx="27.4" ry="9.7" />
    <path d="M238.7 311.9H271v22.2h-32.3z" className="cls-4" />
    <path
      d="M294.7 310.8l-11.6 2-29.4 18.2 20.5-24.3 5.1-5.9 15.4 10z"
      className="cls-11"
    />
    <path
      d="M214.8 310.8l11.6 2 29.4 18.2-20.5-24.3-5.4-5.7-15.1 9.8z"
      className="cls-11"
    />
    <path
      d="M204 379.3c0-24.3 7-46.1 18.3-60.6a53.7 53.7 0 0 1 11.4-11.1l21.2 22.7 19.5-23.6a52.2 52.2 0 0 1 12.3 11.4 99.6 99.6 0 0 1 18.8 61.2z"
      className="cls-11"
    />
    <circle cx="254.4" cy="340.1" r="2.9" className="cls-4" />
    <circle cx="254.4" cy="357.5" r="2.9" className="cls-4" />
    <circle cx="254.4" cy="374.9" r="2.9" className="cls-4" />
  </g>
);

Shirt.defaultProps = {
  x: 0,
  y: 0,
};

export const Eyes = ({ x, y }) => (
  <g transform={`translate(${x} ${y})`}>
    <ellipse cx="282.2" cy="210.3" className="cls-7" rx="7.3" ry="5.7" />
    <ellipse cx="227" cy="210.3" className="cls-7" rx="7.3" ry="5.7" />
  </g>
);

Eyes.defaultProps = {
  x: 0,
  y: 0,
};

export const Nose = ({ x, y }) => (
  <g transform={`translate(${x} ${y})`}>
    <path
      d="M246.4 238.3l4.9-28.2c1.1-5.9 1.8-8.3 4-8.3s2.6 2.5 4 8.3l4.8 28.2a8.8 8.8 0 0 1-8.8 8.9 8.8 8.8 0 0 1-8.9-8.9z"
      className="cls-5"
    />
  </g>
);

Nose.defaultProps = {
  x: 0,
  y: 0,
};

export const Glasses = ({ x, y }) => (
  <g transform={`translate(${x} ${y})`}>
    {/* housing */}
    <path
      d="M292.1 221.8h-20a6.8 6.8 0 0 1-6.5-5.7l-2-12.4c0-2.9 2.6-5.3 6-5.3h25.2c3.3 0 6.6 1.9 6 5.3l-2 12.4a7.2 7.2 0 0 1-6.7 5.7zM217.3 221.8h20a6.8 6.8 0 0 0 6.5-5.7l2-12.4c0-2.9-2.6-5.3-6-5.3h-25.2c-3.2 0-6.5 1.9-6 5.3l2 12.4a7.2 7.2 0 0 0 6.7 5.7z"
      className="cls-8"
    />

    {/* lens */}
    <path
      d="M291.5 221h-18.8a6.4 6.4 0 0 1-6-5.3l-2-11.6c0-2.7 2.5-5 5.6-5H294c3 0 6.1 1.8 5.6 5l-2 11.6a6.7 6.7 0 0 1-6.1 5.3zM218 221h18.7a6.3 6.3 0 0 0 6-5.3l2-11.6c0-2.7-2.5-5-5.6-5h-23.6c-3.1 0-6.2 1.8-5.6 5l1.9 11.6a6.7 6.7 0 0 0 6.1 5.3z"
      className="cls-9"
    />

    {/* earthingies */}
    <path
      d="M300.1 210.7l11-2.7c1.7-.4 1-3-.7-2.5l-11 2.6c-1.6.4-.9 3 .7 2.6zM209.6 208.1l-11-2.6c-1.6-.4-2.3 2.1-.7 2.5l11 2.6c1.7.4 2.3-2 .7-2.5z"
      className="cls-10"
    />
    <path
      d="M213.2 210.9l14.1-9.1M220 211.1l14.1-9.2M268.6 210.9l14.1-9.1M275.4 211.1l14.1-9.2"
      className="cls-19"
    />
    <path
      d="M246.6 209c.8-5.3 16-5.2 16.7 0 .2 1.4 2.3.8 2.1-.5-1-7.5-19.8-7.5-20.9 0-.1 1.3 2 2 2.1.6z"
      className="cls-10"
    />
  </g>
);

Glasses.defaultProps = {
  x: 0,
  y: 0,
};

export const FacialHair = ({ x, y }) => (
  <g transform={`translate(${x} ${y})`}>
    {/* beard */}
    <path
      d="M302 242.3c-5.9 18-21.2 27.3-31.5 32.9a33.8 33.8 0 0 1-29.7 0c-10.3-5.6-25.6-15-31.5-32.9l-8.7-35.6 2.8 42.3c.3 22.5 11.2 34 29.2 46a27 27 0 0 0 15.2 3l7.9-.2 8 .2a27 27 0 0 0 15.1-3c18-11.9 29-23.5 29.2-46l2.8-42.3z"
      className="cls-6"
    />

    {/* mustache */}
    <path
      d="M250.4 245.6l-26 11.4c-3.2 1.3-.5 5.8 2.5 4.5l26.2-11.5c3-1.3.4-5.8-2.6-4.5zM258.1 250l26.2 11.4c3 1.4 5.7-3.1 2.6-4.4l-26.1-11.5c-3-1.3-5.7 3.2-2.7 4.5z"
      className="cls-6"
    />
  </g>
);

FacialHair.defaultProps = {
  x: 0,
  y: 0,
};

export const Desk = ({ children, x, y }) => (
  <g transform={`translate(${x} ${y})`}>
    <path fill="#b3b3b3" d="M421 435.5H89.8l20.4-57.6h281.4l29.4 57.6z" />
    <path fill="gray" d="M89.8 435.5H421v10.1H89.8z" />
    {children}
  </g>
);

Desk.defaultProps = {
  x: 0,
  y: 0,
};

export const Keyboard = ({ x, y }) => (
  <g transform={`translate(${x} ${y})`}>
    <path fill="#c69c6d" d="M336 418.4H175.4l9.9-33.5h136.4l14.3 33.5z" />
    <path fill="#8c6239" d="M175.4 418.4H336v6.9H175.4z" />
    <path d="M322.5 407.6H188.8l4.3-20.2h122.8l6.6 20.2z" className="cls-15" />
    <path d="M188.8 407.6h133.7v4.1H188.8z" className="cls-16" />
  </g>
);

Keyboard.defaultProps = {
  x: 0,
  y: 0,
};

export const CoffeeCup = ({ x, y }) => (
  <g transform={`translate(${x} ${y})`}>
    <path
      d="M374.8 405.9a42.3 42.3 0 0 1-22 0 5.9 5.9 0 0 1-4-5.4V377c0-2.2 1.8-3.4 4-2.8a42.3 42.3 0 0 0 22 0c2.2-.6 4 .6 4 2.8v23.6a5.9 5.9 0 0 1-4 5.4z"
      className="cls-15"
    />
    <path
      d="M378.4 375.8c0 1-1.5 2-4 2.7a45.6 45.6 0 0 1-21.2 0c-2.4-.7-4-1.7-4-2.7 0-2.2 6.6-4 14.7-4s14.5 1.8 14.5 4z"
      className="cls-16"
    />
    <path
      fill="#603813"
      d="M374.4 378.5a45.6 45.6 0 0 1-21.2 0c.4-1.5 5-2.7 10.7-2.7s10.2 1.2 10.5 2.7z"
    />
    <path
      d="M385.8 388.4c-.3 6.4-10 6.5-10 0s9.7-6.4 10 0c0 1.6 2.5 1.6 2.4 0a7.4 7.4 0 1 0-7.7 7.4 7.5 7.5 0 0 0 7.7-7.4c.1-1.5-2.3-1.5-2.4 0z"
      className="cls-15"
    />
  </g>
);

CoffeeCup.defaultProps = {
  x: 0,
  y: 0,
};

export const Arm = ({ right, x, y }) => {
  let offset = 0;
  if (right) offset = 84.3;

  return (
    <g transform={`translate(${x} ${y})`}>
      <circle cx={213 + offset} cy="374.3" r="13.6" className="cls-3" />
      <rect
        width="21.1"
        height="5.4"
        x="191.5"
        y={381.8 - offset}
        className="cls-3"
        rx="2.6"
        ry="2.6"
        transform="rotate(90 202 384.5)"
      />
      <rect
        width="21.1"
        height="5.4"
        x="198.8"
        y={381.8 - offset}
        className="cls-3"
        rx="2.6"
        ry="2.6"
        transform="rotate(90 209.4 384.5)"
      />
      <rect
        width="21.1"
        height="5.4"
        x="206.1"
        y={381.8 - offset}
        className="cls-3"
        rx="2.6"
        ry="2.6"
        transform="rotate(90 216.6 384.5)"
      />
      <rect
        width="21.1"
        height="5.4"
        x="213.3"
        y={381.8 - offset}
        className="cls-3"
        rx="2.6"
        ry="2.6"
        transform="rotate(90 224 384.5)"
      />
    </g>
  );
};

Arm.defaultProps = {
  x: 0,
  y: 0,
};
