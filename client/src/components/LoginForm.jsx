
import React, { useState } from "react";
import LoginLeftSide from "./LoginLeftSide";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Eye,
  EyeOff,
  Loader2,
  Mail,
  LockKeyhole,
  ShieldCheck,
  ArrowRight,
  UserRound,
} from "lucide-react";

const LoginForm = ({ role, title, subtitle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    // Add your authentication logic here

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#f5f7fb] flex">

      {/* =====================================================
          LEFT BRAND PANEL
      ====================================================== */}
      <aside className="hidden lg:flex lg:w-[48%] xl:w-[52%] relative overflow-hidden">
        <LoginLeftSide />
      </aside>

      {/* =====================================================
          RIGHT LOGIN AREA
      ====================================================== */}
      <main className="flex-1 min-h-screen flex items-center justify-center relative px-5 py-10 sm:px-8 lg:px-12">

        {/* Subtle background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-indigo-100/40 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 w-full max-w-[430px]">

          {/* =================================================
              MOBILE BRAND
          ================================================== */}
          <div className="lg:hidden mb-8">
            <div className="flex items-center gap-3">

              <div className="w-11 h-11 rounded-xl bg-[#0f172a] flex items-center justify-center shadow-lg">
                <span className="text-white text-lg font-bold">
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
              BACK TO PORTALS
          ================================================== */}
          <Link
            to="/login"
            className="group inline-flex items-center gap-2 text-[13px] font-medium text-slate-500 hover:text-slate-900 transition-colors mb-7"
          >
            <ArrowLeft
              size={15}
              className="group-hover:-translate-x-0.5 transition-transform"
            />

            Back to portals
          </Link>

          {/* =================================================
              LOGIN CONTAINER
          ================================================== */}
          <div className="bg-white rounded-[24px] border border-slate-200/80 shadow-[0_20px_60px_rgba(15,23,42,0.08)] overflow-hidden">

            {/* Top accent */}
            <div className="h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500" />

            <div className="p-7 sm:p-9">

              {/* =============================================
                  HEADER
              ============================================== */}
              <div className="mb-8">

                <div className="flex items-center justify-between mb-6">

                  <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                    <UserRound
                      size={21}
                      className="text-blue-600"
                    />
                  </div>

                  {/* Role badge */}
                  {role && (
                    <span className="px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-semibold uppercase tracking-wide text-slate-600">
                      {role}
                    </span>
                  )}

                </div>

                <h1 className="text-[28px] sm:text-[30px] leading-tight font-bold tracking-[-0.03em] text-slate-900">
                  {title}
                </h1>

                <p className="mt-2.5 text-[14px] leading-6 text-slate-500 max-w-[370px]">
                  {subtitle}
                </p>

              </div>

              {/* =============================================
                  ERROR
              ============================================== */}
              {error && (
                <div className="mb-6 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3.5">

                  <div className="mt-1 w-2 h-2 rounded-full bg-red-500 shrink-0" />

                  <div>
                    <p className="text-sm font-semibold text-red-800">
                      Unable to sign in
                    </p>

                    <p className="text-xs text-red-600 mt-0.5">
                      {error}
                    </p>
                  </div>

                </div>
              )}

              {/* =============================================
                  FORM
              ============================================== */}
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                {/* EMAIL */}
                <div>

                  <label
                    htmlFor="email"
                    className="block text-[13px] font-semibold text-slate-700 mb-2"
                  >
                    Email address
                  </label>

                  <div className="relative group">

                    <Mail
                      size={17}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors pointer-events-none"
                    />

                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      autoComplete="email"
                      placeholder="name@company.com"
                      className="
                        w-full
                        h-[50px]
                        rounded-xl
                        border
                        border-slate-200
                        bg-slate-50/70
                        pl-11
                        pr-4
                        text-sm
                        text-slate-900
                        placeholder:text-slate-400
                        outline-none
                        transition-all
                        duration-200
                        hover:border-slate-300
                        focus:border-blue-500
                        focus:bg-white
                        focus:ring-[4px]
                        focus:ring-blue-500/10
                      "
                    />

                  </div>

                </div>

                {/* PASSWORD */}
                <div>

                  <div className="flex items-center justify-between mb-2">

                    <label
                      htmlFor="password"
                      className="text-[13px] font-semibold text-slate-700"
                    >
                      Password
                    </label>

                    <button
                      type="button"
                      className="text-[12px] font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      Forgot password?
                    </button>

                  </div>

                  <div className="relative group">

                    <LockKeyhole
                      size={17}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors pointer-events-none"
                    />

                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      autoComplete="current-password"
                      placeholder="Enter your password"
                      className="
                        w-full
                        h-[50px]
                        rounded-xl
                        border
                        border-slate-200
                        bg-slate-50/70
                        pl-11
                        pr-12
                        text-sm
                        text-slate-900
                        placeholder:text-slate-400
                        outline-none
                        transition-all
                        duration-200
                        hover:border-slate-300
                        focus:border-blue-500
                        focus:bg-white
                        focus:ring-[4px]
                        focus:ring-blue-500/10
                      "
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword((prev) => !prev)
                      }
                      aria-label={
                        showPassword
                          ? "Hide password"
                          : "Show password"
                      }
                      className="
                        absolute
                        right-3.5
                        top-1/2
                        -translate-y-1/2
                        text-slate-400
                        hover:text-slate-700
                        transition-colors
                      "
                    >
                      {showPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>

                  </div>

                </div>

                {/* ===========================================
                    SUBMIT
                ============================================ */}
                <button
                  type="submit"
                  disabled={loading}
                  className="
                    group
                    w-full
                    h-[50px]
                    mt-2
                    rounded-xl
                    bg-[#0f172a]
                    text-white
                    text-sm
                    font-semibold
                    flex
                    items-center
                    justify-center
                    gap-2
                    shadow-[0_8px_20px_rgba(15,23,42,0.16)]
                    hover:bg-blue-600
                    hover:shadow-[0_8px_25px_rgba(37,99,235,0.25)]
                    focus:outline-none
                    focus:ring-4
                    focus:ring-blue-500/15
                    disabled:opacity-60
                    disabled:cursor-not-allowed
                    transition-all
                    duration-200
                  "
                >

                  {loading ? (
                    <>
                      <Loader2
                        size={18}
                        className="animate-spin"
                      />

                      Signing in...
                    </>
                  ) : (
                    <>
                      Sign in

                      <ArrowRight
                        size={17}
                        className="group-hover:translate-x-0.5 transition-transform"
                      />
                    </>
                  )}

                </button>

              </form>

              {/* =============================================
                  TRUST FOOTER
              ============================================== */}
              <div className="mt-7 flex items-center justify-center gap-2">

                <ShieldCheck
                  size={14}
                  className="text-emerald-600"
                />

                <span className="text-[11px] text-slate-400">
                  Secure company authentication
                </span>

              </div>

            </div>

          </div>

          {/* =================================================
              PAGE FOOTER
          ================================================== */}
          <div className="mt-6 flex items-center justify-center gap-3 text-[11px] text-slate-400">

            <span>
              © {new Date().getFullYear()} Enterprise HR
            </span>

            <span className="w-1 h-1 rounded-full bg-slate-300" />

            <span>
              Employee Management System
            </span>

          </div>

        </div>

      </main>
    </div>
  );
};

export default LoginForm;

