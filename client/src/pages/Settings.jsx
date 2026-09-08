import { useEffect, useState } from "react";
import Loading from "../components/Loading";
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
  </div>;
};

export default Settings;
