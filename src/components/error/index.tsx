import '@/components/error/index.css';
import type { FC } from 'react';

export type ErrorProps = {
  error: string;
};
export const Error: FC<ErrorProps> = ({ error }) => {
  return (
    <div className="error-container">
      <img src="/rick-and-morty.png" className="error-logo" alt="logo" />
      <div className="error-message">An error occurred while getting data. Please retry</div>
    </div>
  );
};
