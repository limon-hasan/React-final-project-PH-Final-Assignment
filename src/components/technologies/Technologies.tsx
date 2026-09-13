import { use, useState } from "react";
import type { ITechnology } from "../../types/technologyTypes";
import TechnologyCard from "./TechnologyCard";
import SelectedTechnologyCard from "./SelectedTechnologyCard";
import { Bounce, toast } from "react-toastify";

interface ITechnologyPromise {
  technologyPromise: Promise<ITechnology[]>;
}

const Technologies = ({ technologyPromise }: ITechnologyPromise) => {
  const technologies = use(technologyPromise);
  const [selectedTech, setSelectedTech] = useState<ITechnology[]>([]);

  const handleSelectedTech = (tech: ITechnology) => {
    const isAlreadyAdded = selectedTech.some((item) => item.id === tech.id);

    if (isAlreadyAdded) {
      toast.warn(`${tech.name} is already added to your stack!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }

    const showingSelected = [...selectedTech, tech];
    setSelectedTech(showingSelected);

    toast.success(`${tech.name} is selected!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const handleRemoveTech = (tech: ITechnology) => {
    const updateStack = selectedTech.filter((item) => item.id !== tech.id);
    setSelectedTech(updateStack);

    toast.info(`${tech.name} is removed from the stack!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const handleRemoveAll = () => {
    setSelectedTech([]);
    toast.warn("All technologies removed from the selected stack!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <section id="technologies" className="py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950">
            Explore the{" "}
            <span className="text-brand-gradient">Technologies</span>
          </h2>
          <p className="mt-2 text-gray-600 text-sm sm:text-base">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {technologies.map((tech) => {
              const isAlreadyAdded = selectedTech.some(
                (item) => item.id === tech.id,
              );
              return (
                <TechnologyCard
                  key={tech.id}
                  tech={tech}
                  onAddToStack={() => handleSelectedTech(tech)}
                  isAlreadyAdded={isAlreadyAdded}
                />
              );
            })}
          </div>

          <div className="lg:col-span-1">
            <SelectedTechnologyCard
              selectedTech={selectedTech}
              onRemoveTech={handleRemoveTech}
              onRemoveAll={handleRemoveAll}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
