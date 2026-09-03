import {useCallback, useState} from "react";


const PrintPayslip = () => {
  const [payslips, setPayslips] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const isAdmin = true;

  const fetchPayslips = useCallback(async () => {
    setPayslips(dummyPayslipData);
    setTimeout(() => {
      setLoading(false);
    },1000);
  },[]);

  useEffect(() => {
    fetchPayslips()
  },[fetchPayslips]);
   
    useEffect(() => {
    if(isAdmin) setEmployees(dummyEmployeeData);
  },[isAdmin]);

  if(loading) return <Loading/>

  return <div className="animate-fade-in">
    <div>
      <div>
        <h1></h1>
      </div>
    </div>
  </div>;
};

export default PrintPayslip;
