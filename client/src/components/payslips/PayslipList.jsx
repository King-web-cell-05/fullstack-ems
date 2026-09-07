import React from "react";
import { format } from "date-fns";
import { Download } from "lucide-react";

const getStatusStyles = (status) => {
  const normalizedStatus = (status || "Pending").toLowerCase();

  switch (normalizedStatus) {
    case "paid":
      return "bg-emerald-100 text-emerald-700 ring-emerald-600/10";
    case "pending":
      return "bg-amber-100 text-amber-700 ring-amber-600/10";
    case "failed":
    case "rejected":
      return "bg-rose-100 text-rose-700 ring-rose-600/10";
    default:
      return "bg-slate-100 text-slate-600 ring-slate-600/10";
  }
};

const PayslipList = ({ payslips, isAdmin }) => {
  return (
    <div className="card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="table-modern">
          <thead>
            <tr>
              {isAdmin && <th>Employee</th>}
              <th>Period</th>
              <th>Basic Salary</th>
              <th>Net Salary</th>
              <th>Status</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {payslips.length === 0 ? (
              <tr>
                <td
                  colSpan={isAdmin ? 6 : 5}
                  className="text-center py-12 text-slate-400"
                >
                  No payslips found
                </td>
              </tr>
            ) : (
              payslips.map((payslip) => {
                const status = payslip.status || payslip.paymentStatus || "Pending";
                const employeeName = `${payslip.employee?.firstName || ""} ${
                  payslip.employee?.lastName || ""
                }`.trim();

                return (
                  <tr key={payslip._id || payslip.id}>
                    {isAdmin && (
                      <td className="text-slate-900">
                        {employeeName || "N/A"}
                      </td>
                    )}

                    <td className="text-slate-500">
                      {format(
                        new Date(payslip.year, payslip.month - 1, 1),
                        "MMMM yyyy",
                      )}
                    </td>
                    <td className="text-slate-500">
                      ${Number(payslip.basicSalary ?? 0).toLocaleString()}
                    </td>

                    <td className="font-medium text-slate-500">
                      ${Number(payslip.netSalary ?? 0).toLocaleString()}
                    </td>

                    <td className="text-xs">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-1 font-medium ring-1 ${getStatusStyles(
                          status,
                        )}`}
                      >
                        {status}
                      </span>
                    </td>

                    <td className="text-center">
                      <button
                        type="button"
                        onClick={() =>
                          window.open(`/print/payslips/${payslip._id || payslip.id}`)
                        }
                        className="inline-flex items-center px-3 py-1.5 text-xs font-medium rounded text-blue-600 bg-blue-50 hover:bg-blue-100 transition-colors ring-1 ring-blue-600/10"
                      >
                        <Download className="w-3 h-3 mr-1.5" />
                        Download
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PayslipList;
