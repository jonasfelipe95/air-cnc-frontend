/* eslint-disable import/no-anonymous-default-export */
import React from "react";

const BusinessIcon = ({ width = 24, height = 24, color = "#000" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 80 80"
  >
    <path d="M0,0H80V80H0Z" fill="none" />
    <path
      fill={color}
      d="M40,19.444V3H2V77H78V19.444ZM17.2,68.778H9.6V60.556h7.6Zm0-16.444H9.6V44.111h7.6Zm0-16.444H9.6V27.667h7.6Zm0-16.444H9.6V11.222h7.6ZM32.4,68.778H24.8V60.556h7.6Zm0-16.444H24.8V44.111h7.6Zm0-16.444H24.8V27.667h7.6Zm0-16.444H24.8V11.222h7.6Zm38,49.333H40V60.556h7.6V52.333H40V44.111h7.6V35.889H40V27.667H70.4ZM62.8,35.889H55.2v8.222h7.6Zm0,16.444H55.2v8.222h7.6Z"
      transform="translate(0 0)"
    />
  </svg>
);

const PersonIcon = ({ width = 24, height = 24, color = "#000" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 80 80"
  >
    <path d="M0,0H80V80H0Z" fill="none" />
    <path
      fill={color}
      d="M40,13a9,9,0,1,1-9,9,9.026,9.026,0,0,1,9-9m0,45c12.15,0,26.1,5.8,27,9H13c1.035-3.24,14.895-9,27-9M40,4A18,18,0,1,0,58,22,18,18,0,0,0,40,4Zm0,45C27.985,49,4,55.03,4,67v9H76V67C76,55.03,52.015,49,40,49Z"
    />
  </svg>
);

const NewUserIcon = ({ width = 24, height = 24, color = "#000" }) => (
  <svg width={width} height={height} viewBox="0 0 24 24">
    <path
      fill={color}
      d="M15,14C12.33,14 7,15.33 7,18V20H23V18C23,15.33 17.67,14 15,14M6,10V7H4V10H1V12H4V15H6V12H9V10M15,12A4,4 0 0,0 19,8A4,4 0 0,0 15,4A4,4 0 0,0 11,8A4,4 0 0,0 15,12Z"
    />
  </svg>
);

const LoginIcon = ({ width = 24, height = 24, color = "#000" }) => (
  <svg width={width} height={height} viewBox="0 0 24 24">
    <path
      fill={color}
      d="M10,17V14H3V10H10V7L15,12L10,17M10,2H19A2,2 0 0,1 21,4V20A2,2 0 0,1 19,22H10A2,2 0 0,1 8,20V18H10V20H19V4H10V6H8V4A2,2 0 0,1 10,2Z"
    />
  </svg>
);

export default { BusinessIcon, PersonIcon, NewUserIcon, LoginIcon };
