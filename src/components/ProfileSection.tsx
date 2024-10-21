import React from 'react';
import AnimatedBackground from './AnimatedBackground';
import ProfilePicture from './ProfilePicture';

interface ProfileSectionProps {
  name: string;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ name }) => (
  <div className="relative flex-shrink-0 flex items-center justify-center p-6 w-1/3">
    <AnimatedBackground />
    <div className="relative z-10">
      <ProfilePicture name={name} />
    </div>
  </div>
);

export default ProfileSection;