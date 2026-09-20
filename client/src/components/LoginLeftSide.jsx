
import React from "react";
import {
  Users,
  BarChart3,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

const LoginLeftSide = () => {
  return (
    <div className="relative hidden lg:flex w-full h-full min-h-screen overflow-hidden bg-[#0b1220]">

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      {/* Soft blue glow */}
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-indigo-600/15 blur-[120px]" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-10 flex flex-col w-full h-full px-10 py-10 xl:px-16 xl:py-12">

        {/* ===================================================
            BRAND
        ==================================================== */}

        <div className="flex items-center gap-3">

          <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/10 backdrop-blur-sm flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-lg">
              E
            </span>
          </div>

          <div>
            <h2 className="text-white text-[15px] font-bold tracking-tight">
              Enterprise HR
            </h2>

            <p className="text-slate-400 text-[11px] mt-0.5">
              Employee Management System
            </p>
          </div>

        </div>

        {/* ===================================================
            MAIN CONTENT
        ==================================================== */}

        <div className="flex-1 flex flex-col justify-center max-w-[580px]">

          {/* Small label */}
          <div className="flex items-center gap-2 mb-6">

            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/10 border border-blue-400/20">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            </span>

            <span className="text-blue-300 text-xs font-semibold uppercase tracking-[0.16em]">
              Workforce Management
            </span>

          </div>

          {/* Heading */}
          <h1 className="text-[42px] xl:text-[52px] font-bold text-white leading-[1.05] tracking-[-0.035em]">
            Manage your
            <br />

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
              workforce smarter.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-[15px] xl:text-base text-slate-400 leading-7 max-w-[500px]">
            A centralized platform for managing employees, attendance,
            leave, payroll and workforce operations from one secure
            workspace.
          </p>

          {/* =================================================
              FEATURE LIST
          ================================================== */}

          <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-[500px]">

            {/* Feature */}
            <div className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.035] px-4 py-3.5 backdrop-blur-sm">

              <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                <Users size={17} className="text-blue-400" />
              </div>

              <div>
                <p className="text-white text-xs font-semibold">
                  Employee Management
                </p>

                <p className="text-slate-500 text-[10px] mt-0.5">
                  Manage your workforce
                </p>
              </div>

            </div>

            {/* Feature */}
            <div className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.035] px-4 py-3.5 backdrop-blur-sm">

              <div className="w-9 h-9 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                <BarChart3 size={17} className="text-indigo-400" />
              </div>

              <div>
                <p className="text-white text-xs font-semibold">
                  Workforce Insights
                </p>

                <p className="text-slate-500 text-[10px] mt-0.5">
                  Track business performance
                </p>
              </div>

            </div>

          </div>

          {/* =================================================
              TRUST INDICATORS
          ================================================== */}

          <div className="flex flex-wrap items-center gap-5 mt-8">

            <div className="flex items-center gap-2">
              <CheckCircle2
                size={15}
                className="text-emerald-400"
              />

              <span className="text-xs text-slate-400">
                Centralized management
              </span>
            </div>

            <div className="flex items-center gap-2">
              <ShieldCheck
                size={15}
                className="text-emerald-400"
              />

              <span className="text-xs text-slate-400">
                Secure access
              </span>
            </div>

          </div>

        </div>

        {/* ===================================================
            BOTTOM
        ==================================================== */}

        <div className="flex items-center justify-between pt-6 border-t border-white/[0.07]">

          <p className="text-[11px] text-slate-500">
            © {new Date().getFullYear()} Enterprise HR
          </p>

          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />

            <span className="text-[11px] text-slate-500">
              System operational
            </span>
          </div>

        </div>

      </div>
    </div>
  );
};

export default LoginLeftSide;

