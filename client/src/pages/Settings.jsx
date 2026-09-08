import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { Lock } from "lucide-react";
import { dummyProfileData } from "../assets/assets";
import ProfileForm from "../components/ProfileForm";
import ChangePasswordModal from "../components/ChangePasswordModal";

const Settings = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  // false = Employee
  // true = Admin
  const isAdmin = false;

  useEffect(() => {
    const timer = setTimeout(() => {
      setProfile(dummyProfileData);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="animate-fade-in">
      {/* Page Header */}
      <div className="page-header">
        <h1 className="page-title">Settings</h1>

        <p className="page-subtitle">
          Manage your account and preferences
        </p>
      </div>

      {/* Public Profile - Employee Only */}
      {!isAdmin && profile && (
        <ProfileForm
          initialData={profile}
          onSuccess={() => {
            setProfile(dummyProfileData);
          }}
        />
      )}

      {/* Password */}
      <div className="card max-w-md p-5 sm:p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-slate-100 rounded-lg">
            <Lock className="w-5 h-5 text-slate-600" />
          </div>

          <div>
            <p className="font-medium text-slate-900">
              Password
            </p>

            <p className="text-sm text-slate-500">
              Update your account password
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setShowPasswordModal(true)}
          className="btn-secondary text-sm"
        >
          Change
        </button>
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