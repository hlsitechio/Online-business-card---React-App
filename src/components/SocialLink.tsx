import React from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => (
  <Tooltip.Provider>
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-indigo-500 transition-colors duration-200">
          {icon}
          <span className="ml-2">{label}</span>
        </a>
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content
          className="bg-gray-800 text-white px-2 py-1 rounded text-sm"
          sideOffset={5}
        >
          Visit {label}
          <Tooltip.Arrow className="fill-gray-800" />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  </Tooltip.Provider>
);

export default SocialLink;