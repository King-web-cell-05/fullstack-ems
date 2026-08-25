import React from "react";
import { getDayTypeDisplay } from "../../assets/assets";

const AttendanceHistory = ({ history }) => {
  return (
    <div className="card overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-100">
        <h3 className="font-semibold text-slate-900">Recent Activity</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="table-modern">
          <thead>
            <tr>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Check In</th>
              <th className="px-6 py-4">Check Out</th>
              <th className="px-6 py-4">Workng Hours</th>
              <th className="px-6 py-4">Day Type</th>
              <th className="px-6 py-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {history.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center py-12 text-slate-400">
                  No records found
                </td>
              </tr>
            ) : (
              history.map((record) => {
                const dayType = getDayTypeDisplay(record);
                return (
                  <tr key={record._id || record.id}>
                    <td className="px-6 py-4 font-medium text-slate-900">
                      {record.date}
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

export default AttendanceHistory;
