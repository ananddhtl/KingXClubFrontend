import { cn } from '@/utils/cn';
import { FC } from 'react';

interface SpinnerProps {
  color?: string;
  size?: 'sm' | 'lg';
}

export const Spinner: FC<SpinnerProps> = ({ color, size }) => {
  const colorClass = color ? `border-${color}` : 'border-white';
  const sizeClass =
    size === 'sm' ? 'w-4 h-4 border-2' : size === 'lg' ? 'w-8 h-8 border-4' : 'w-6 h-6 border-2';
  return (
    <div className="flex items-center justify-center">
      <div
        className={cn(
          'inline-block animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] ',
          sizeClass,
          colorClass,
        )}
        role="status"
      ></div>
    </div>
  );
};
