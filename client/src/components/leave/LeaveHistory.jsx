import React, { useState } from "react";

const LeaveHistory = ({ leaves, isAdmin, onUpdate }) => {
  const [processing, setProcessing] = useState(null);

  const handleStatusUpdate = async (params) => {
    setProcessing(id);
  };
  return (
    <div className="card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="table-modern">
          <thead>
            <tr>
              {isAdmin && <th>Employee</th>}
              <th>Type</th>
              <th>Dates</th>
              <th>Reason</th>
              <th>Status</th>
              {isAdmin && <th className="text-center">Actions</th>}
            </tr>
          </thead>
          <tbody>
            {leaves.length === 0 ? (
              <tr>
                <td
                  colSpan={isAdmin ? 6 : 4}
                  className="text-center py-12 text-slate-400"
                >
                  No leave applications found
                </td>
              </tr>
            ) : (
              leave.map((leave) => {
                return (
                  <tr key={leave._id || leave.id}>
                    {isAdmin && (
                      <td className="text-slate-900">
                        {leave.employee?.firstName}
                        {leave.employee?.lastName}
                      </td>
                    )}

                    <td>
                      <span className="badge bg-slate-100 text-slate-600">
                        {leave.type}
                      </span>
                    </td>
                    <td className="text-xs  text-slate-500">
                      {record.checkOut
                        ? format(new Date(record.date), "hh:mm a")
                        : "-"}
                    </td>
                    <td className="px-6 py-4 font-medium text-slate-600">
                      {getWorkingHoursDisplay(record)}
                    </td>
                    <td className="px-6 py-4 ">
                      {dayType.label !== "-" ? (
                        <span className={`badge ${dayType.className}`}>
                          {dayType.label}
                        </span>
                      ) : (
                        "-"
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`badge ${record.status === "PRESENT" ? "badge-success" : record.status === "LATE" ? "badge-warning" : "badge-danger"}`}
                      >
                        {record.status}
                      </span>
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

export default LeaveHistory;
