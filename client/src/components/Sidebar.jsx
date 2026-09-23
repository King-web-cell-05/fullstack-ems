import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { dummyProfileData } from "../assets/assets";
import {
  Menu,
  UserRound,
  X,
  LayoutDashboard,
  CalendarDays,
  FileText,
  WalletCards,
  Settings,
  ChevronRight,
  LogOut,
  ShieldCheck,
} from "lucide-react";

const Sidebar = () => {
  const { pathname } = useLocation();

  const [userName, setUserName] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setUserName(
      `${dummyProfileData.firstName || ""} ${
        dummyProfileData.lastName || ""
      }`.trim()
    );
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const role = "EMPLOYEE";

  const navItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    role === "ADMIN"
      ? {
          name: "Employees",
          path: "/employees",
          icon: UserRound,
        }
      : {
          name: "Attendance",
          path: "/attendance",
          icon: CalendarDays,
        },
    {
      name: "Leave",
      path: "/leave",
      icon: FileText,
    },
    {
      name: "Payslips",
      path: "/payslips",
      icon: WalletCards,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: Settings,
    },
  ];

  const handleLogOut = () => {
    window.location.href = "/login";
  };

  const initials = userName
    ? userName
        .split(" ")
        .map((name) => name.charAt(0))
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : "U";

  const sidebarContent = (
    <>
      {/* Brand */}
      <div className="px-5 pt-6 pb-5 border-b border-white/[0.07]">
        <div className="flex items-center justify-between">
          <Link
            to="/dashboard"
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/20 group-hover:bg-blue-500 transition-colors">
              <span className="text-white text-base font-bold">
                E
              </span>
            </div>

            <div>
              <p className="font-bold text-[14px] text-white tracking-tight">
                Enterprise HR
              </p>

              <p className="text-[10px] text-slate-500 font-medium mt-0.5">
                Employee Management System
              </p>
            </div>
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="lg:hidden w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close navigation"
          >
            <X size={18} />
          </button>
        </div>
      </div>

      {/* User Profile */}
      {userName && (
        <div className="mx-4 mt-5 mb-2">
          <div className="rounded-xl border border-white/[0.07] bg-white/[0.035] p-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-800 border border-white/10 flex items-center justify-center shrink-0">
                <span className="text-blue-300 text-xs font-bold">
                  {initials}
                </span>
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-[13px] font-semibold text-slate-200 truncate">
                  {userName}
                </p>

                <div className="flex items-center gap-1.5 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />

                  <p className="text-[10px] text-slate-500 truncate">
                    {role === "ADMIN"
                      ? "Administrator"
                      : "Employee"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Label */}
      <div className="px-5 pt-6 pb-2">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
          Main Menu
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive =
            pathname === item.path ||
            pathname.startsWith(`${item.path}/`);

          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              to={item.path}
              className={`group relative flex items-center gap-3 px-3.5 py-3 rounded-xl text-[13px] font-medium transition-all duration-200 ${
                isActive
                  ? "bg-blue-600 text-white shadow-sm shadow-blue-900/20"
                  : "text-slate-400 hover:text-white hover:bg-white/[0.06]"
              }`}
            >
              <Icon
                size={18}
                strokeWidth={isActive ? 2.2 : 1.8}
                className={`shrink-0 transition-colors ${
                  isActive
                    ? "text-white"
                    : "text-slate-500 group-hover:text-slate-300"
                }`}
              />

              <span className="flex-1">
                {item.name}
              </span>

              {isActive && (
                <ChevronRight
                  size={15}
                  className="text-white/70"
                />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Security Status */}
      <div className="px-4 pb-3">
        <div className="rounded-xl border border-emerald-500/10 bg-emerald-500/[0.04] px-3 py-3">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-emerald-500/10 flex items-center justify-center">
              <ShieldCheck
                size={14}
                className="text-emerald-400"
              />
            </div>

            <div>
              <p className="text-[10px] font-semibold text-slate-300">
                System Secure
              </p>

              <p className="text-[9px] text-slate-600 mt-0.5">
                All services operational
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Logout */}
      <div className="p-3 border-t border-white/[0.07]">
        <button
          type="button"
          onClick={handleLogOut}
          className="flex items-center gap-3 w-full px-3.5 py-3 rounded-xl text-[13px] font-medium text-slate-400 hover:text-rose-400 hover:bg-rose-500/[0.07] transition-all duration-200"
        >
          <LogOut
            size={17}
            className="shrink-0"
          />

          <span>Log out</span>
        </button>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        type="button"
        className="lg:hidden fixed top-4 left-4 z-40 w-10 h-10 rounded-xl bg-[#0b1220] text-white flex items-center justify-center shadow-lg border border-white/10"
        onClick={() => setMobileOpen(true)}
        aria-label="Open navigation"
      >
        <Menu size={19} />
      </button>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col h-full w-[260px] bg-[#0b1220] text-white shrink-0 border-r border-slate-800/60">
        {sidebarContent}
      </aside>

      {/* Mobile Sidebar */}
      <aside
        className={`lg:hidden fixed inset-y-0 left-0 w-[285px] bg-[#0b1220] text-white z-50 flex flex-col shadow-2xl transform transition-transform duration-300 ${
          mobileOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >
        {sidebarContent}
      </aside>
    </>
  );
};

export default Sidebar;