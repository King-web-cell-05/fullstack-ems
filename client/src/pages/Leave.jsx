import { useCallback, useEffect, useState } from "react";
import { dummyLeaveData } from "../assets/assets";
import Loading from "../components/Loading";
import {
  Palmtree,
  Plus,
  Thermometer,
  Umbrella,
  CalendarDays,
  FileClock,
} from "lucide-react";
import LeaveHistory from "../components/leave/LeaveHistory";
import ApplyLeaveModal from "../components/leave/ApplyLeaveModal";

const Leave = () => {
  const [leaves, setLeaves] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const isAdmin = false;

  const fetchLeaves = useCallback(() => {
    setLoading(true);
    setLeaves(dummyLeaveData);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const cleanup = fetchLeaves();
    return cleanup;
  }, [fetchLeaves]);

  if (loading) {
    return <Loading />;
  }

  const approvedLeaves = leaves.filter(
    (leave) => leave.status === "APPROVED"
  );

  const pendingLeaves = leaves.filter(
    (leave) => leave.status === "PENDING"
  );

  const sickCount = approvedLeaves.filter(
    (leave) => leave.type === "SICK"
  ).length;

  const casualCount = approvedLeaves.filter(
    (leave) => leave.type === "CASUAL"
  ).length;

  const annualCount = approvedLeaves.filter(
    (leave) => leave.type === "ANNUAL"
  ).length;

  const leaveStats = [
    {
      label: "Sick Leave",
      value: sickCount,
      icon: Thermometer,
      description: "Approved requests",
    },
    {
      label: "Casual Leave",
      value: casualCount,
      icon: Umbrella,
      description: "Approved requests",
    },
    {
      label: "Annual Leave",
      value: annualCount,
      icon: Palmtree,
      description: "Approved requests",
    },
  ];

  return (
    <div className="min-h-full bg-[#f5f7fb] animate-fade-in">
      <div className="max-w-[1600px] mx-auto">

        <div className="mb-7">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center">
                  <CalendarDays
                    size={16}
                    className="text-blue-600"
                  />
                </div>

                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-blue-600">
                  Workforce Management
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0f172a]">
                Leave Management
              </h1>

              <p className="mt-1.5 text-sm text-slate-500">
                {isAdmin
                  ? "Manage employee leave applications and requests."
                  : "View your leave history and manage your time-off requests."}
              </p>
            </div>

            {!isAdmin && !isDeleted && (
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-200"
              >
                <Plus size={17} />
                Apply for Leave
              </button>
            )}
          </div>
        </div>

        {!isAdmin && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-7">
              {leaveStats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={stat.label}
                    className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-medium text-slate-500">
                          {stat.label}
                        </p>

                        <div className="flex items-baseline gap-1.5 mt-2">
                          <p className="text-2xl font-bold tracking-tight text-slate-900">
                            {stat.value}
                          </p>

                          <span className="text-xs text-slate-400">
                            taken
                          </span>
                        </div>

                        <p className="text-[11px] text-slate-400 mt-1.5">
                          {stat.description}
                        </p>
                      </div>

                      <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                        <Icon
                          size={19}
                          className="text-blue-600"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-7">
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center">
                    <FileClock
                      size={19}
                      className="text-amber-600"
                    />
                  </div>

                  <div>
                    <p className="text-xs font-medium text-slate-500">
                      Pending Requests
                    </p>

                    <p className="text-xl font-bold text-slate-900 mt-0.5">
                      {pendingLeaves.length}
                    </p>

                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Awaiting approval
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                    <CalendarDays
                      size={19}
                      className="text-emerald-600"
                    />
                  </div>

                  <div>
                    <p className="text-xs font-medium text-slate-500">
                      Approved Requests
                    </p>

                    <p className="text-xl font-bold text-slate-900 mt-0.5">
                      {approvedLeaves.length}
                    </p>

                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Successfully approved
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="px-5 sm:px-6 py-5 border-b border-slate-100">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-sm font-semibold text-slate-900">
                  Leave History
                </h2>

                <p className="text-xs text-slate-400 mt-1">
                  {isAdmin
                    ? "Review and manage employee leave applications."
                    : "Review your previous and current leave requests."}
                </p>
              </div>

              <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400">
                <CalendarDays size={14} />
                {leaves.length} {leaves.length === 1 ? "record" : "records"}
              </div>
            </div>
          </div>

          <LeaveHistory
            leaves={leaves}
            isAdmin={isAdmin}
            onUpdate={fetchLeaves}
          />
        </div>
      </div>

      <ApplyLeaveModal
        open={showModal}
        onClose={() => setShowModal(false)}
        onSuccess={fetchLeaves}
      />
    </div>
  );
};

export default Leave;