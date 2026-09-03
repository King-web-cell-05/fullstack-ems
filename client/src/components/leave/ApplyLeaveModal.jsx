import { CalendarDays, FileText, Loader2, Send, X } from "lucide-react";
import React, { useState } from "react";

const ApplyLeaveModal = ({ open, onClose, onSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    type: "SICK",
    startDate: "",
    endDate: "",
    reason: "",
  });

  const today = new Date();
  const minDate = today.toISOString().split("T")[0];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.startDate || !form.endDate || form.endDate < form.startDate) return;

    setLoading(true);
    try {
      await onSuccess?.(form);
      setForm({ type: "SICK", startDate: "", endDate: "", reason: "" });
      onClose?.();
    } finally {
      setLoading(false);
    }
  };
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm "
      onClick={onClose}
    >
      <div
        className=" relative bg-white rounded-2xl shadow-2xl w-full max-w-lg animate-fade-in "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 pb-0">
          <div>
            <h2 className="text-lg font-semibold text-slate-800">
              Apply for Leave
            </h2>
            <p className="text-sm text-slate-400 mt-0.5">
              Submit your leave request for approval
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-slate-100 transition-colors text-slate-400 hover:text-slate-600 "
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        {/* form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {/* leave type */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-slate-700 ">
              <FileText className="w-4 h-4 text-slate-400" />
              Leave Type
            </label>
            <select
              name="type"
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
              className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
              required
            >
              <option value="SICK">Sick Leave</option>
              <option value="CASUAL">Casual Leave</option>
              <option value="MATERNITY">Maternity Leave</option>
              <option value="ANNUAL">Annual Leave</option>
            </select>
          </div>
          {/* duration */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-2">
              <CalendarDays className="h-4 w-4 text-slate-400" />
              Duration
            </label>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="block text-xs text-slate-400 mb-1">From</span>
                <input
                  type="date"
                  name="startDate"
                  value={form.startDate}
                  onChange={(e) =>
                    setForm({ ...form, startDate: e.target.value })
                  }
                  required
                  min={minDate}
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
                />
              </div>
              <div>
                <span className="block text-xs text-slate-400 mb-1">To</span>
                <input
                  type="date"
                  name="endDate"
                  value={form.endDate}
                  onChange={(e) =>
                    setForm({ ...form, endDate: e.target.value })
                  }
                  required
                  min={form.startDate || minDate}
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
                />
              </div>
            </div>
          </div>

          {/* reason */}
          <div>
            <label
              htmlFor="leave-reason"
              className="text-sm font-medium text-slate-700"
            >
              Reason
            </label>
            <textarea
              id="leave-reason"
              name="reason"
              value={form.reason}
              onChange={(e) => setForm({ ...form, reason: e.target.value })}
              className="mt-2 min-h-24 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
              placeholder="Describe the reason for your leave"
              required
            />
          </div>

          {/* buttons */}
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="btn-secondary flex-1"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="btn-primary flex-1 flex items-center justify-center gap-2 "
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" /> }
              {loading ? "Submitting..." : "Submit "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyLeaveModal;
