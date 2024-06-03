// components/Nivel.tsx
import React, { forwardRef } from 'react';

interface NivelProps {
  title: string;
  subtitle: string;
  content: string;
}

const Nivel = forwardRef<HTMLDivElement, NivelProps>(({ title, subtitle, content }, ref) => {
  return (
    <div ref={ref} className="nivel my-16 flex flex-col items-center">
      <div className="bg-gray-100 p-4 rounded-lg shadow-md text-center w-80">
        <h2 className="text-2xl font-bold">{title}</h2>
        <h3 className="text-lg text-gray-500">{subtitle}</h3>
        <p className="mt-2">{content}</p>
      </div>
    </div>
  );
});

Nivel.displayName = 'Nivel';

export default Nivel;
