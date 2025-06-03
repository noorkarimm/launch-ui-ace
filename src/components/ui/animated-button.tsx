
import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  withSparkle?: boolean;
}

const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, children, variant = 'primary', withSparkle = false, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "animated-button",
          variant === 'secondary' && "animated-button-secondary",
          className
        )}
        {...props}
      >
        <div className="dots_border"></div>
        <span className="text_button">
          {children}
          {withSparkle && (
            <svg className="sparkle" viewBox="0 0 24 24" fill="none">
              <path
                className="path"
                d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z"
                fill="currentColor"
              />
              <path
                className="path"
                d="M19 4L20.18 7.82L24 9L20.18 10.18L19 14L17.82 10.18L14 9L17.82 7.82L19 4Z"
                fill="currentColor"
              />
              <path
                className="path"
                d="M5 6L5.9 8.1L8 9L5.9 9.9L5 12L4.1 9.9L2 9L4.1 8.1L5 6Z"
                fill="currentColor"
              />
            </svg>
          )}
        </span>
      </button>
    );
  }
);

AnimatedButton.displayName = "AnimatedButton";

export { AnimatedButton };
