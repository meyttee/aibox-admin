import { MutableRefObject } from 'react';

/**
 * passes {value} to {ref}
 *
 * WARNING: Be sure to only call this inside a callback that is passed as a ref.
 * Otherwise, make sure to clean up the previous {ref} if it changes.
 *
 * Useful if you want to expose the ref of an inner component to the public API
 * while still using it inside the component.
 * @param ref A ref callback or ref object. If anything falsy, this is a no-op.
 * @param value
 */
export const setRef = <T>(
  ref:
    | MutableRefObject<T | null>
    | ((instance: T | null) => void)
    | null
    | undefined,
  value: T | null
): void => {
  if (typeof ref === `function`) {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
};
