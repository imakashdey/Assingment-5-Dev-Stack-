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


interface YourStackProps {
  technologies: Itechnologies[];
  onRemove: (name: string) => void;
  onRemoveAll: () => void;
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


const YourStack = ({
  technologies,
  onRemove,
  onRemoveAll,
}: YourStackProps) => {

  return (
    <div className="rounded-2xl bg-white p-5 border border-gray-100">

      
      <h3 className="text-lg font-semibold text-gray-900">
        Your Stack
      </h3>


      
      <p className="text-sm text-gray-400 mb-4">
        {technologies.length} Technology Selected
      </p>


      
      {technologies.length > 0 ? (

        <div className="space-y-3">

          {technologies.map((technology) => (

            <div
              key={technology.name}
              className="flex items-center justify-between border border-gray-200 rounded-xl px-3 py-2"
            >

             
              <div className="flex items-center gap-3">

                <img
                  src={imageMap[technology.image]}
                  alt={technology.name}
                  className="w-8 h-8 object-contain"
                />

                <div>

                  <h4 className="text-xs font-semibold text-gray-900">
                    {technology.name}
                  </h4>

                  <p className="text-[9px] text-gray-400">
                    {technology.category}
                  </p>

                </div>

              </div>


              {/* Remove One */}
              <button
                onClick={() => onRemove(technology.name)}
                className="text-gray-400 hover:text-red-500 text-2xl font-light cursor-pointer"
              >
                ×
              </button>

            </div>

          ))}

        </div>

      ) : (

        /* Empty Stack */
        <div className="border border-dashed border-gray-200 rounded-xl py-10 flex items-center justify-center">
          <span className="text-sm text-gray-400">
            Your stack is empty.
          </span>
        </div>

      )}


      {/* Remove All */}
      {technologies.length > 0 && (

        <button
          onClick={onRemoveAll}
          className="w-full mt-5 py-2 border border-red-300 text-red-500 rounded-xl text-sm font-semibold hover:bg-red-50 cursor-pointer"
        >
          Remove All
        </button>

      )}

    </div>
  );
};

export default YourStack;