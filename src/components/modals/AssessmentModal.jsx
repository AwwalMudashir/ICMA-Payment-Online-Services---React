import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import ModalBase from "./ModalBase";

function AssessmentModal({ isOpen, onClose }) {
  const [code, setCode] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onClose();
  };

  return (
    <ModalBase
      isOpen={isOpen}
      title="Input Assessment or Payment Code to Continue"
      onClose={onClose}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            id="assessmentCode"
            name="assessmentCode"
            value={code}
            onChange={(event) => setCode(event.target.value)}
            placeholder="Enter value to search"
            className="flex-1 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />

          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-700 px-6 py-3 text-white font-semibold hover:bg-blue-600 transition-colors"
          >
            <MagnifyingGlassIcon className="w-5 h-5" />
            Search
          </button>
        </div>
      </form>
    </ModalBase>
  );
}

export default AssessmentModal;
