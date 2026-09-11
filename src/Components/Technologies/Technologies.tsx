import { use, useState } from "react";
import type { Itechnologies } from "../../Type/technology";
import TechnologyCard from "../TechnologyCard/TechnologyCard";
import YourStack from "../YourStack/YourStack";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface TechnologiesProps {
  technologiesPromise: Promise<Itechnologies[]>;
}

const Technologies = ({ technologiesPromise }: TechnologiesProps) => {
  const technologies = use(technologiesPromise);

  // Selected technologies
  const [stack, setStack] = useState<Itechnologies[]>([]);

  // Add technology to stack
  const addToStack = (technology: Itechnologies) => {
    if (stack.some((item) => item.name === technology.name)) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }

    setStack((prev) => [...prev, technology]);

    toast.success(`${technology.name} added to your stack!`);
  };

  // Remove one technology
  const removeFromStack = (name: string) => {
    setStack((prev) =>
      prev.filter((technology) => technology.name !== name)
    );

    toast.info(`${name} removed from your stack!`);
  };

  // Remove all technologies
  const removeAll = () => {
    setStack([]);

    toast.info("All technologies removed!");
  };

  return (
    <div className="container mx-auto">
      <h2 className="font-extrabold text-[36px]">
        Explore the{" "}
        <span className="font-extrabold bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
          Technologies
        </span>
      </h2>

      <p className="text-[#64748B] font-semi text-[16px] mb-8">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="flex flex-col lg:flex-row gap-6 items-start">

        <div className="flex-1">
          <TechnologyCard
            technologies={technologies}
            onAdd={addToStack}
            selectedTechnologies={stack}
          />
        </div>


        <div className="w-full lg:w-72 shrink-0">
          <YourStack
            technologies={stack}
            onRemove={removeFromStack}
            onRemoveAll={removeAll}
          />
        </div>
      </div>


      <ToastContainer />
    </div>
  );
};

export default Technologies;