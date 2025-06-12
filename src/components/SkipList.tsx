import React from 'react';
import SkipCard from './SkipCard';
import { Skip } from '../types';

interface SkipListProps {
  skips: Skip[];
}

const SkipList: React.FC<SkipListProps> = ({ skips }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {skips.map((skip) => (
        <SkipCard key={skip.id} skip={skip} />
      ))}
    </div>
  );
};

export default SkipList;
