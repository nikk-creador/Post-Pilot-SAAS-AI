import type { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ className = '', ...props }: ButtonProps): JSX.Element {
  return <button className={`rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white ${className}`.trim()} {...props} />;
}
