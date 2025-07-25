import { FC } from 'react';
import { ISvgIconProps } from './interface';

const ChevronIcon: FC<ISvgIconProps> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
    >
      <g clipPath="url(#clip0_1635_18346)">
        <path
          d="M16.2197 15.2803C16.5126 15.5732 16.9874 15.5732 17.2803 15.2803C17.5732 14.9874 17.5732 14.5126 17.2803 14.2197L12.2803 9.21967C11.9874 8.92678 11.5126 8.92678 11.2197 9.21967L6.21967 14.2197C5.92678 14.5126 5.92678 14.9874 6.21967 15.2803C6.51256 15.5732 6.98744 15.5732 7.28033 15.2803L11.75 10.8107L16.2197 15.2803Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
      <g clipPath="url(#clip0)">
        <path
          d="M16.2197 15.2803C16.5126 15.5732 16.9874 15.5732 17.2803 15.2803C17.5732 14.9874 17.5732 14.5126 17.2803 14.2197L12.2803 9.21967C11.9874 8.92678 11.5126 8.92678 11.2197 9.21967L6.21967 14.2197C5.92678 14.5126 5.92678 14.9874 6.21967 15.2803C6.51256 15.5732 6.98744 15.5732 7.28033 15.2803L11.75 10.8107L16.2197 15.2803Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};
export default ChevronIcon;
