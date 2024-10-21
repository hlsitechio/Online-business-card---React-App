import React, { useState } from 'react';
import { RotateCw } from 'lucide-react';
import ProfileSection from './ProfileSection';
import NameSection from './NameSection';
import FrontContent from './FrontContent';
import BackContent from './BackContent';
import FlipEffect from './FlipEffect';

interface ContactInfo {
  name: string;
  title: string;
  phone: string;
  email: string;
  website: string;
  location: string;
  github: string;
  linkedin: string;
}

const ContactCard: React.FC<ContactInfo> = ({
  name,
  title,
  phone,
  email,
  website,
  location,
  github,
  linkedin,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const createVCard = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${name}
TITLE:${title}
TEL:${phone}
EMAIL:${email}
URL:${website}
ADR:;;${location}
END:VCARD`;

    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${name.replace(' ', '_')}.vcf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="bg-white rounded-xl shadow-md overflow-hidden flex">
        <ProfileSection name={name} />
        <div className="relative flex-grow p-6">
          <NameSection name={name} title={title} />
          <FlipEffect
            isFlipped={isFlipped}
            frontContent={
              <FrontContent
                phone={phone}
                email={email}
                website={website}
                location={location}
                onAddContact={createVCard}
              />
            }
            backContent={
              <BackContent github={github} linkedin={linkedin} />
            }
          />
        </div>
      </div>
      <button
        onClick={() => setIsFlipped(!isFlipped)}
        className="absolute bottom-4 right-4 p-2 bg-indigo-100 rounded-full text-indigo-500 hover:bg-indigo-200 transition-colors duration-200 z-10"
      >
        <RotateCw className="h-5 w-5" />
      </button>
    </div>
  );
};

export default ContactCard;