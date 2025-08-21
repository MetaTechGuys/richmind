'use client';

import useScrollPosition from '@/lib/scroll';
import { cn } from '@/lib/utils';
import { ComponentProps, useState } from 'react';

export default function ScrollInviter({ className, ...props }: ComponentProps<'a'>) {
  const y = useScrollPosition()
  console.log({ y });
  
  return (
    <div
      style={y > 10 ? { transform: `translateY(50px)`, opacity: 0 } : { transform: `translateY(0px)`, opacity: 1 }}
      className={cn(" top-auto z-20 mx-auto flex animate-bounce cursor-pointer flex-col items-center justify-center gap-1 transition-all", className)}
    >
      <a className="contents" {...props}>
        <span className=" text-xs text-nowrap uppercase">scroll down</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          className="w-6 fill-current"
        >
          <path
            fillRule="evenodd"
            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </a>
    </div>
  );
}
