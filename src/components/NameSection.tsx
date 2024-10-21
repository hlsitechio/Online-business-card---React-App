import React from 'react';

interface NameSectionProps {
  name: string;
  title: string;
}

const NameSection: React.FC<NameSectionProps> = ({ name, title }) => (
  <div className="mb-4">
    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{title}</div>
    <h1 className="block mt-1 text-2xl leading-tight font-bold text-black">{name}</h1>
  </div>
);

export default NameSection;