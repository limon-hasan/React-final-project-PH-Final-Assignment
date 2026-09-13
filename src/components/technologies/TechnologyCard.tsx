import type { ITechnology } from "../../types/technologyTypes";
// import type { Dispatch, SetStateAction } from "react";

interface ITechCardProps {
  tech: ITechnology;
  //   selectedTech: ITechnology;
  //   setSelectedTech: Dispatch<SetStateAction<ITechnology>>;
  onAddToStack: () => void;
}
// basd on UI demo , changing the color of badge
const getBadgeStyle = (badge: string) => {
  switch (badge) {
    case "Popular":
    case "Top SQL":
    case "Essential":
      return "bg-blue-50 text-blue-600 border-blue-100";
    case "Versatile":
    case "Standard":
      return "bg-emerald-50 text-emerald-600 border-emerald-100";
    case "Fast":
      return "bg-orange-50 text-orange-600 border-orange-100";
    case "SSR / Edge":
      return "bg-purple-50 text-purple-600 border-purple-100";
    case "Cache":
      return "bg-rose-50 text-rose-600 border-rose-100";
    case "Ubiquitous":
      return "bg-amber-50 text-amber-700 border-amber-100";
    case "Modern":
    case "Containers":
      return "bg-cyan-50 text-cyan-700 border-cyan-100";
    default:
      return "bg-gray-50 text-gray-600 border-gray-100";
  }
};

const TechnologyCard = ({tech, onAddToStack}: ITechCardProps) => {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between h-10">
          <img
            src={tech.icon}
            alt={tech.name}
            className="w-9 h-9 object-contain"
            loading="lazy"
          />
          {/* {tech.badge && (
            <span
              className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${getBadgeStyle(
                tech.badge,
              )}`}
            >
              {tech.badge}
            </span>
          )} */}

          <span
            className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${getBadgeStyle(tech.badge)}`}
          >
            {tech.badge}
          </span>
        </div>

        <h3 className="text-lg font-bold text-gray-900 mt-4">{tech.name}</h3>

        <p className="text-gray-500 text-xs mt-2 leading-relaxed min-h-[48px]">
          {tech.description}
        </p>

        <div className="flex items-center flex-wrap gap-2 mt-4 text-[11px] text-gray-600 font-medium">
          <span className="bg-gray-100 px-2 py-1 rounded">{tech.category}</span>
          <span className="bg-gray-100 px-2 py-1 rounded">
            {tech.difficulty}
          </span>
          <span className="flex items-center gap-1 text-gray-700 ml-auto">
            <span className="text-amber-400 text-xs">★</span>
            {tech.rating.toFixed(1)}
          </span>
        </div>
      </div>

      <button onClick={onAddToStack}
        type="button"
        className="w-full mt-6 bg-gray-950 hover:bg-black text-white py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition active:scale-[0.98] cursor-pointer"
      >
        Add to Stack
      </button>
    </div>
  );
};

export default TechnologyCard;
