import { Loader2, Plus } from "lucide-react";
import React, { useState } from "react";
import { X } from "lucide-react";

const GeneratePayslipForm = ({ employees, onSucess }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen)
    return (
      <button
        className="btn-primary flex items-center gap-2"
        onClick={() => setIsOpen(true)}
      >
        <Plus className="w-4 h-4" /> Generate Payslip
      </button>
    );

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="fixed inset-0 bg-black/40  backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="card max-w-lg w-full p-6 animate-slide-up">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold text-slate-900">
            Generate Monthly Payslip
          </h3>
          <button
            className="text-slate-400 hover:text-slate-600 p-1"
            type="button"
            onClick={() => setIsOpen(false)}
          >
            <X size={20} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* select employee */}

          <div>
            <label className="block text-sm font-medium text-slate-700">
              Employee
            </label>
            <select id="employee" required>
              {employees.map((e) => (
                <option key={e.id} value={e.id}>
                  {e.firstName} {e.lastName} ({e.position})
                </option>
              ))}
            </select>
          </div>

          {/* select month and year */}

          <div className=" grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Month
              </label>
              <select name="month">
                {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Year
              </label>

              <input
                type="number"
                name="year"
                defaultValue={new Date().getFullYear()}
              />
            </div>
          </div>

          {/* Basic Salary */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Basic Salary
            </label>

            <input
              type="number"
              name="basicSalary"
              required
              placeholder="5000"
            />
          </div>
          {/* Allowances & Deductions */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Allowances
              </label>

              <input
                type="number"
                name="allowances"
                required
                defaultValue="0"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Deductions
              </label>

              <input
                type="number"
                name="deductions"
                required
                defaultValue="0"
              />
            </div>
          </div>

          {/* buttons */}
          <div className="flex justify-end gap-3 pt-2">
            <button
              onClick={() => setIsOpen(false)}
              type="button"
              className="btn-secondary"
            >
              Cancel
            </button>
            <button
              disabled={loading}
              type="submit"
              className="btn-primary flex items-center"
            >
              {loading && <Loader2 className=" w-4 h-4 mr-2animate-spin" />}
              Generate 
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GeneratePayslipForm;
