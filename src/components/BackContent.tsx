import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import SocialLink from './SocialLink';
import GlitchingTypingText from './GlitchingTypingText';

interface BackContentProps {
  github: string;
  linkedin: string;
}

const BackContent: React.FC<BackContentProps> = ({ github, linkedin }) => (
  <div className="h-full flex flex-col justify-between">
    <div className="space-y-4 mb-4">
      <SocialLink href={github} icon={<Github className="h-6 w-6" />} label="GitHub" />
      <SocialLink href={linkedin} icon={<Linkedin className="h-6 w-6" />} label="LinkedIn" />
    </div>
    <div className="flex-grow">
      <GlitchingTypingText 
        text="const developer = { name: 'Hubert', skills: ['JavaScript', 'React', 'Node.js'] };"
        typingSpeed={30}
        glitchProbability={0.05}
      />
    </div>
  </div>
);

export default BackContent;