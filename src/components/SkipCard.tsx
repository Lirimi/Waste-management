import React from 'react';
import { Skip } from '../types';
import { CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/solid';
import classNames from 'classnames';

import FourYard from '../assets/images/4-yarder-skip.jpg';
import FiveYard from '../assets/images/5-yarder-skip.jpg';
import TwelveYard from '../assets/images/12-yarder-skip.jpg';
import TwentyYard from '../assets/images/20-yarder-skip.jpg';
import FortyYard from '../assets/images/40-yarder-skip.jpg';

interface SkipCardProps {
  skip: Skip;
  selected: boolean;
  onSelect: (skip: Skip) => void;
}

const getSkipImage = (size: number): string => {
  if (size <= 4) return FourYard;
  if (size <= 11) return FiveYard;
  if (size <= 19) return TwelveYard;
  if (size <= 39) return TwentyYard;
  return FortyYard;
};

const SkipCard: React.FC<SkipCardProps> = ({ skip, selected, onSelect }) => {
  const imageUrl = getSkipImage(skip.size);

  return (
    <div
      onClick={() => onSelect(skip)}
      className={classNames(
        'relative overflow-hidden rounded-xl shadow transition-transform duration-300 cursor-pointer',
        selected ? 'ring-2 ring-blue-500 scale-[1.02]' : 'hover:scale-[1.01]'
      )}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />

      {/* Custom Checkbox */}
      <div className="absolute top-3 right-3 z-20">
        <div
          className={classNames(
            'w-8 h-8 rounded-full border-1 flex items-center justify-center transition',
            selected ? 'bg-blue-600 border-blue-600 text-white' : 'bg-white border-gray-300'
          )}
        >
          {selected && <CheckCircleIcon className="w-8 h-8" />}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 p-4 text-white flex flex-col justify-end h-[250px]">
        <h3 className="text-2xl font-bold mb-1">{skip.size} Yard Skip</h3>
        <p className="text-sm text-gray-300 mb-3">
          Hire Period: {skip.hire_period_days} days
        </p>

        <p className="text-lg font-bold text-yellow-400 mb-2">
          £{skip.price_before_vat}
        </p>

        {!skip.allowed_on_road && (
          <div className="flex items-center gap-1 text-sm text-red-400 font-medium">
            <ExclamationTriangleIcon className="w-5 h-5" />
            <span>Not Allowed on Road</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default SkipCard;
