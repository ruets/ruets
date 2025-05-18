import {
  Home,
  IdCard,
  BriefcaseBusiness,
  Code,
  FileUser,
  Mail,
  Linkedin,
  Github,
  User,
  GraduationCap,
  ExternalLink,
  HelpCircle,
} from "lucide-react";

const iconMap = {
  home: Home,
  about: IdCard,
  work: BriefcaseBusiness,
  code: Code,
  resume: FileUser,
  mail: Mail,
  linkedin: Linkedin,
  github: Github,
  personnal: User,
  school: GraduationCap,
  externallink: ExternalLink,
  helpcircle: HelpCircle,
} as const;

type IconKey = keyof typeof iconMap;

interface IconProps {
  name: string;
  size?: number;
  color?: string;
}

function Icon({ name, size = 24, color = "currentColor" }: IconProps) {
  const lowerName = name.toLowerCase();
  const IconComponent = iconMap[lowerName as IconKey];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found, using fallback icon.`);
    return <HelpCircle size={size} color={color} />;
  }

  return <IconComponent size={size} color={color} />;
}

export default Icon;
