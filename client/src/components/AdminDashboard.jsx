import {
  CalendarCheck,
  Clock3,
  FileText,
  Users,
  UserPlus,
  ClipboardList,
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import React from "react";

const AdminDashboard = ({ data }) => {
  const stats = [
    {
      icon: Users,
      value: data.totalEmployees ?? 0,
      label: "Total Employees",
      description: "Active workforce",
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: CalendarCheck,
      value: data.totalAttendance ?? 0,
      label: "Today's Attendance",
      description: "Employees checked in",
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600",
    },
    {
      icon: Clock3,
      value: data.pendingLeaves ?? 0,
      label: "Pending Requests",
      description: "Awaiting approval",
      iconBg: "bg-amber-50",
      iconColor: "text-amber-600",
    },
    {
      icon: FileText,
      value: data.totalPayslips ?? 0,
      label: "Payslips",
      description: "Generated records",
      iconBg: "bg-indigo-50",
      iconColor: "text-indigo-600",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5f7fb] p-4 sm:p-6 lg:p-8">
      <div className="max-w-[1600px] mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
                Admin Workspace
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Dashboard
            </h1>

            <p className="text-sm text-slate-500 mt-1">
              Welcome back, Admin. Here's what's happening today.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl">
              <CalendarCheck size={16} className="text-slate-400" />
              <span className="text-sm font-medium text-slate-600">
                {new Date().toLocaleDateString("en-US", {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="bg-white border border-slate-200 rounded-2xl p-5 shadow-[0_4px_20px_rgba(15,23,42,0.04)] hover:shadow-[0_8px_30px_rgba(15,23,42,0.07)] transition-shadow duration-200"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      {stat.label}
                    </p>

                    <p className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
                      {stat.value}
                    </p>

                    <p className="text-xs text-slate-500 mt-1">
                      {stat.description}
                    </p>
                  </div>

                  <div
                    className={`w-11 h-11 rounded-xl ${stat.iconBg} flex items-center justify-center shrink-0`}
                  >
                    <Icon size={20} className={stat.iconColor} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

          {/* Attendance Overview */}
          <div className="xl:col-span-2 bg-white border border-slate-200 rounded-2xl shadow-[0_4px_20px_rgba(15,23,42,0.04)]">
            <div className="flex items-center justify-between p-5 sm:p-6 border-b border-slate-100">
              <div>
                <h2 className="text-base font-bold text-slate-900">
                  Attendance Overview
                </h2>

                <p className="text-xs text-slate-500 mt-1">
                  Today's workforce attendance
                </p>
              </div>

              <button className="flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                View attendance
                <ArrowUpRight size={14} />
              </button>
            </div>

            <div className="p-5 sm:p-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                <div className="rounded-xl bg-emerald-50/70 border border-emerald-100 p-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600" />
                    <span className="text-xs font-semibold text-emerald-700">
                      Present
                    </span>
                  </div>

                  <p className="text-2xl font-bold text-slate-900 mt-3">
                    {data.totalAttendance ?? 0}
                  </p>

                  <p className="text-xs text-slate-500 mt-1">
                    Checked in today
                  </p>
                </div>

                <div className="rounded-xl bg-amber-50/70 border border-amber-100 p-4">
                  <div className="flex items-center gap-2">
                    <Clock3 size={16} className="text-amber-600" />
                    <span className="text-xs font-semibold text-amber-700">
                      Pending
                    </span>
                  </div>

                  <p className="text-2xl font-bold text-slate-900 mt-3">
                    0
                  </p>

                  <p className="text-xs text-slate-500 mt-1">
                    Yet to check in
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
                  <div className="flex items-center gap-2">
                    <AlertCircle size={16} className="text-slate-500" />
                    <span className="text-xs font-semibold text-slate-600">
                      Absent
                    </span>
                  </div>

                  <p className="text-2xl font-bold text-slate-900 mt-3">
                    0
                  </p>

                  <p className="text-xs text-slate-500 mt-1">
                    Not present today
                  </p>
                </div>

              </div>

              {/* Attendance Progress */}
              <div className="mt-7">

                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-slate-500">
                    Attendance rate
                  </span>

                  <span className="text-xs font-bold text-slate-700">
                    {data.totalEmployees
                      ? Math.round(
                          (data.totalAttendance / data.totalEmployees) * 100
                        )
                      : 0}
                    %
                  </span>
                </div>

                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600 rounded-full transition-all duration-500"
                    style={{
                      width: `${
                        data.totalEmployees
                          ? Math.min(
                              (data.totalAttendance / data.totalEmployees) *
                                100,
                              100
                            )
                          : 0
                      }%`,
                    }}
                  />
                </div>

              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-[0_4px_20px_rgba(15,23,42,0.04)]">
            <div className="p-5 sm:p-6 border-b border-slate-100">
              <h2 className="text-base font-bold text-slate-900">
                Quick Actions
              </h2>

              <p className="text-xs text-slate-500 mt-1">
                Common administrative tasks
              </p>
            </div>

            <div className="p-4">

              <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors text-left">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                  <UserPlus size={18} className="text-blue-600" />
                </div>

                <div className="flex-1">
                  <p className="text-sm font-semibold text-slate-800">
                    Add Employee
                  </p>

                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Create a new employee record
                  </p>
                </div>

                <ArrowUpRight size={15} className="text-slate-400" />
              </button>

              <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors text-left">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
                  <ClipboardList size={18} className="text-emerald-600" />
                </div>

                <div className="flex-1">
                  <p className="text-sm font-semibold text-slate-800">
                    Review Leave
                  </p>

                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Review pending requests
                  </p>
                </div>

                <ArrowUpRight size={15} className="text-slate-400" />
              </button>

              <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors text-left">
                <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center">
                  <FileText size={18} className="text-indigo-600" />
                </div>

                <div className="flex-1">
                  <p className="text-sm font-semibold text-slate-800">
                    Payroll
                  </p>

                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Manage employee payslips
                  </p>
                </div>

                <ArrowUpRight size={15} className="text-slate-400" />
              </button>

            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">

          {/* Workforce Summary */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-[0_4px_20px_rgba(15,23,42,0.04)]">

            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-base font-bold text-slate-900">
                  Workforce Summary
                </h2>

                <p className="text-xs text-slate-500 mt-1">
                  Current employee overview
                </p>
              </div>

              <Users size={19} className="text-slate-400" />
            </div>

            <div className="space-y-5">

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-xs font-medium text-slate-500">
                    Active employees
                  </span>

                  <span className="text-xs font-bold text-slate-700">
                    {data.totalEmployees ?? 0}
                  </span>
                </div>

                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full w-full bg-blue-600 rounded-full" />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-xs font-medium text-slate-500">
                    Leave requests
                  </span>

                  <span className="text-xs font-bold text-slate-700">
                    {data.pendingLeaves ?? 0}
                  </span>
                </div>

                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-amber-500 rounded-full"
                    style={{
                      width: `${
                        data.totalEmployees
                          ? Math.min(
                              (data.pendingLeaves / data.totalEmployees) * 100,
                              100
                            )
                          : 0
                      }%`,
                    }}
                  />
                </div>
              </div>

            </div>
          </div>

          {/* System Status */}
          <div className="bg-[#0b1220] rounded-2xl p-5 sm:p-6 shadow-[0_8px_30px_rgba(15,23,42,0.12)]">

            <div className="flex items-center justify-between mb-6">

              <div>
                <h2 className="text-base font-bold text-white">
                  System Status
                </h2>

                <p className="text-xs text-slate-400 mt-1">
                  Enterprise HR services
                </p>
              </div>

              <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-[10px] font-semibold text-emerald-400">
                  Operational
                </span>
              </div>

            </div>

            <div className="grid grid-cols-2 gap-3">

              <div className="rounded-xl bg-white/[0.04] border border-white/[0.06] p-4">
                <p className="text-xs text-slate-500">
                  Employee Records
                </p>

                <div className="flex items-center gap-2 mt-3">
                  <CheckCircle2 size={15} className="text-emerald-400" />

                  <span className="text-sm font-semibold text-slate-200">
                    Operational
                  </span>
                </div>
              </div>

              <div className="rounded-xl bg-white/[0.04] border border-white/[0.06] p-4">
                <p className="text-xs text-slate-500">
                  Attendance
                </p>

                <div className="flex items-center gap-2 mt-3">
                  <CheckCircle2 size={15} className="text-emerald-400" />

                  <span className="text-sm font-semibold text-slate-200">
                    Operational
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;