import { Skip } from "../types";
import SkipCard from "./SkipCard";

interface SkipListProps {
  skips: Skip[];
  selectedSkip: Skip | null;
  onSelect: (skip: Skip) => void;
}

const SkipList: React.FC<SkipListProps> = ({ skips, selectedSkip, onSelect }) => {
  return (
    <div className="px-4 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {skips.map((skip) => (
        <SkipCard
          key={skip.id}
          skip={skip}
          selected={selectedSkip?.id === skip.id}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
};

export default SkipList;
