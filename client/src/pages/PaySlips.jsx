import { useCallback, useEffect, useState } from "react";
import {
  Banknote,
  FileText,
  ShieldCheck,
  Users,
} from "lucide-react";
import { dummyEmployeeData, dummyPayslipData } from "../assets/assets";
import Loading from "../components/Loading";
import PayslipList from "../components/payslips/PayslipList";
import GeneratePayslipForm from "../components/payslips/GeneratePayslipForm";

const PrintPayslip = () => {
  const [payslips, setPayslips] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  const isAdmin = true;

  const fetchPayslips = useCallback(() => {
    setLoading(true);
    setPayslips(dummyPayslipData);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const cleanup = fetchPayslips();
    return cleanup;
  }, [fetchPayslips]);

  useEffect(() => {
    if (isAdmin) {
      setEmployees(dummyEmployeeData);
    }
  }, [isAdmin]);

  if (loading) {
    return <Loading />;
  }

  const totalPayslips = payslips.length;
  const totalEmployees = employees.length;

  return (
    <div className="min-h-full bg-[#f5f7fb] animate-fade-in">
      <div className="max-w-[1600px] mx-auto">

        <div className="mb-7">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center">
                  <Banknote
                    size={16}
                    className="text-blue-600"
                  />
                </div>

                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-blue-600">
                  Payroll Management
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0f172a]">
                Payslips
              </h1>

              <p className="mt-1.5 text-sm text-slate-500">
                {isAdmin
                  ? "Generate, manage and review employee payslips."
                  : "View and manage your payslip history."}
              </p>
            </div>

            {isAdmin && (
              <div className="w-full lg:w-auto">
                <GeneratePayslipForm
                  employees={employees}
                  onSucess={fetchPayslips}
                />
              </div>
            )}
          </div>
        </div>

        {isAdmin && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-7">
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-medium text-slate-500">
                    Total Payslips
                  </p>

                  <p className="text-2xl font-bold text-slate-900 mt-2">
                    {totalPayslips}
                  </p>

                  <p className="text-[11px] text-slate-400 mt-1.5">
                    Available records
                  </p>
                </div>

                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                  <FileText
                    size={19}
                    className="text-blue-600"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-medium text-slate-500">
                    Employees
                  </p>

                  <p className="text-2xl font-bold text-slate-900 mt-2">
                    {totalEmployees}
                  </p>

                  <p className="text-[11px] text-slate-400 mt-1.5">
                    Workforce records
                  </p>
                </div>

                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center">
                  <Users
                    size={19}
                    className="text-indigo-600"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-medium text-slate-500">
                    Payroll Status
                  </p>

                  <p className="text-lg font-bold text-emerald-600 mt-2">
                    Operational
                  </p>

                  <p className="text-[11px] text-slate-400 mt-1.5">
                    Payroll system ready
                  </p>
                </div>

                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                  <ShieldCheck
                    size={19}
                    className="text-emerald-600"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="px-5 sm:px-6 py-5 border-b border-slate-100">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <h2 className="text-sm font-semibold text-slate-900">
                  Payslip Records
                </h2>

                <p className="text-xs text-slate-400 mt-1">
                  {isAdmin
                    ? "Review generated payslips and manage employee payroll records."
                    : "Review your available payslip records."}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-400">
                <FileText size={14} />
                {totalPayslips}{" "}
                {totalPayslips === 1 ? "record" : "records"}
              </div>
            </div>
          </div>

          <PayslipList
            payslips={payslips}
            isAdmin={isAdmin}
          />
        </div>
      </div>
    </div>
  );
};

export default PrintPayslip;