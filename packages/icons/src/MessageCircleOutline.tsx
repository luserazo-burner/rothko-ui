import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const SvgMessageCircleOutline = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="#ccc"
    width="1em"
    height="1em"
    role="img"
    ref={ref}
    {...props}
  >
    <circle cx={12} cy={12} r={1} />
    <circle cx={16} cy={12} r={1} />
    <circle cx={8} cy={12} r={1} />
    <path d="M19.07 4.93a10 10 0 0 0-16.28 11 1.06 1.06 0 0 1 .09.64L2 20.8a1 1 0 0 0 .27.91A1 1 0 0 0 3 22h.2l4.28-.86a1.26 1.26 0 0 1 .64.09 10 10 0 0 0 11-16.28zm.83 8.36a8 8 0 0 1-11 6.08 3.26 3.26 0 0 0-1.25-.26 3.43 3.43 0 0 0-.56.05l-2.82.57.57-2.82a3.09 3.09 0 0 0-.21-1.81 8 8 0 0 1 6.08-11 8 8 0 0 1 9.19 9.19z" />
  </svg>
);

const ForwardRef = forwardRef(SvgMessageCircleOutline);
export default ForwardRef;
