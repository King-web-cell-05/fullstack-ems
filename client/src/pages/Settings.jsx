import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { Lock } from "lucide-react";
import { dummyProfileData } from "../assets/assets";

const Settings = () => {
  const [profile, setProfile] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [showPasswordModal, setShowPasswordModal] = useState(false); 


  const fetchProfile = async () => {
    setProfile(dummyProfileData);
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }

  useEffect(() => {
    const cleanup = fetchProfile();

    return () => {
      cleanup.then((clearTimeout) => clearTimeout());
    };
  },[]);

  if (loading) return <Loading />;


  return <div className="animate-fade-in">
    <div className="page-header">
      <h1 className="page-title">Settings</h1>
      <p className="page-subtitle">Manage your account settings and preferences</p>
    </div>
    {profile && <p>profile form</p>}

    {/* Change Password trigger */}
    <div className="card max-w-md p-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="p-2.5 bg-slate-100 rounded-lg">
          <Lock className=" w-5 h-5text-slate-600" />
        </div>
        <div>
          <p className="font-medium text-slate-900">Password</p>
          <p className="text-sm text-slate-500">Update your account password</p>
        </div>
      </div>
      <button onClick={() => setShowPasswordModal(true)} className="btn-secondary text-sm">Change</button>
    </div>
  </div>;
};

export default Settings;
