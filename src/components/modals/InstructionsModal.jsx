import ModalBase from "./ModalBase";

function InstructionsModal({ isOpen, onClose, onContinueWithStin, onContinueWithoutStin }) {
  return (
    <ModalBase
      isOpen={isOpen}
      title="Please read the instructions Carefully."
      onClose={onClose}
    >
      <div className="space-y-6 text-sm text-blue-900">
        <section className="space-y-3">
          <p className="font-semibold">1. If you have an S-TIN:</p>
          <p className="text-gray-600">
            Ensure the number
            is the same as the one on your tax documents.
          </p>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg bg-green-700 px-5 py-3 text-white font-semibold hover:bg-green-600 transition-colors"
            onClick={onContinueWithStin}
          >
            Continue with S-TIN
          </button>
        </section>

        <section className="space-y-3">
          <p className="font-semibold">2. If you do not have an S-TIN:</p>
          <p className="text-gray-600">
            Please make sure
            the information is accurate so your receipt can be issued immediately.
          </p>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg bg-red-600 px-5 py-3 text-white font-semibold hover:bg-red-500 transition-colors"
            onClick={onContinueWithoutStin}
          >
            Continue without an S-TIN
          </button>
        </section>
      </div>
    </ModalBase>
  );
}

export default InstructionsModal;
