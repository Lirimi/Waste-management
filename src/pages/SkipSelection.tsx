import React from 'react';
import SkipList from '../components/SkipList';
import { useGetSkipsByLocationQuery } from '../store/api';

const SkipSelection: React.FC = () => {
  // Business logic and hooks live here
  const postcode = 'NR32';
  const area = 'Lowestoft';

  const { data: skips, error, isLoading } = useGetSkipsByLocationQuery({ postcode, area });

  return (
    <main className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Select a Skip</h1>

      {isLoading && <p>Loading skips...</p>}
      {error && <p className="text-red-600">Failed to load skips.</p>}

      {skips && skips.length > 0 ? (
        <SkipList skips={skips} />
      ) : (
        !isLoading && <p>No skips available for this location.</p>
      )}
    </main>
  );
};

export default SkipSelection;
