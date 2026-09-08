import React, { useEffect, useState } from "react";
import { User, Save } from "lucide-react";

const ProfileForm = ({ initialData, onSuccess }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    position: "",
    bio: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (initialData) {
      setFormData({
        fullName: initialData.fullName || "",
        email: initialData.email || "",
        position: initialData.position || "",
        bio: initialData.bio || "",
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setMessage("");

    try {
      // Simulate saving profile
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setMessage("Profile updated successfully.");

      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      setError("Failed to update profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="card p-5 sm:p-6 mb-6"
    >
      {/* Header */}
      <h2 className="text-base font-semibold text-slate-900 mb-6 pb-4 border-b border-slate-100 flex items-center gap-2">
        <User className="w-5 h-5 text-slate-400" />
        Public Profile
      </h2>

      {/* Error */}
      {error && (
        <div className="bg-rose-50 text-rose-700 p-4 rounded-xl text-sm border border-rose-200 flex items-start gap-3 mb-5">
          <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
          {error}
        </div>
      )}

      {/* Success */}
      {message && (
        <div className="bg-emerald-50 text-emerald-700 p-4 rounded-xl text-sm border border-emerald-200 flex items-start gap-3 mb-5">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
          {message}
        </div>
      )}

      {/* Form Fields */}
      <div className="space-y-4">
        {/* Full Name + Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-xs font-medium text-slate-700 mb-1.5"
            >
              Full Name
            </label>

            <input
              id="fullName"
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="John Doe"
              className="input-field"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-medium text-slate-700 mb-1.5"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="johndoe@example.com"
              className="input-field"
            />
          </div>
        </div>

        {/* Position */}
        <div>
          <label
            htmlFor="position"
            className="block text-xs font-medium text-slate-700 mb-1.5"
          >
            Position
          </label>

          <input
            id="position"
            name="position"
            type="text"
            value={formData.position}
            onChange={handleChange}
            placeholder="Software Developer"
            className="input-field"
          />
        </div>

        {/* Bio */}
        <div>
          <label
            htmlFor="bio"
            className="block text-xs font-medium text-slate-700 mb-1.5"
          >
            Bio
          </label>

          <textarea
            id="bio"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            placeholder="Write a brief bio..."
            rows={4}
            className="input-field resize-none"
          />

          <p className="text-[11px] text-slate-400 mt-2">
            This will be displayed on your profile.
          </p>
        </div>

        {/* Save Button */}
        <div className="flex justify-end pt-1">
          <button
            type="submit"
            disabled={loading}
            className="btn-primary flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <Save className="w-4 h-4" />

            {loading ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ProfileForm;