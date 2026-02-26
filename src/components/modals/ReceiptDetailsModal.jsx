import { useEffect, useState } from "react";
import { EyeIcon } from "@heroicons/react/24/outline";
import ModalBase from "./ModalBase";

const agencies = ["Delta IRS", "State Treasury", "Revenue Taskforce"];
const revenueStreams = ["PAYE", "Withholding Tax", "Business Premise Levy"];
const countries = ["Nigeria"];
const states = ["Lagos State","Ogun State","Kwara State","Delta State", "Edo State", "Rivers State"];
const lgas = ["Ikeja","Alimosho","Agege","Epe","Badagary","Aniocha North", "Ethiope West", "Oshimili South", "Warri North"];

const initialValues = {
  surname: "",
  otherNames: "",
  agency: "",
  revenue: "",
  amount: "",
  paymentPeriod: "",
  street: "",
  country: "Nigeria",
  state: "Lagos State",
  city: "",
  lga: "",
  telephone: "",
  email: ""
};

function ReceiptDetailsModal({ isOpen, onClose }) {
  const [formValues, setFormValues] = useState(initialValues);

  useEffect(() => {
    if (!isOpen) {
      setFormValues(initialValues);
    }
  }, [isOpen]);

  const updateField = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onClose();
  };

  return (
    <ModalBase
      isOpen={isOpen}
      title="Please provide the details below for your receipt"
      onClose={onClose}
      headerClassName="bg-green-600 text-white"
      titleClassName="text-base font-semibold text-white"
      closeButtonClassName="text-white hover:bg-white/10"
      contentClassName="px-6 py-6 bg-white space-y-6 max-h-[75vh] overflow-y-auto"
      dialogClassName="w-full max-w-3xl"
    >
      <form onSubmit={handleSubmit} className="space-y-8 text-sm text-blue-900">
        <section className="space-y-4">
          <div className="border-b border-gray-200 pb-2">
            <h3 className="text-base font-semibold text-gray-900">Payment Information</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium" htmlFor="surname">Surname or Company Name *</label>
              <input
                id="surname"
                name="surname"
                value={formValues.surname}
                onChange={updateField}
                className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Enter surname"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="otherNames">Other Names</label>
              <input
                id="otherNames"
                name="otherNames"
                value={formValues.otherNames}
                onChange={updateField}
                className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Enter other names"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="agency">Agency *</label>
              <select
                id="agency"
                name="agency"
                value={formValues.agency}
                onChange={updateField}
                className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              >
                <option value="" disabled>
                  Click to select agency
                </option>
                {agencies.map((agency) => (
                  <option key={agency} value={agency}>
                    {agency}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="revenue">Revenue *</label>
              <select
                id="revenue"
                name="revenue"
                value={formValues.revenue}
                onChange={updateField}
                className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              >
                <option value="" disabled>
                  Choose revenue type
                </option>
                {revenueStreams.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="amount">Enter Amount to be paid (₦) *</label>
              <input
                id="amount"
                name="amount"
                value={formValues.amount}
                onChange={updateField}
                type="number"
                step="0.01"
                className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="0.00"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="paymentPeriod">Payment Period</label>
              <input
                id="paymentPeriod"
                name="paymentPeriod"
                value={formValues.paymentPeriod}
                onChange={updateField}
                className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="e.g. Jan - Mar 2026"
              />
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <div className="border-b border-gray-200 pb-2">
            <h3 className="text-base font-semibold text-gray-900">Other Information</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <label className="block mb-1 font-medium" htmlFor="street">Street No and Name *</label>
              <input
                id="street"
                name="street"
                value={formValues.street}
                onChange={updateField}
                className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="House 10, Okpanam Road"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="country">Country *</label>
              <select
                id="country"
                name="country"
                value={formValues.country}
                onChange={updateField}
                className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              >
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="state">State *</label>
              <select
                id="state"
                name="state"
                value={formValues.state}
                onChange={updateField}
                className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              >
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="city">City *</label>
              <input
                id="city"
                name="city"
                value={formValues.city}
                onChange={updateField}
                className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Asaba"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="lga">LGA *</label>
              <select
                id="lga"
                name="lga"
                value={formValues.lga}
                onChange={updateField}
                className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              >
                <option value="" disabled>
                  Click to select LGA
                </option>
                {lgas.map((area) => (
                  <option key={area} value={area}>
                    {area}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="telephone">Telephone *</label>
              <input
                id="telephone"
                name="telephone"
                value={formValues.telephone}
                onChange={updateField}
                className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="0801 234 5678"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="email">Email *</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formValues.email}
                onChange={updateField}
                className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>
        </section>

        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-lg bg-green-700 px-5 py-3 text-white font-semibold hover:bg-green-600 transition-colors"
          >
            <EyeIcon className="w-5 h-5" />
            Review Entries
          </button>
        </div>
      </form>
    </ModalBase>
  );
}

export default ReceiptDetailsModal;
