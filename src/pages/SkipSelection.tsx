import {
  ArrowPathIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SkipList from "../components/SkipList";
import { useGetSkipsByLocationQuery } from "../store/api";
import { Skip } from "../types";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const SkipSelection: React.FC = () => {
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);
  const navigate = useNavigate();

  // hardcoded data
  const postcode = "NR32";
  const area = "Lowestoft";

  const {
    data: skips,
    error,
    isLoading,
  } = useGetSkipsByLocationQuery({ postcode, area });

  return (
    <main className="max-w-7xl mx-auto px-4 pb-28 pt-10 relative">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">
          Choose Your Skip Size
        </h1>
        <p className="mt-2 text-lg text-gray-500">
          Select the skip size that best suits your needs
        </p>
      </div>

      {/* Loading */}
      {isLoading && (
        <div className="flex flex-col items-center justify-center py-20 text-blue-600">
          <ArrowPathIcon className="w-8 h-8 animate-spin mb-2" />
          <p className="text-lg font-medium">Loading skips...</p>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="flex items-center justify-center gap-2 text-red-600 bg-red-100 border border-red-200 p-4 rounded-lg">
          <ExclamationTriangleIcon className="w-6 h-6" />
          <span className="text-md font-medium">
            Failed to load skips. Please try again later.
          </span>
        </div>
      )}

      {/* Skip List */}
      {skips && skips.length > 0 && (
        <SkipList
          skips={skips}
          selectedSkip={selectedSkip}
          onSelect={(skip) =>
            setSelectedSkip((current) =>
              current?.id === skip.id ? null : skip
            )
          }
        />
      )}

      {/* Toolbar */}
      {selectedSkip && (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 z-50">
          <div className="text-gray-800 flex flex-col sm:flex-row gap-2 items-center">
            <span className="font-semibold">{selectedSkip.size} Yard Skip</span>
            <span className="text-sm text-gray-500">
              | {selectedSkip.hire_period_days} days hire
            </span>
            <span className="text-blue-600 font-bold">
              £{selectedSkip.price_before_vat}
            </span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedSkip(null)}
              className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              Discard
            </button>
            <button
              onClick={() => navigate("/permit-check")}
              className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-1 cursor-pointer"
            >
              Continue <ArrowRightIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default SkipSelection;
