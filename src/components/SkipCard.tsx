import React from 'react';
import { Skip } from '../types';

interface SkipCardProps {
  skip: Skip;
}

const SkipCard: React.FC<SkipCardProps> = ({ skip }) => {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <h3 className="text-lg font-semibold mb-2">Size: {skip.size} yd³</h3>
      <p>Hire Period: {skip.hire_period_days} days</p>
      <p>Price: £{skip.price_before_vat}</p>
      <p>VAT: {skip.vat}%</p>
      <p>Allowed on Road: {skip.allowed_on_road ? 'Yes' : 'No'}</p>
      <p>Allows Heavy Waste: {skip.allows_heavy_waste ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default SkipCard;
