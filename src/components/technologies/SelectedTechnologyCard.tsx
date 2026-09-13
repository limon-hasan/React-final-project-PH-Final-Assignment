import type { ITechnology } from "../../types/technologyTypes";
import SelectedTechItem from "./SelectedTechItem";

interface ISelectedTechnologyCardProps {
  selectedTech: ITechnology[];
}

const SelectedTechnologyCard = ({
  selectedTech,
}: ISelectedTechnologyCardProps) => {
  let emptyBox = null;
  if (selectedTech.length === 0) {
    emptyBox = (
      <div className="mt-6 border-2 border-dashed border-gray-200 rounded-xl p-8 text-center">
        <p className="text-sm font-medium text-gray-400">
          Your stack is empty.
        </p>
      </div>
    );
  }
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
      <h3 className="text-xl font-bold text-gray-900">Your Stack</h3>
      <p className="text-xs text-gray-500 mt-1">
        {selectedTech.length === 0
          ? "No technologies selected yet"
          : `${selectedTech.length} Technology Selected`}
      </p>
      {emptyBox}

      {selectedTech.length > 0 && (
        <div className="mt-6 space-y-3">
          {selectedTech.map((tech) => (
            <SelectedTechItem key={tech.id} tech={tech} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectedTechnologyCard;
