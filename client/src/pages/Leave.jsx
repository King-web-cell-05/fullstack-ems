import { useCallback, useEffect, useState } from "react";
import { dummyLeaveData } from "../assets/assets";
import Loading from "../components/Loading";
import {
  Palmtree as PalmtreeIcon,
  PlusIcon,
  Thermometer as ThermometerIcon,
  Umbrella as UmbrellaIcon,
} from "lucide-react";

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

  const leaveStats = [
    { label: "Sick Leave", value: sickCount, icon: ThermometerIcon },
    { label: "Casual Leave", value: casualCount, icon: UmbrellaIcon },
    { label: "Annual Leave", value: annualCount, icon: PalmtreeIcon },
  ];

  return (
    <div className="animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1>Leave Management</h1>
          <p>
            {isAdmin
              ? "Manage Leave applications"
              : "Your leave history and requests"}
          </p>
        </div>
        {!isAdmin && !isDeleted && (
          <button
            onClick={() => setShowModal(true)}
            className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            <PlusIcon className="w-4 h-4" /> Apply for Leave
          </button>
        )}
      </div>
    </div>
  );
};

export default Leave;
