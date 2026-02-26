import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import ModalBase from "./ModalBase";

function PayerIdModal({ isOpen, onClose, title = "Enter S-TIN value to continue" }) {
  const [payerId, setPayerId] = useState("");

  const handleChange = (event) => {
    setPayerId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Future: send to API or router. For now, just close the modal.
    onClose();
  };

  return (
    <ModalBase isOpen={isOpen} title={title} onClose={onClose}>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* <label htmlFor="payerId" className="block text-sm font-medium text-blue-900">
          S-TIN
        </label> */}
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            id="payerId"
            name="payerId"
            value={payerId}
            onChange={handleChange}
            placeholder="Enter value to search"
            className="flex-1 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />

          <button
            type="submit"
            className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-blue-700 px-6 py-3 text-white font-semibold hover:bg-blue-600 transition-colors"
          >
            <MagnifyingGlassIcon className="w-5 h-5" />
            Search
          </button>
        </div>
      </form>
      {/* <p className="mt-4 text-xs text-gray-500">
        Need help? Contact us or visit any Delta IRS office to retrieve your S-TIN.
      </p> */}
    </ModalBase>
  );
}

export default PayerIdModal;
