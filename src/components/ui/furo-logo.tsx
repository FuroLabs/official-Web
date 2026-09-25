import React from 'react';
import Image from 'next/image';

interface LogoProps {
  size?: number;
  className?: string;
}

export function FuroLogo({ size = 32, className = '' }: LogoProps) {
  return (
    <Image
      src="/favicon.ico"
      alt="Furo Labs"
      width={size}
      height={size}
      className={`shrink-0 object-contain rounded-md ${className}`}
      priority
    />
  );
}
