import { useCallback, useEffect, useState } from "react";
import { dummyLeaveData } from "../assets/assets";
import Loading from "../components/Loading";

const Leave = () => {
  const [leaves, setLeaves] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [isDeleted, setIsLoading] = useState(false);
  const isAdmin = false;

  const fetchLeaves = useCallback(() => {
    setLeaves(dummyLeaveData);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    fetchLeaves();
  }, [fetchLeaves]);

  if (loading) return <Loading />;

  const approvedLeaves = leaves.filter((leave) => leave.status === "APPROVED");
  const sickCount = approvedLeaves.filter(
    (leave) => leave.type === "SICK",
  ).length;
  const casualCount = approvedLeaves.filter(
    (leave) => leave.type === "CASUAL",
  ).length;
  const annualCount = approvedLeaves.filter(
    (leave) => leave.type === "ANNUAL",
  ).length;

  const leaveStats = [];

  return <div>Leave</div>;
};

export default Leave;
