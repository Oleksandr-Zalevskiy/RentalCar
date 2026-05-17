'use client';

import { ReactNode } from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({
  isOpen,
  onClose,
  children,
}: Props) {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.5)',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        zIndex: 1000,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '500px',
          background: '#fff',
          borderRadius: '24px',
          padding: '40px',
          position: 'relative',
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',

            border: 'none',
            background: 'transparent',

            fontSize: '24px',
            cursor: 'pointer',
          }}
        >
          ×
        </button>

        {children}
      </div>
    </div>
  );
}