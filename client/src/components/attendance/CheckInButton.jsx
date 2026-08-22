import { Loader2Icon, LogInIcon, LogOutIcon } from "lucide-react";
import React, { useState } from "react";

const CheckInButton = ({ todayRecord, onAction }) => {
  const [loading, setLoading] = useState(false);

  const handleAttendance = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      onAction();
    }, 1000);
  };

  if (todayRecord?.checkOut) {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-slate-50 rounded-2xl border border-slate-200">
        <h3 className="text-lg font-bold text-slate-900">Work Day Completed</h3>

        <p className="text-slate-500 text-sm mt-1">
          Great job! See you tomorrow
        </p>
      </div>
    );
  }

  const isCheckedIn = !!todayRecord?.isCheckedIn;

  return (
    <div className="fixed bottom-2 right-3 z-50">
      <button
        onClick={handleAttendance}
        disabled={loading}
        className={`w-[136px] h-[88px] flex items-center gap-3 px-3 rounded-lg text-white shadow-lg transition-all duration-200 ${
          isCheckedIn
            ? "bg-gradient-to-br from-slate-700 to-slate-900"
            : "bg-gradient-to-br from-indigo-600 to-violet-600"
        }`}
      >
        {loading ? (
          <Loader2Icon className="w-5 h-5 shrink-0 animate-spin" />
        ) : isCheckedIn ? (
          <LogOutIcon className="w-5 h-5 shrink-0" />
        ) : (
          <LogInIcon className="w-5 h-5 shrink-0" />
        )}

        <div className="flex flex-col items-center justify-center flex-1 text-center">
          <h2 className="text-xs font-medium leading-none mb-1">
            {loading ? "Processing..." : isCheckedIn ? "Clock Out" : "Clock In"}
          </h2>

          <p className="text-xs opacity-80 leading-none whitespace-nowrap">
            {isCheckedIn ? "Click to end your shift" : "start your work day"}
          </p>
        </div>
      </button>
    </div>
  );
};

export default CheckInButton;
