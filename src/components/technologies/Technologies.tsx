import { use } from "react";
import type { ITechnology } from "../../types/technologyTypes";
import TechCard from "./TechCard";

interface ITechnologyPromise {
  technologyPromise: Promise<ITechnology[]>;
}

const Technologies = ({ technologyPromise }: ITechnologyPromise) => {
  const technologies = use(technologyPromise);

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
            {technologies.map((tech) => (
              <TechCard key={tech.id} tech={tech} />
            ))}
          </div>

          <div className="lg:col-span-1">
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
