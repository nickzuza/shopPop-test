import { FC } from 'react';
import { SVGProp } from '../types';

export const ChevronDownIcon: FC<SVGProp> = () => {
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
        d="M7.35 10.325L2.625 5.6 3.85 4.375l3.5 3.5 3.5-3.5L12.075 5.6z"
      ></path>
    </svg>
  );
}
