import { FC } from 'react';
import { SVGProp } from '../types';

export const SelectIcon: FC<SVGProp> = ({ width = 14, height = 14, fill="#454545" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 14 14"
    >
      <g fill={fill}>
        <path d="M10.5 5.25L7 0 3.5 5.25H7zM10.5 8.75L7 14 3.5 8.75H7z"></path>
      </g>
    </svg>
  );
};
