import type { Itechnologies } from "../../Type/technology";

import react from "../../assets/React.png";
import vue from "../../assets/Container.png";
import svelte from "../../assets/Container (2).png";
import nextjs from "../../assets/Container (3).png";
import nodejs from "../../assets/Container (4).png";
import redis from "../../assets/Container (5).png";
import javascript from "../../assets/Container (6).png";
import typescript from "../../assets/Container (7).png";
import java from "../../assets/Container (8).png";
import tailwind from "../../assets/Container (9).png";
import docker from "../../assets/Container (10).png";
import postgresql from "../../assets/PostgreSQL.png";

interface TechnologyCardProps {
  technologies: Itechnologies[];
  onAdd: (technology: Itechnologies) => void;
  selectedTechnologies: Itechnologies[];
}

const imageMap: Record<string, string> = {
  "react.png": react,
  "vue.png": vue,
  "svelte.png": svelte,
  "nextjs.png": nextjs,
  "nodejs.png": nodejs,
  "postgresql.png": postgresql,
  "redis.png": redis,
  "javascript.png": javascript,
  "typescript.png": typescript,
  "java.png": java,
  "tailwind.png": tailwind,
  "docker.png": docker,
};


const tagColorMap: Record<string, string> = {
  Popular: "text-blue-600 bg-blue-50",
  Versatile: "text-emerald-600 bg-emerald-50",
  Fast: "text-orange-600 bg-orange-50",
  Standard: "text-gray-600 bg-gray-100",
  "Top SQL": "text-indigo-600 bg-indigo-50",
  Cache: "text-red-600 bg-red-50",
  Ubiquitous: "text-yellow-600 bg-yellow-50",
  Essential: "text-cyan-600 bg-cyan-50",
  Robust: "text-rose-600 bg-rose-50",
  Modern: "text-teal-600 bg-teal-50",
  Containers: "text-sky-600 bg-sky-50",
};

const TechnologyCard = ({
  technologies,
  onAdd,
  selectedTechnologies,
}: TechnologyCardProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {technologies.map((technologie) => {
        // Check whether this technology is already selected
        const isSelected = selectedTechnologies.some(
          (item) => item.name === technologie.name
        );

        return (
          <div key={technologie.name} className="h-full">
            <div
              className={`w-full h-full min-h-[270px] rounded-2xl bg-white p-4 border-2 flex flex-col transition-all duration-300 ease-in-out ${
                isSelected
                  ? "border-[#A855F7] shadow-md shadow-purple-100"
                  : "border-gray-100"
              }`}
            >
              
              <div className="flex justify-between items-center mb-3">
                <img
                  src={imageMap[technologie.image]}
                  alt={technologie.name}
                  className="w-8 h-8 object-contain"
                />

                {technologie.tag && (
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      tagColorMap[technologie.tag] ||
                      "text-gray-600 bg-gray-100"
                    }`}
                  >
                    {technologie.tag}
                  </span>
                )}
              </div>

             
              <h3 className="text-lg font-semibold">
                {technologie.name}
              </h3>

              
              <p className="text-sm text-gray-500 mb-3 min-h-[40px]">
                {technologie.description}
              </p>

              
              <div className="flex gap-3 text-xs text-gray-500 mb-4">
                <span>{technologie.category}</span>
                <span>{technologie.level}</span>
                <span>⭐{technologie.rating}</span>
              </div>

              
              <button
                onClick={() => onAdd(technologie)}
                disabled={isSelected}
                className={`w-full py-3 rounded-xl text-sm font-semibold mt-auto transition-all duration-300 ${
                  isSelected
                    ? "bg-[#8B5CF6] text-white cursor-not-allowed shadow-sm"
                    : "bg-gray-900 text-white hover:bg-[#8B5CF6] cursor-pointer"
                }`}
              >
                {isSelected ? "✓ Added to Stack" : "Add to Stack"}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TechnologyCard;