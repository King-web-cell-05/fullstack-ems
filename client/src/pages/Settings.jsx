import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import {
  Lock,
  Settings as SettingsIcon,
  ShieldCheck,
  UserRound,
  ChevronRight,
} from "lucide-react";
import { dummyProfileData } from "../assets/assets";
import ProfileForm from "../components/ProfileForm";
import ChangePasswordModal from "../components/ChangePasswordModal";

const Settings = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  const isAdmin = false;

  useEffect(() => {
    const timer = setTimeout(() => {
      setProfile(dummyProfileData);
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="min-h-full bg-[#f5f7fb] animate-fade-in">
      <div className="max-w-[1200px] mx-auto">

        {/* Page Header */}
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center">
              <SettingsIcon
                size={16}
                className="text-blue-600"
              />
            </div>

            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-blue-600">
              Account Management
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0f172a]">
            Settings
          </h1>

          <p className="mt-1.5 text-sm text-slate-500">
            Manage your account information, security and preferences.
          </p>
        </div>

        {/* Account Overview */}
        <div className="bg-[#0b1220] rounded-2xl p-5 sm:p-6 mb-7 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center shrink-0">
              <UserRound
                size={21}
                className="text-blue-300"
              />
            </div>

            <div className="flex-1">
              <p className="text-[10px] uppercase tracking-[0.15em] font-semibold text-slate-500">
                Account
              </p>

              <h2 className="text-base font-semibold text-white mt-1">
                {isAdmin
                  ? "Administrator Account"
                  : "Employee Account"}
              </h2>

              <p className="text-xs text-slate-400 mt-1">
                Manage your personal information and account security.
              </p>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-center">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />

              <span className="text-xs text-slate-400">
                Account active
              </span>
            </div>
          </div>
        </div>

        {/* Profile Section */}
        {!isAdmin && profile && (
          <section className="mb-7">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center">
                <UserRound
                  size={17}
                  className="text-blue-600"
                />
              </div>

              <div>
                <h2 className="text-sm font-semibold text-slate-900">
                  Profile Information
                </h2>

                <p className="text-xs text-slate-400 mt-0.5">
                  Update your personal account information.
                </p>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
              <ProfileForm
                initialData={profile}
                onSuccess={() => {
                  setProfile(dummyProfileData);
                }}
              />
            </div>
          </section>
        )}

        {/* Security Section */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center">
              <ShieldCheck
                size={17}
                className="text-emerald-600"
              />
            </div>

            <div>
              <h2 className="text-sm font-semibold text-slate-900">
                Security
              </h2>

              <p className="text-xs text-slate-400 mt-0.5">
                Protect your account and manage your login credentials.
              </p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">

            {/* Password */}
            <div className="p-5 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                    <Lock
                      size={19}
                      className="text-slate-600"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Password
                    </p>

                    <p className="text-xs text-slate-500 mt-1">
                      Update your account password regularly to keep your
                      account secure.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setShowPasswordModal(true)}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-sm font-semibold text-slate-700 transition-colors"
                >
                  Change Password
                  <ChevronRight size={15} />
                </button>

              </div>
            </div>

            {/* Security Status */}
            <div className="border-t border-slate-100 px-5 sm:px-6 py-4 bg-slate-50/70">
              <div className="flex items-center gap-2">
                <ShieldCheck
                  size={15}
                  className="text-emerald-600"
                />

                <p className="text-xs text-slate-500">
                  Your account security settings are active.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Footer Note */}
        <div className="mt-7 flex items-center justify-center gap-2 text-[11px] text-slate-400 pb-6">
          <ShieldCheck size={13} />
          Your account information is managed securely.
        </div>

      </div>

      {/* Change Password Modal */}
      <ChangePasswordModal
        open={showPasswordModal}
        onClose={() => setShowPasswordModal(false)}
      />
    </div>
  );
};

export default Settings;