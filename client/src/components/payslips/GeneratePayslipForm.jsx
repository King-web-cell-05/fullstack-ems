import { Plus } from "lucide-react";
import React, { useState } from "react";

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

  return <div>GeneratePayslipForm</div>;
};

export default GeneratePayslipForm;
