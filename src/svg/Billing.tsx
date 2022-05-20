import { FC } from 'react';
import { SVGProp } from '../types';

export const BillingIcon: FC<SVGProp> = () => {
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
                d="M12.25 0H1.75C1.225 0 .875.35.875.875V14L3.5 12.25 5.25 14 7 12.25 8.75 14l1.75-1.75L13.125 14V.875c0-.525-.35-.875-.875-.875zM10.5 8.75h-7V7h7zm0-3.5h-7V3.5h7z"
            ></path>
        </svg>
    );
  }
  