import clsx from 'clsx';
import keyboardKey from 'keyboard-key';
import React from 'react';
import styled from 'styled-components';
import type { KindProps, RothkoKind } from '../Theme/types';
import { keyDownFactory } from '../utils/keyUtils';

type CheckboxProps = {
  checked?: boolean;
  children?: React.ReactNode;
  className?: string;
  error?: boolean;
  id?: string;
  kind?: RothkoKind;
  onChange: (val: boolean) => void;
  required?: boolean;
  style?: React.CSSProperties;
  withCheck?: boolean;
};

const Checkbox = ({
  checked,
  children,
  className,
  error,
  id,
  kind,
  onChange,
  required,
  style,
  withCheck,
}: CheckboxProps) => {
  const handleChange = () => onChange(!checked);
  const onKeyDown = keyDownFactory({ [keyboardKey.Enter]: handleChange });
  return (
    <CheckboxContainerDiv style={style} className={className}>
      <StyledCheckboxDiv
        aria-invalid={!!error}
        aria-required={!!required}
        className={clsx({ error, checked, ['with-check']: withCheck })}
        id={id}
        kind={kind}
        onChange={handleChange}
        onClick={handleChange}
        onKeyDown={onKeyDown}
        role="checkbox"
        tabIndex={0}
      />
      <div>{children}</div>
    </CheckboxContainerDiv>
  );
};

const CheckboxContainerDiv = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.3rem;
`;

const StyledCheckboxDiv = styled.div<KindProps>`
  -webkit-tap-highlight-color: transparent;
  background-color: var(--basic-200);
  cursor: pointer;

  width: 0.7rem;
  height: 0.7rem;

  border-radius: 1px;
  padding: 0.25rem;

  -webkit-transition: background-color 0.1s ease;
  -moz-transition: background-color 0.1s ease;
  -ms-transition: background-color 0.1s ease;
  transition: background-color 0.1s ease;

  &.checked {
    background-color: ${({ kind = 'secondary' }) => `var(--${kind}-500)`};

    &.with-check {
      background-image: url('data:image/svg+xml,%0A%20%20%20%20%3Csvg%20width%3D%2217%22%20height%3D%2213%22%20viewBox%3D%220%200%2017%2013%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%20%20%3Cpath%20d%3D%22M6.50002%2012.6L0.400024%206.60002L2.60002%204.40002L6.50002%208.40002L13.9%200.900024L16.1%203.10002L6.50002%2012.6Z%22%20fill%3D%22%23FFFFFF%22%2F%3E%0A%20%20%20%20%3C%2Fsvg%3E%0A%20%20');
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      background-origin: content-box;
    }
  }

  &:focus-visible {
    outline: 1px solid var(--info-300);
  }

  &.error:not(:focus) {
    background-color: var(--danger-transparent-500);
  }
`;

export default Checkbox;
