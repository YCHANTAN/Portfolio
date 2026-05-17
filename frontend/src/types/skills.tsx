import React from 'react';
import { 
  SiTypescript, 
  SiReact, 
  SiPostgresql, 
  SiTailwindcss, 
  SiSqlite, 
  SiDotnet,
  SiFigma,
  SiNestjs
} from 'react-icons/si';
import { FaNodeJs, FaGithub, FaCss3Alt } from 'react-icons/fa';
import { TbBrandCSharp } from 'react-icons/tb';
import { MdOutlineArchitecture, MdOutlineBiotech } from 'react-icons/md';
import { VscSettingsGear } from 'react-icons/vsc';
import { RiSearchLine } from 'react-icons/ri';

export const skillTags = [
  { icon: <SiReact size={18} color="#61DAFB" />, label: 'React' },
  { icon: <SiTypescript size={18} color="#3178C6" />, label: 'TypeScript' },
  { icon: <FaNodeJs size={18} color="#339933" />, label: 'Node.js' },
  { icon: <TbBrandCSharp size={18} color="#239120" />, label: 'C#' },
  { icon: <SiDotnet size={18} color="#512BD4" />, label: '.NET 8' },
  { icon: <SiPostgresql size={18} color="#4169E1" />, label: 'PostgreSQL' },
  { icon: <SiSqlite size={18} color="#003B57" />, label: 'SQLite' },
  { icon: <SiTailwindcss size={18} color="#06B6D4" />, label: 'Tailwind CSS' },
  { icon: <FaGithub size={18} color="#FFFFFF" />, label: 'Git / GitHub' },
  { icon: <SiFigma size={18} color="#F24E1E" />, label: 'UI/UX Design' },
  { icon: <SiNestjs size={18} color="#E0234E" />, label: 'NestJS' },
  { icon: <MdOutlineArchitecture size={18} color="#10B981" />, label: 'RESTful APIs' },
  { icon: <VscSettingsGear size={18} color="#FBBF24" />, label: 'Agile' },
  { icon: <FaCss3Alt size={18} color="#1572B6" />, label: 'Vanilla CSS' },
  { icon: <RiSearchLine size={18} color="#818CF8" />, label: 'In Silico Modeling' },
  { icon: <MdOutlineBiotech size={18} color="#A3E635" />, label: 'Bioinformatics' },
];
