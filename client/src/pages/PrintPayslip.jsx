import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dummyPayslipData } from "../assets/assets";
import Loading from "../components/Loading";
import { format } from "date-fns";

const PrintPayslip = () => {
  const { id } = useParams();

  const [payslip, setPayslip] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      const foundPayslip = dummyPayslipData.find(
        (slip) => String(slip.id) === String(id)
      );

      setPayslip(foundPayslip || null);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!payslip) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-center py-12 text-slate-400">
          Payslip not found
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 py-8">
      <div className="max-w-2xl mx-auto bg-white p-8 animate-fade-in">

        {/* Header */}
        <div className="text-center border-b border-slate-200 pb-6 mb-8">
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
            PAYSLIP
          </h1>

          <p className="text-slate-500 text-sm mt-1">
            {format(
              new Date(
                payslip.year,
                payslip.month - 1,
                1
              ),
              "MMMM yyyy"
            )}
          </p>
        </div>

        {/* Employee Information */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">

          {/* Employee */}
          <div>
            <p className="text-xs text-slate-400 uppercase tracking-wide">
              Employee
            </p>

            <p className="font-medium text-slate-900 mt-1">
              {`${payslip.employee?.firstName || ""} ${
                payslip.employee?.lastName || ""
              }`.trim() || "N/A"}
            </p>
          </div>

          {/* Email */}
          <div>
            <p className="text-xs text-slate-400 uppercase tracking-wide">
              Email
            </p>

            <p className="font-medium text-slate-900 mt-1 break-words">
              {payslip.employee?.email || "N/A"}
            </p>
          </div>

          {/* Position */}
          <div>
            <p className="text-xs text-slate-400 uppercase tracking-wide">
              Position
            </p>

            <p className="font-medium text-slate-900 mt-1">
              {payslip.employee?.position || "N/A"}
            </p>
          </div>

          {/* Pay Period */}
          <div>
            <p className="text-xs text-slate-400 uppercase tracking-wide">
              Pay Period
            </p>

            <p className="font-medium text-slate-900 mt-1">
              {format(
                new Date(
                  payslip.year,
                  payslip.month - 1,
                  1
                ),
                "MMMM yyyy"
              )}
            </p>
          </div>
        </div>

        {/* Salary Details */}
        <div className="border border-slate-200 rounded-xl overflow-hidden">

          {/* Basic Salary */}
          <div className="flex justify-between items-center px-5 py-4 border-b border-slate-100">
            <span className="text-slate-500">
              Basic Salary
            </span>

            <span className="font-medium text-slate-900">
              $
              {Number(
                payslip.basicSalary ?? 0
              ).toLocaleString()}
            </span>
          </div>

          {/* Allowances */}
          <div className="flex justify-between items-center px-5 py-4 border-b border-slate-100">
            <span className="text-slate-500">
              Allowances
            </span>

            <span className="font-medium text-slate-900">
              $
              {Number(
                payslip.allowances ?? 0
              ).toLocaleString()}
            </span>
          </div>

          {/* Deductions */}
          <div className="flex justify-between items-center px-5 py-4 border-b border-slate-100">
            <span className="text-slate-500">
              Deductions
            </span>

            <span className="font-medium text-rose-600">
              -$
              {Number(
                payslip.deductions ?? 0
              ).toLocaleString()}
            </span>
          </div>

          {/* Net Salary */}
          <div className="flex justify-between items-center px-5 py-5 bg-slate-50">
            <span className="font-semibold text-slate-900">
              Net Salary
            </span>

            <span className="text-xl font-bold text-slate-900">
              $
              {Number(
                payslip.netSalary ?? 0
              ).toLocaleString()}
            </span>
          </div>
        </div>

       
        {/* Print Button */}
        <div className="mt-6 flex justify-center print:hidden">
          <button
            type="button"
            onClick={() => window.print()}
            className="btn-primary"
          >
            Print Payslip
          </button>
        </div>

      </div>
    </div>
  );
};

export default PrintPayslip;