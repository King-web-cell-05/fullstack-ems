import { useState, useEffect } from "react";
import { dummyAdminDashboardData, dummyEmployeeDashboardData } from "../assets/assets";
const Dashboard = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    setData(dummyEmployeeDashboardData)
    setTimeout(()=> {
      setLoading(false)
    },1000)
  }, [])

  if(loading) return <p>Loading</p>
  if(!data) return <p className="text-center text-slate-500 py-12"> Failed to load dashboard</p>
  
  if(data.role ==="ADMIN"){
    return <div>admin dashboard</div>
  }else{
    return <div>employee dashboard</div>
  }
};

export default Dashboard;
