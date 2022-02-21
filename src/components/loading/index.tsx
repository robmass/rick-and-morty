import '@/components/loading/index.css';
import type { FC } from 'react';
export const Loading: FC = () => {
  return (
    <div className="loading-container">
      <img src="/rick-and-morty.png" className="loading-logo" alt="logo" />
    </div>
  );
};
