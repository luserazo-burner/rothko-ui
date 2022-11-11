import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const SvgMinus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <path d="M19 13H5a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2z" data-name="minus" />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgMinus);
export default ForwardRef;
