import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const SvgStopCircleOutline = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    role="img"
    ref={ref}
    {...props}
  >
    <g data-name="Layer 2">
      <g data-name="stop-circle">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
        <path d="M14.75 8h-5.5A1.25 1.25 0 0 0 8 9.25v5.5A1.25 1.25 0 0 0 9.25 16h5.5A1.25 1.25 0 0 0 16 14.75v-5.5A1.25 1.25 0 0 0 14.75 8zM14 14h-4v-4h4z" />
      </g>
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgStopCircleOutline);
export default ForwardRef;
