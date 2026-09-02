import { CalendarDays, FileText, X } from 'lucide-react';
import React, { useState } from 'react';



const ApplyLeaveModal = ({ open, onClose, onSuccess }) => {
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        type: 'SICK',
        startDate: '',
        endDate: '',
        reason: '',
    });

    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const minDate = today.toISOString().split("T")[0];

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (form.endDate < form.startDate) return;

        setLoading(true);
        try {
            await onSuccess?.(form);
            setForm({ type: 'SICK', startDate: '', endDate: '', reason: '' });
            onClose?.();
        } finally {
            setLoading(false);
        }
    };
    if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm " onClick={onClose}>
        <div className=" relative bg-white rounded-2xl shadow-2xl w-full max-w-lg animate-fade-in " onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="flex items-center justify-between p-6 pb-0">
               <div>
                 <h2 className="text-lg font-semibold text-slate-800">Apply for Leave</h2>
                <p className="text-sm text-slate-400 mt-0.5">Submit your leave request for approval</p>
               </div>
                <button
                    onClick={onClose}
                    className="p-2 rounded-lg hover:bg-slate-100 transition-colors text-slate-400 hover:text-slate-600 "
                >
                    <X className='w-5 h-5'/>
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
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <label className="text-sm font-medium text-slate-700">
                        <span className="flex items-center gap-2"><CalendarDays className="h-4 w-4 text-slate-400" />Start date</span>
                        <input type="date" name="startDate" min={minDate} value={form.startDate}
                            onChange={(e) => setForm({ ...form, startDate: e.target.value })}
                            className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" required />
                    </label>
                    <label className="text-sm font-medium text-slate-700">
                        End date
                        <input type="date" name="endDate" min={form.startDate || minDate} value={form.endDate}
                            onChange={(e) => setForm({ ...form, endDate: e.target.value })}
                            className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" required />
                    </label>
                </div>

                {/* reason */}
                <div>
                    <label htmlFor="leave-reason" className="text-sm font-medium text-slate-700">Reason</label>
                    <textarea id="leave-reason" name="reason" value={form.reason}
                        onChange={(e) => setForm({ ...form, reason: e.target.value })}
                        className="mt-2 min-h-24 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
                        placeholder="Add a reason for your leave" required />
                </div>

                {/* buttons */}
                <div className="flex justify-end gap-3 pt-2">
                    <button type="button" onClick={onClose} className="rounded-lg px-4 py-2 text-sm text-slate-600 hover:bg-slate-100">Cancel</button>
                    <button type="submit" disabled={loading} className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white disabled:opacity-60">
                        {loading ? 'Submitting...' : 'Submit request'}
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default ApplyLeaveModal