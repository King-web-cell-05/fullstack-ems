import { useCallback, useEffect, useState } from "react";
import {
  Clock3,
  LogIn,
  LogOut,
  ShieldCheck,
  Timer,
} from "lucide-react";
import { dummyAttendanceData } from "../assets/assets";
import AttendanceStats from "../components/attendance/AttendanceStats";
import AttendanceHistory from "../components/attendance/AttendanceHistory";

const CheckInButton = ({ todayRecord, onAction }) => {
  const isCheckedIn = Boolean(todayRecord?.checkIn && !todayRecord?.checkOut);

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <button
        type="button"
        onClick={onAction}
        className={`group relative flex items-center gap-3 min-w-[190px] h-[68px] px-4 rounded-2xl text-white shadow-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 ${
          isCheckedIn
            ? "bg-[#0b1220] hover:bg-[#111b2d]"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
            isCheckedIn
              ? "bg-white/10"
              : "bg-white/15"
          }`}
        >
          {isCheckedIn ? (
            <LogOut size={19} />
          ) : (
            <LogIn size={19} />
          )}
        </div>

        <div className="flex flex-col items-start min-w-0">
          <span className="text-sm font-semibold leading-5">
            {isCheckedIn ? "Clock Out" : "Clock In"}
          </span>

          <span className="text-[11px] text-white/70 leading-4">
            {isCheckedIn
              ? "End your current shift"
              : "Start your work day"}
          </span>
        </div>

        <span
          className={`absolute top-3 right-3 w-1.5 h-1.5 rounded-full ${
            isCheckedIn ? "bg-emerald-400" : "bg-white/60"
          }`}
        />
      </button>
    </div>
  );
};

const Attendance = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(() => {
    setLoading(true);
    setHistory(dummyAttendanceData);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const cleanup = fetchData();
    return cleanup;
  }, [fetchData]);

  if (loading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-[#f5f7fb]">
        <div className="flex flex-col items-center">
          <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center mb-4">
            <Clock3 className="w-5 h-5 text-blue-600 animate-pulse" />
          </div>

          <p className="text-sm font-medium text-slate-700">
            Loading attendance
          </p>

          <p className="text-xs text-slate-400 mt-1">
            Preparing your attendance records...
          </p>
        </div>
      </div>
    );
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const todayRecord = history.find(
    (record) =>
      new Date(record.date).toDateString() === today.toDateString()
  );

  const isDeleted = false;

  const isCheckedIn = Boolean(
    todayRecord?.checkIn && !todayRecord?.checkOut
  );

  return (
    <div className="min-h-full bg-[#f5f7fb] animate-fade-in">
      <div className="max-w-[1600px] mx-auto">

        <div className="mb-7">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center">
                  <Timer size={16} className="text-blue-600" />
                </div>

                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-blue-600">
                  Workforce Attendance
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0f172a]">
                Attendance
              </h1>

              <p className="mt-1.5 text-sm text-slate-500">
                Track your work hours, daily check-ins and attendance history.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2.5 bg-white border border-slate-200 rounded-xl px-4 py-2.5 shadow-sm">
                <div
                  className={`w-2 h-2 rounded-full ${
                    isCheckedIn
                      ? "bg-emerald-500"
                      : "bg-slate-300"
                  }`}
                />

                <div>
                  <p className="text-[10px] uppercase tracking-wide font-semibold text-slate-400">
                    Today's Status
                  </p>

                  <p className="text-xs font-semibold text-slate-700">
                    {isCheckedIn ? "Currently Working" : "Not Checked In"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {isDeleted ? (
          <div className="mb-7 p-6 bg-rose-50 border border-rose-200 rounded-2xl">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-rose-100 flex items-center justify-center shrink-0">
                <ShieldCheck size={18} className="text-rose-600" />
              </div>

              <div>
                <h3 className="text-sm font-semibold text-rose-800">
                  Attendance access unavailable
                </h3>

                <p className="text-sm text-rose-600 mt-1 leading-6">
                  You can no longer clock in or out because your employee
                  record has been marked as deleted.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="mb-7 bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    isCheckedIn
                      ? "bg-emerald-50 text-emerald-600"
                      : "bg-blue-50 text-blue-600"
                  }`}
                >
                  {isCheckedIn ? (
                    <LogOut size={21} />
                  ) : (
                    <LogIn size={21} />
                  )}
                </div>

                <div>
                  <h2 className="text-sm font-semibold text-slate-900">
                    {isCheckedIn
                      ? "You are currently checked in"
                      : "Ready to start your work day?"}
                  </h2>

                  <p className="text-xs text-slate-500 mt-1">
                    {isCheckedIn
                      ? "Remember to clock out when your work day is complete."
                      : "Use the attendance control to record your work start time."}
                  </p>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400">
                <ShieldCheck size={15} />
                Attendance records are securely tracked
              </div>
            </div>
          </div>
        )}

        <AttendanceStats history={history} />

        <div className="mt-7">
          <AttendanceHistory history={history} />
        </div>
      </div>

      {!isDeleted && (
        <CheckInButton
          todayRecord={todayRecord}
          onAction={fetchData}
        />
      )}
    </div>
  );
};

export default Attendance;