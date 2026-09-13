import type { ITechnology } from "../../types/technologyTypes";

interface ISelectedTechItemProps {
  tech: ITechnology;
}
const SelectedTechItem = ({ tech }: ISelectedTechItemProps) => {
  return (
    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors">
      <div className="flex items-center gap-3">
        <img
          src={tech.icon}
          alt={tech.name}
          className="w-8 h-8 object-contain"
        />
        <div>
          <h4 className="text-sm font-semibold text-gray-900 leading-tight">
            {tech.name}
          </h4>
          <span className="text-[11px] text-gray-500 font-medium">
            {tech.category}
          </span>
        </div>
      </div>

      <span className="text-[10px] bg-white border border-gray-200 text-gray-600 font-semibold px-2 py-0.5 rounded-md">
        {tech.difficulty}
      </span>
    </div>
  );
};

export default SelectedTechItem;
