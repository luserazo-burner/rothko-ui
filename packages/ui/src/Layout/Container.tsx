import React, { useMemo } from 'react';
import type { CSSProperties } from 'styled-components';
import styled from 'styled-components';
import type { RothkoKind } from '../Theme';
import { isRothkoKind } from '../Theme';

export type CustomColorCssProperties = Omit<
  CSSProperties,
  'color' | 'backgroundColor' | 'borderColor'
> &
  Pick<React.HTMLAttributes<HTMLDivElement>, 'onFocus' | 'onBlur' | 'onClick' | 'aria-label'> & {
    color?: RothkoKind | string;
    backgroundColor?: RothkoKind | string;
    borderColor?: RothkoKind | string;
    onFocus?: (e: React.FocusEvent<HTMLElement, Element>) => void;
    onBlur?: (e: React.FocusEvent<HTMLElement, Element>) => void;
  };

export const useStyleProps = ({
  backgroundColor,
  borderColor,
  color,
  ...rest
}: CustomColorCssProperties) => {
  const style = useMemo(() => {
    let baseStyle = {};
    if (color) {
      baseStyle = {
        ...baseStyle,
        color: isRothkoKind(color) ? `var(--rothko-${color}-500, #000)` : color,
      };
    }
    if (backgroundColor) {
      baseStyle = {
        ...baseStyle,
        backgroundColor: isRothkoKind(backgroundColor)
          ? `var(--rothko-${backgroundColor}-500, #000)`
          : color,
      };
    }
    if (borderColor) {
      baseStyle = {
        ...baseStyle,
        borderColor: isRothkoKind(borderColor) ? `var(--rothko-${borderColor}-500, #000)` : color,
      };
    }
    if (rest) {
      baseStyle = { ...baseStyle, ...rest };
    }
    return baseStyle;
  }, [backgroundColor, borderColor, color, rest]);

  return style;
};

type ContainerProps = CustomColorCssProperties & {
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  className?: string;
};

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  (
    { as, children, className, onBlur, onClick, onFocus, ['aria-label']: ariaLabel, ...styles },
    ref
  ) => {
    const style = useStyleProps(styles);
    return (
      <StyledContainerDiv
        ref={ref}
        as={as}
        onBlur={onBlur}
        onClick={onClick}
        onFocus={onFocus}
        aria-label={ariaLabel}
        className={className}
        style={style}
      >
        {children}
      </StyledContainerDiv>
    );
  }
);

Container.displayName = 'Container';

const StyledContainerDiv = styled.div``;

export default Container;
