import React, { useState } from "react";
import { Loader2Icon, LockIcon, X } from "lucide-react";

const ChangePasswordModal = ({ open, onClose }) => {
  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState({
    type: "",
    text: "",
  });

  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage({
      type: "",
      text: "",
    });

    if (!form.currentPassword) {
      setMessage({
        type: "error",
        text: "Please enter your current password.",
      });
      return;
    }

    if (!form.newPassword) {
      setMessage({
        type: "error",
        text: "Please enter a new password.",
      });
      return;
    }

    if (form.newPassword.length < 8) {
      setMessage({
        type: "error",
        text: "The new password must be at least 8 characters.",
      });
      return;
    }

    if (form.newPassword !== form.confirmPassword) {
      setMessage({
        type: "error",
        text: "New passwords do not match.",
      });
      return;
    }

    setLoading(true);

    try {
      // Connect this handler to the password-change API when available.
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setMessage({
        type: "success",
        text: "Password changed successfully.",
      });

      setForm({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } catch (error) {
      setMessage({
        type: "error",
        text: "Failed to change password. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  if (!open) {
    return null;
  }

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 pb-0">
          <h2 className="text-lg font-medium text-slate-900 flex items-center gap-2">
            <LockIcon className="w-5 h-5 text-slate-400" />
            Change Password
          </h2>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-slate-100 transition-colors text-slate-400 hover:text-slate-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="p-6 space-y-4"
        >
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
              required
              value={form.currentPassword}
              onChange={handleChange}
              placeholder="Current password"
              className="w-full rounded-lg border border-slate-200 px-3 py-2 outline-none focus:border-slate-400"
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
              required
              minLength={8}
              value={form.newPassword}
              onChange={handleChange}
              placeholder="New password"
              className="w-full rounded-lg border border-slate-200 px-3 py-2 outline-none focus:border-slate-400"
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
              required
              minLength={8}
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm new password"
              className="w-full rounded-lg border border-slate-200 px-3 py-2 outline-none focus:border-slate-400"
            />
          </div>

          {/* Message */}
          {message.text && (
            <div
              className={
                message.type === "error"
                  ? "bg-rose-50 text-rose-600 border border-rose-200 rounded-lg px-3 py-2 text-sm"
                  : "bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-lg px-3 py-2 text-sm"
              }
            >
              {message.text}
            </div>
          )}

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-2">
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
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading && <Loader2Icon className="w-4 h-4 mr-2 animate-spin" />}
              {loading ? "Saving..." : "Change password"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePasswordModal;