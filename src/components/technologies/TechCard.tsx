import type { ITechnology } from "../../types/technologyTypes";

interface ITechnologyCardProps {
    tech : ITechnology;
}

const TechCard = ({tech} : ITechnologyCardProps) => {
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
            {tech.badge && (
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-600 border border-blue-100">
                {tech.badge}
              </span>
            )}
          </div>

          <h3 className="text-lg font-bold text-gray-900 mt-4">{tech.name}</h3>

          <p className="text-gray-500 text-xs mt-2 leading-relaxed min-h-[48px]">
            {tech.description}
          </p>

          <div className="flex items-center flex-wrap gap-2 mt-4 text-[11px] text-gray-600 font-medium">
            <span className="bg-gray-100 px-2 py-1 rounded">
              {tech.category}
            </span>
            <span className="bg-gray-100 px-2 py-1 rounded">
              {tech.difficulty}
            </span>
            <span className="flex items-center gap-1 text-gray-700 ml-auto">
              <span className="text-amber-400 text-xs">★</span>
              {tech.rating.toFixed(1)}
            </span>
          </div>
        </div>

        <button
          type="button"
          className="w-full mt-6 bg-gray-950 hover:bg-black text-white py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition active:scale-[0.98] cursor-pointer"
        >
          Add to Stack
        </button>
      </div>
    );
};

export default TechCard;