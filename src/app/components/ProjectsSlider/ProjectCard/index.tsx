import React from 'react';
import Image from 'next/image';
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiTypescript, SiJavascript } from 'react-icons/si';

// Objeto de mapeamento para ícones e cores de fundo
const techIcons: { [key: string]: { icon: React.ElementType, bgColor: string } } = {
  'React': { icon: FaReact, bgColor: '#4da3bb' },
  'Node.js': { icon: FaNodeJs, bgColor: '#339933' },
  'Python': { icon: FaPython, bgColor: '#3776AB' },
  'TypeScript': { icon: SiTypescript, bgColor: '#3178C6' },
  'JavaScript': { icon: SiJavascript, bgColor: '#F7DF1E' },
  // Adicione mais tecnologias conforme necessário
};

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  techTags: string[];
  imageSrc: string;
  imageAlt: string;
  isActive?: boolean;
}

export default function ProjectCard({ 
  title, 
  description, 
  tags, 
  techTags,
  imageSrc, 
  imageAlt,
  isActive = false
}: ProjectCardProps) {
  return (
    <div className="text-white px-4 h-[300px] flex flex-col">
      <h2 className="font-bold text-2xl tracking-wide">{title}</h2>
      <p className="opacity-60 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span key={index} className="bg-[#252525] text-white text-xs font-semibold px-2.5 py-0.5 rounded-full">
            {tag}
          </span>
        ))}
        {techTags.map((tech, index) => {
          const techInfo = techIcons[tech] || { icon: null, bgColor: '#000000' };
          const Icon = techInfo.icon;
          return (
            <span 
              key={index} 
              className="flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full" 
              style={{ backgroundColor: techInfo.bgColor, color: '#FFFFFF' }}
            >
              {Icon && <Icon />}
              {tech}
            </span>
          );
        })}
      </div>
      <div className="flex-grow rounded-lg border border-[#5A5A5E] overflow-hidden">
        <Image 
          src={imageSrc} 
          alt={imageAlt} 
          className="w-full h-full object-cover"
        />
      </div>
      <button className="w-full mt-6 py-2 rounded-md text-center text-black font-black relative overflow-hidden group hover:scale-105 transition-transform duration-300 ease-in-out">
        <span className="relative z-10">view more</span>
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: !isActive 
              ? 'linear-gradient(90deg, #838383 0%, #FFFFFF 22%, #838383 48%, #FFFFFF 73%, #838383 100%)'
              : 'linear-gradient(90deg, rgba(195,135,37,1) 0%, rgba(255,218,158,1) 16%, rgba(195,135,37,1) 48%, rgba(255,218,158,1) 82%, rgba(251,156,0,1) 100%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 3s ease-in-out infinite'
          }}
        ></div>
        <div className="absolute inset-0 border border-[#F9F9F9] rounded-md opacity-20"></div>
      </button>
    </div>
  );
};
