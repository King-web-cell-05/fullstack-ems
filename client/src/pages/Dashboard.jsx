
import { useEffect, useState } from "react";
import {
  dummyAdminDashboardData,
  dummyEmployeeDashboardData,
} from "../assets/assets";

import Loading from "../components/Loading";
import EmployeeDashboard from "../components/EmployeeDashboard";
import AdminDashboard from "../components/AdminDashboard";

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        setLoading(true);
        setError("");

        /*
         * Temporary dummy data.
         *
         * Replace this section with your API request when
         * the ASP.NET Core backend is connected.
         *
         * Example:
         *
         * const response = await fetch("/api/dashboard");
         * const result = await response.json();
         * setData(result);
         */

        const dashboardData = dummyAdminDashboardData;

        setData(dashboardData);
      } catch (err) {
        console.error("Dashboard loading error:", err);

        setError(
          "We couldn't load your dashboard. Please try again."
        );
      } finally {
        setLoading(false);
      }
    };

    loadDashboard();
  }, []);

  {/* =====================================================
      LOADING
  ====================================================== */}

  if (loading) {
    return <Loading />;
  }

  {/* =====================================================
      ERROR
  ====================================================== */}

  if (error) {
    return (
      <div className="min-h-screen bg-[#f5f7fb] flex items-center justify-center px-6">
        <div className="w-full max-w-md bg-white border border-slate-200 rounded-2xl p-8 text-center shadow-[0_10px_40px_rgba(15,23,42,0.06)]">

          <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-red-50 flex items-center justify-center">
            <span className="text-red-500 text-lg font-bold">
              !
            </span>
          </div>

          <h2 className="text-lg font-bold text-slate-900">
            Dashboard unavailable
          </h2>

          <p className="text-sm text-slate-500 mt-2 leading-6">
            {error}
          </p>

          <button
            onClick={() => window.location.reload()}
            className="mt-6 px-5 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-blue-600 transition-colors"
          >
            Try again
          </button>

        </div>
      </div>
    );
  }

  {/* =====================================================
      EMPTY STATE
  ====================================================== */}

  if (!data) {
    return (
      <div className="min-h-screen bg-[#f5f7fb] flex items-center justify-center px-6">
        <div className="text-center">

          <h2 className="text-lg font-semibold text-slate-800">
            No dashboard data
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            There is currently no information available.
          </p>

        </div>
      </div>
    );
  }

  {/* =====================================================
      ADMIN DASHBOARD
  ====================================================== */}

  if (data.role === "ADMIN") {
    return <AdminDashboard data={data} />;
  }

  {/* =====================================================
      EMPLOYEE DASHBOARD
  ====================================================== */}

  if (data.role === "EMPLOYEE") {
    return <EmployeeDashboard data={data} />;
  }

  {/* =====================================================
      UNKNOWN ROLE
  ====================================================== */}

  return (
    <div className="min-h-screen bg-[#f5f7fb] flex items-center justify-center px-6">
      <div className="text-center">

        <h2 className="text-lg font-semibold text-slate-900">
          Access configuration error
        </h2>

        <p className="text-sm text-slate-500 mt-2">
          Your account role could not be identified.
        </p>

      </div>
    </div>
  );
};

export default Dashboard;

