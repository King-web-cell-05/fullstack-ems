import { useCallback, useEffect, useState } from "react";
import { dummyAttendanceData } from "../assets/assets";

const Attendance = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(() => {
    setHistory(dummyAttendanceData);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const cleanup = fetchData();
    return cleanup;
  }, [fetchData]);

  if (loading)
    return <div className="animate fade-in">Loading attendance...</div>;

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayRecord = history.find(
    (r) => new Date(r.date).toDateString() === today.toDateString(),
  );

  return (
    <div className="animate fade-in">
      <div className="page-header">
        <h1 className="page-title">Attendance</h1>
        <p className="page-subtitle">
          Track your work hours and daily check-ins
        </p>
      </div>
    </div>
  );
};

export default Attendance;
