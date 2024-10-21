import React from 'react';
import { Phone, Mail, Globe, MapPin, UserPlus } from 'lucide-react';
import ContactItem from './ContactItem';

interface FrontContentProps {
  phone: string;
  email: string;
  website: string;
  location: string;
  onAddContact: () => void;
}

const FrontContent: React.FC<FrontContentProps> = ({ phone, email, website, location, onAddContact }) => (
  <div className="mt-4 space-y-3">
    <ContactItem 
      icon={<Phone className="h-5 w-5" />} 
      text={phone} 
      href={`tel:${phone.replace(/\D/g, '')}`}
    />
    <ContactItem 
      icon={<Mail className="h-5 w-5" />} 
      text={email} 
      href={`mailto:${email}`}
    />
    <ContactItem icon={<Globe className="h-5 w-5" />} text={website} href={`https://${website}`} />
    <ContactItem icon={<MapPin className="h-5 w-5" />} text={location} />
    <button
      onClick={onAddContact}
      className="mt-4 flex items-center text-indigo-500 hover:text-indigo-600 transition-colors duration-200"
    >
      <UserPlus className="h-5 w-5 mr-2" />
      Add to Contacts
    </button>
  </div>
);

export default FrontContent;