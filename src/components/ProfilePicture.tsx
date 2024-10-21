import React from 'react';
import { profileImageBase64 } from '../assets/profile';

interface ProfilePictureProps {
  name: string;
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({ name }) => (
  <div className="relative w-40 h-40 rounded-full overflow-hidden shadow-lg">
    <img
      src={profileImageBase64}
      alt={name}
      className="w-full h-full object-cover"
    />
  </div>
);

export default ProfilePicture;