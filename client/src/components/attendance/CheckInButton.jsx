import { Loader2Icon, LogOutIcon } from "lucide-react";
import React, { useState } from "react";

const CheckInButton = ({ todayRecord, onAction }) => {
  const [loading, setLoading] = useState(false);

  const handleAttendance = async () => {
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
    <div className="absolute bottom-4 right-4 flex flex-col z-1">
      <button>
        {loading ? (
          <Loader2Icon className="size-7 animate-spin" />
        ) : isCheckedIn ? (
          <LogOutIcon className="size-7 " />
        ) : (
          <LogOutIcon className="size-7" />
        )}
        <div>
          <h2>
            {loading ? "Processing..." : isCheckedIn ? "Clock Out" : "Clock In"}
          </h2>
          <p>
            {isCheckedIn ? "Click to endyour shift" : "start your work day"}
          </p>
        </div>
      </button>
    </div>
  );
};

export default CheckInButton;
