
import {
  ShieldCheck,
  UserRound,
  ArrowRight,
  LockKeyhole,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import LoginLeftSide from "../components/LoginLeftSide";

const LoginLanding = () => {
  const portalOptions = [
    {
      to: "/login/admin",
      title: "Admin Portal",
      description:
        "Manage employees, departments, attendance, payroll, and system settings.",
      icon: ShieldCheck,
      label: "Administration",
    },
    {
      to: "/login/employee",
      title: "Employee Portal",
      description:
        "Access your profile, attendance, leave requests, and personal payslips.",
      icon: UserRound,
      label: "Employee Access",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5f7fb] flex">

      {/* =====================================================
          LEFT BRANDING PANEL
      ====================================================== */}

      <aside className="hidden lg:flex lg:w-[48%] xl:w-[52%]">
        <LoginLeftSide />
      </aside>

      {/* =====================================================
          RIGHT CONTENT
      ====================================================== */}

      <main className="relative flex-1 min-h-screen flex items-center justify-center px-5 py-10 sm:px-8 lg:px-12 overflow-hidden">

        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">

          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-blue-100/60 blur-3xl" />

          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-indigo-100/50 blur-3xl" />

        </div>

        <div className="relative z-10 w-full max-w-[500px]">

          {/* =================================================
              MOBILE BRAND
          ================================================== */}

          <div className="lg:hidden mb-10">

            <div className="flex items-center gap-3">

              <div className="w-11 h-11 rounded-xl bg-[#0f172a] flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">
                  E
                </span>
              </div>

              <div>
                <h2 className="text-[15px] font-bold text-slate-900">
                  Enterprise HR
                </h2>

                <p className="text-xs text-slate-500 mt-0.5">
                  Employee Management System
                </p>
              </div>

            </div>

          </div>

          {/* =================================================
              HEADER
          ================================================== */}

          <div className="mb-8">

            <div className="flex items-center gap-2 mb-5">

              <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center">
                <LockKeyhole
                  size={15}
                  className="text-blue-600"
                />
              </div>

              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-600">
                Secure Access
              </span>

            </div>

            <h1 className="text-[32px] sm:text-[36px] leading-tight font-bold tracking-[-0.035em] text-slate-900">
              Welcome back
            </h1>

            <p className="mt-3 text-[14px] sm:text-[15px] leading-6 text-slate-500 max-w-[430px]">
              Choose your portal to securely access your employee
              management workspace.
            </p>

          </div>

          {/* =================================================
              PORTAL CARDS
          ================================================== */}

          <div className="space-y-4">

            {portalOptions.map((portal) => {
              const Icon = portal.icon;

              return (
                <Link
                  key={portal.to}
                  to={portal.to}
                  className="
                    group
                    block
                    bg-white
                    border
                    border-slate-200
                    rounded-2xl
                    p-5
                    sm:p-6
                    shadow-[0_8px_30px_rgba(15,23,42,0.05)]
                    hover:border-blue-300
                    hover:shadow-[0_15px_40px_rgba(37,99,235,0.10)]
                    hover:-translate-y-0.5
                    transition-all
                    duration-200
                  "
                >

                  <div className="flex items-center gap-4">

                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors">

                      <Icon
                        size={21}
                        className="text-slate-600 group-hover:text-blue-600 transition-colors"
                      />

                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1">

                      <div className="flex items-center gap-2 mb-1">

                        <h2 className="text-[16px] font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                          {portal.title}
                        </h2>

                      </div>

                      <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                        {portal.label}
                      </span>

                      <p className="text-[12px] sm:text-[13px] leading-5 text-slate-500 mt-2 max-w-[340px]">
                        {portal.description}
                      </p>

                    </div>

                    {/* Arrow */}
                    <div className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all">

                      <ArrowRight
                        size={16}
                        className="text-slate-400 group-hover:text-white group-hover:translate-x-0.5 transition-all"
                      />

                    </div>

                  </div>

                </Link>
              );
            })}

          </div>

          {/* =================================================
              SECURITY INFO
          ================================================== */}

          <div className="mt-7 rounded-xl border border-slate-200 bg-white/70 px-4 py-3.5">

            <div className="flex items-center gap-3">

              <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0">

                <CheckCircle2
                  size={16}
                  className="text-emerald-600"
                />

              </div>

              <div>

                <p className="text-[12px] font-semibold text-slate-700">
                  Secure company access
                </p>

                <p className="text-[11px] text-slate-400 mt-0.5">
                  Only authorized users can access the system.
                </p>

              </div>

            </div>

          </div>

          {/* =================================================
              FOOTER
          ================================================== */}

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-400">

            <p>
              © {new Date().getFullYear()} Enterprise HR
            </p>

            <div className="flex items-center gap-2">

              <span className="w-1 h-1 rounded-full bg-slate-300" />

              <span>
                Employee Management System
              </span>

            </div>

          </div>

        </div>

      </main>
    </div>
  );
};

export default LoginLanding;

