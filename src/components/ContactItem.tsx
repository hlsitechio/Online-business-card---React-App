import React from 'react';

interface ContactItemProps {
  icon: React.ReactNode;
  text: string;
  href?: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, text, href }) => (
  <div className="flex items-center group cursor-pointer">
    <span className="text-gray-400 mr-2 group-hover:text-indigo-500 transition-colors duration-200">{icon}</span>
    {href ? (
      <a href={href} className="text-gray-700 group-hover:text-indigo-500 transition-colors duration-200">
        {text}
      </a>
    ) : (
      <p className="text-gray-700 group-hover:text-indigo-500 transition-colors duration-200">{text}</p>
    )}
  </div>
);

export default ContactItem;