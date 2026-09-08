import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { Lock } from "lucide-react";
import { dummyProfileData } from "../assets/assets";
import ProfileForm from "../components/ProfileForm";

const Settings = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  // Change this according to the logged-in user's role.
  // false = Employee
  // true = Admin
  const isAdmin = false;

  const fetchProfile = () => {
    setProfile(dummyProfileData);
    setLoading(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchProfile();
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

      {/* Employee Public Profile */}
      {!isAdmin && profile && (
        <ProfileForm
          initialData={profile}
          onSuccess={fetchProfile}
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

      {/* Password Modal */}
      {showPasswordModal && (
        <ChangePasswordModal
          onClose={() => setShowPasswordModal(false)}
        />
      )}
    </div>
  );
};

const ChangePasswordModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setMessage("");

    if (formData.newPassword !== formData.confirmPassword) {
      setError("New passwords do not match.");
      return;
    }

    if (!formData.currentPassword || !formData.newPassword) {
      setError("Please fill in all required fields.");
      return;
    }

    setLoading(true);

    try {
      // Simulate password update
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setMessage("Password updated successfully.");

      setFormData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } catch (error) {
      setError("Failed to update password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Change Password
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Update your account password
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 text-xl"
          >
            ×
          </button>
        </div>

        {/* Error */}
        {error && (
          <div className="bg-rose-50 text-rose-700 p-3 rounded-lg text-sm border border-rose-200 mb-4">
            {error}
          </div>
        )}

        {/* Success */}
        {message && (
          <div className="bg-emerald-50 text-emerald-700 p-3 rounded-lg text-sm border border-emerald-200 mb-4">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Current Password */}
          <div>
            <label
              htmlFor="currentPassword"
              className="block text-xs font-medium text-slate-700 mb-1.5"
            >
              Current Password
            </label>

            <input
              id="currentPassword"
              name="currentPassword"
              type="password"
              value={formData.currentPassword}
              onChange={handleChange}
              className="input-field"
              placeholder="Enter current password"
            />
          </div>

          {/* New Password */}
          <div>
            <label
              htmlFor="newPassword"
              className="block text-xs font-medium text-slate-700 mb-1.5"
            >
              New Password
            </label>

            <input
              id="newPassword"
              name="newPassword"
              type="password"
              value={formData.newPassword}
              onChange={handleChange}
              className="input-field"
              placeholder="Enter new password"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-xs font-medium text-slate-700 mb-1.5"
            >
              Confirm New Password
            </label>

            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="input-field"
              placeholder="Confirm new password"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-3">
            <button
              type="button"
              onClick={onClose}
              className="btn-secondary"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary disabled:opacity-60"
            >
              {loading ? "Updating..." : "Update Password"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;