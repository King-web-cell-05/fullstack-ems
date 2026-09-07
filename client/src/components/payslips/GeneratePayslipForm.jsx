import { Plus } from "lucide-react";
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
      </div>
    </div>
  );
};

export default GeneratePayslipForm;
