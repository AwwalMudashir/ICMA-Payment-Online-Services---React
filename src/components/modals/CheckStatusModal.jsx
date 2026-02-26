import { useState } from "react";
import ModalBase from "./ModalBase";

function CheckStatusModal({ isOpen, onClose }) {
  const [reference, setReference] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onClose();
  };

  return (
    <ModalBase
      isOpen={isOpen}
      onClose={onClose}
      titleArea={
        <div>
          <p className="text-lg font-semibold text-green-800">Enter Transaction Ref Number</p>
          <p className="text-xs font-medium text-red-600 mt-1">
            Check your email for your transaction reference number
          </p>
        </div>
      }
      contentClassName="px-6 py-6 bg-white"
      dialogClassName="w-full max-w-md"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={reference}
          onChange={(event) => setReference(event.target.value)}
          placeholder="Enter transaction reference"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-600"
          required
        />
        <div className="flex justify-end">
          <button
            type="submit"
            className="rounded-lg bg-green-700 px-6 py-3 text-white font-semibold hover:bg-green-600 transition-colors"
          >
            Query
          </button>
        </div>
      </form>
    </ModalBase>
  );
}

export default CheckStatusModal;
