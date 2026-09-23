import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dummyPayslipData } from "../assets/assets";
import Loading from "../components/Loading";
import { format } from "date-fns";
import {
  ArrowLeft,
  Building2,
  CalendarDays,
  Mail,
  Printer,
  UserRound,
  BriefcaseBusiness,
  ShieldCheck,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const PrintPayslip = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [payslip, setPayslip] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      const foundPayslip = dummyPayslipData.find(
        (slip) => String(slip.id) === String(id)
      );

      setPayslip(foundPayslip || null);
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!payslip) {
    return (
      <div className="min-h-screen bg-[#f5f7fb] flex items-center justify-center px-4">
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8 text-center max-w-md w-full">
          <div className="w-12 h-12 rounded-xl bg-rose-50 flex items-center justify-center mx-auto mb-4">
            <ShieldCheck size={21} className="text-rose-600" />
          </div>

          <h2 className="text-lg font-semibold text-slate-900">
            Payslip not found
          </h2>

          <p className="text-sm text-slate-500 mt-2">
            The requested payslip could not be located.
          </p>

      
        </div>
      </div>
    );
  }

  const employeeName =
    `${payslip.employee?.firstName || ""} ${
      payslip.employee?.lastName || ""
    }`.trim() || "N/A";

  const payPeriod = format(
    new Date(payslip.year, payslip.month - 1, 1),
    "MMMM yyyy"
  );

  const basicSalary = Number(payslip.basicSalary ?? 0);
  const allowances = Number(payslip.allowances ?? 0);
  const deductions = Number(payslip.deductions ?? 0);
  const netSalary = Number(payslip.netSalary ?? 0);

  return (
    <div className="min-h-screen bg-[#f5f7fb] py-6 sm:py-10 px-3 sm:px-6 print:bg-white print:p-0">
      <div className="max-w-4xl mx-auto">

       

        {/* Payslip */}
        <div className="bg-white border border-slate-200 shadow-sm rounded-2xl overflow-hidden print:border-0 print:shadow-none print:rounded-none">

          {/* Company Header */}
          <div className="bg-[#0b1220] text-white px-6 sm:px-10 py-7 sm:py-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center">
                  <Building2 size={22} />
                </div>

                <div>
                  <h1 className="text-lg sm:text-xl font-bold tracking-tight">
                    Enterprise HR
                  </h1>

                  <p className="text-xs text-slate-400 mt-1">
                    Employee Management System
                  </p>
                </div>
              </div>

              <div className="sm:text-right">
                <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400 font-semibold">
                  Payroll Document
                </p>

                <h2 className="text-xl sm:text-2xl font-bold mt-1">
                  PAYSLIP
                </h2>

                <p className="text-xs text-slate-400 mt-1">
                  {payPeriod}
                </p>
              </div>

            </div>
          </div>

          {/* Employee Information */}
          <div className="px-6 sm:px-10 py-7 border-b border-slate-200">

            <div className="flex items-center gap-2 mb-5">
              <UserRound size={16} className="text-blue-600" />

              <h3 className="text-sm font-semibold text-slate-900">
                Employee Information
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">

              <div>
                <p className="text-[10px] uppercase tracking-wide font-semibold text-slate-400">
                  Employee Name
                </p>

                <p className="text-sm font-semibold text-slate-900 mt-1.5">
                  {employeeName}
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-wide font-semibold text-slate-400">
                  Position
                </p>

                <div className="flex items-center gap-2 mt-1.5">
                  <BriefcaseBusiness
                    size={14}
                    className="text-slate-400"
                  />

                  <p className="text-sm font-medium text-slate-900">
                    {payslip.employee?.position || "N/A"}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-wide font-semibold text-slate-400">
                  Email Address
                </p>

                <div className="flex items-center gap-2 mt-1.5">
                  <Mail
                    size={14}
                    className="text-slate-400 shrink-0"
                  />

                  <p className="text-sm font-medium text-slate-900 break-all">
                    {payslip.employee?.email || "N/A"}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-wide font-semibold text-slate-400">
                  Pay Period
                </p>

                <div className="flex items-center gap-2 mt-1.5">
                  <CalendarDays
                    size={14}
                    className="text-slate-400"
                  />

                  <p className="text-sm font-medium text-slate-900">
                    {payPeriod}
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Salary Breakdown */}
          <div className="px-6 sm:px-10 py-7">

            <div className="flex items-center gap-2 mb-5">
              <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center">
                <Building2 size={14} className="text-blue-600" />
              </div>

              <h3 className="text-sm font-semibold text-slate-900">
                Salary Breakdown
              </h3>
            </div>

            <div className="border border-slate-200 rounded-xl overflow-hidden">

              <div className="flex items-center justify-between gap-4 px-5 py-4 border-b border-slate-100">
                <div>
                  <p className="text-sm font-medium text-slate-700">
                    Basic Salary
                  </p>

                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Base monthly compensation
                  </p>
                </div>

                <p className="text-sm font-semibold text-slate-900 whitespace-nowrap">
                  ${basicSalary.toLocaleString()}
                </p>
              </div>

              <div className="flex items-center justify-between gap-4 px-5 py-4 border-b border-slate-100">
                <div>
                  <p className="text-sm font-medium text-slate-700">
                    Allowances
                  </p>

                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Additional compensation
                  </p>
                </div>

                <p className="text-sm font-semibold text-slate-900 whitespace-nowrap">
                  ${allowances.toLocaleString()}
                </p>
              </div>

              <div className="flex items-center justify-between gap-4 px-5 py-4 border-b border-slate-100">
                <div>
                  <p className="text-sm font-medium text-slate-700">
                    Deductions
                  </p>

                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Applicable payroll deductions
                  </p>
                </div>

                <p className="text-sm font-semibold text-rose-600 whitespace-nowrap">
                  -${deductions.toLocaleString()}
                </p>
              </div>

              <div className="flex items-center justify-between gap-4 px-5 py-5 bg-slate-50">
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    Net Salary
                  </p>

                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Total payable amount
                  </p>
                </div>

                <p className="text-xl sm:text-2xl font-bold text-blue-600 whitespace-nowrap">
                  ${netSalary.toLocaleString()}
                </p>
              </div>

            </div>
          </div>

          {/* Footer */}
          <div className="px-6 sm:px-10 py-5 border-t border-slate-200 bg-slate-50">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

              <div className="flex items-center gap-2">
                <ShieldCheck
                  size={14}
                  className="text-emerald-600"
                />

                <p className="text-[11px] text-slate-500">
                  This document was generated by Enterprise HR.
                </p>
              </div>

              <p className="text-[10px] text-slate-400">
                Payroll record • {payPeriod}
              </p>

            </div>
          </div>

        </div>

        {/* Bottom Print Button */}
        <div className="flex justify-center mt-5 print:hidden">
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0b1220] hover:bg-[#111b2d] text-white text-sm font-semibold shadow-sm transition-colors"
          >
            <Printer size={16} />
            Print Payslip
          </button>
        </div>

      </div>

      <style>{`
        @media print {
          @page {
            size: A4;
            margin: 12mm;
          }

          body {
            background: white !important;
          }

          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}</style>
    </div>
  );
};

export default PrintPayslip;