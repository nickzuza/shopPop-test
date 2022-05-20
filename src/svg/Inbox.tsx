import { FC } from 'react';
import { SVGProp } from '../types';

export const InboxIcon:FC<SVGProp> = () => {
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
          fillRule="evenodd"
          d="M14 6.523a.875.875 0 00-.255-.618L9.864 2.008a.875.875 0 00-.62-.258H4.756a.875.875 0 00-.62.256l-3.88 3.88a.875.875 0 00-.256.62v3.941c0 1.059.885 1.91 1.936 1.91H12.09c1.055 0 1.909-.855 1.909-1.91zm-9.05.37h-3.5l3.587-3.587h3.946l3.573 3.597-3.505-.01v.213c0 1.021-.926 2.05-2.051 2.05s-2.05-1.029-2.05-2.05z"
          clipRule="evenodd"
        ></path>
      </svg>
    );
  }