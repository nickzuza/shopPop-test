import { FC } from 'react';
import { SVGProp } from '../types';

export const HomeIcon:FC<SVGProp> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      fill="none"
      viewBox="0 0 14 14"
    >
      <path
        fill="#454545"
        d="M13.676 5.289L7.536.195a.835.835 0 00-1.072 0L.324 5.29C-.31 5.815.049 6.875.86 6.875h.987v6.234c0 .492.385.891.86.891h1.717c.474 0 .858-.399.858-.89v-2.69h3.436v2.69c0 .491.384.89.858.89h1.718c.474 0 .859-.399.859-.89V6.874h.986c.812 0 1.17-1.06.537-1.586z"
      ></path>
    </svg>
  );
}
