import { useCallback, useEffect, useState } from "react";
import { LogInIcon, LogOutIcon } from "lucide-react";
import { dummyAttendanceData } from "../assets/assets";

const CheckInButton = ({ todayRecord, onAction }) => {
  const isCheckedIn = Boolean(todayRecord?.checkIn && !todayRecord?.checkOut);

  return (
    <div className="fixed bottom-3 right-3 z-[9999]">
      <button
        type="button"
        onClick={onAction}
        className={`w-[136px] h-[58px] flex items-center gap-3 px-3 rounded-lg text-white shadow-lg transition-all duration-200 ${
          isCheckedIn
            ? "bg-gradient-to-br from-slate-700 to-slate-900 hover:from-slate-800 hover:to-slate-950"
            : "bg-gradient-to-br from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700"
        }`}
      >
        {isCheckedIn ? (
          <LogOutIcon className="w-5 h-5 shrink-0" />
        ) : (
          <LogInIcon className="w-5 h-5 shrink-0" />
        )}

        <div className="flex flex-col items-center justify-center flex-1 text-center">
          <h2 className="text-xs font-medium leading-none mb-1">
            {isCheckedIn ? "Clock Out" : "Clock In"}
          </h2>

          <p className="text-[8px] opacity-80 leading-none whitespace-nowrap">
            {isCheckedIn ? "Click to end your shift" : "start your work day"}
          </p>
        </div>
      </button>
    </div>
  );
};

const Attendance = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(() => {
    setHistory(dummyAttendanceData);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const cleanup = fetchData();
    return cleanup;
  }, [fetchData]);

  if (loading) {
    return <div className="animate fade-in">Loading attendance...</div>;
  }

  const today = new Date();

  today.setHours(0, 0, 0, 0);

  const todayRecord = history.find(
    (r) => new Date(r.date).toDateString() === today.toDateString(),
  );

  const isDeleted = false;

  return (
    <div className="animate fade-in">
      <div className="page-header">
        <h1 className="page-title">Attendance</h1>

        <p className="page-subtitle">
          Track your work hours and daily check-ins
        </p>
      </div>

      {isDeleted ? (
        <div className="mb-8 p-6 bg-rose-50 border border-rose-200 rounded-2xl text-center">
          <p className="text-rose-600">
            You can no longer clock in or out because your employee record has
            been marked as deleted.
          </p>
        </div>
      ) : (
        <CheckInButton todayRecord={todayRecord} onAction={fetchData} />
      )}
    </div>
  );
};

export default Attendance;
