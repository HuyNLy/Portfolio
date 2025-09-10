import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiMysql,
  SiMongodb,
  SiVite,
  SiTailwindcss
} from "react-icons/si";
import { RiJavaFill, RiNextjsFill } from "react-icons/ri";
import { JSX } from "react/jsx-runtime";


type TechIconProps = {
  name: string;
};

export default function TechIcon({ name }: TechIconProps) {
  const iconMap: Record<string, JSX.Element> = {
    JavaScript: <SiJavascript className="text-yellow-400" />,
    TypeScript: <SiTypescript className="text-blue-500" />,
    React: <SiReact className="text-cyan-400" />,
    ReactNative: <SiReact className="text-cyan-400" />,
    "Next.js": <RiNextjsFill className="text-white" />,
    "Node.js": <SiNodedotjs className="text-green-500" />,
    Python: <SiPython className="text-blue-400" />,
    MySQL: <SiMysql className="text-blue-600" />,
    MongoDB: <SiMongodb className="text-green-600" />,
    Java: <RiJavaFill className="text-red-600" />,
    Tailwind: <SiTailwindcss className="text-sky-400" />,
    Vite: <SiVite className="text-purple-500" />,
    
  };

  return iconMap[name] || <span>{name}</span>;
}
