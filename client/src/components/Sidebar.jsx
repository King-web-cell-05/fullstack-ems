import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { dummyProfileData } from "../assets/assets";
import { MenuIcon } from "lucide-react";

const Sidebar = () => {
  const { pathname } = useLocation();
  const [userName, setUserName] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setUserName(dummyProfileData.firstName + " " + dummyProfileData.lastName);
  });
  // close mobile sidebar on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);
  const sidebarContent = 
  <>
  {/* Brand header */}
  <div>
    
  </div>
  {/* User profile card */}

  {/* {Section label} */}

  {/* Navigation list */}

  {/* {Logout} */}
  </>;
  return (
    <>
      {/* {Mobile hamburger button} */}
      <button
        classname="lg:hidden fixed top-4 left-4 z-50 p-2 bg-slate-900 text-white rounded-lg  shadow-lg border border-white/10"
        onClick={() => setMobileOpen(true)}
      >
        <MenuIcon size={20} />
      </button>
      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}
      {/* Sidebar - desketop */}
      <aside className="hidden lg:flex flex-col h-full w-[260px] bg-linear-to-b from-slate-900 via-slate-900 to-slate-950 text-white shrink-0 boder-r border-white/4">
        {sidebarContent}
      </aside>
      {/* {Sidebar - mobile} */}
      <aside className={'lg:hidden fixed inset-y-0 left-0 w-72 bg-linear-to-b from-slate-900 via-slate-900 to-slate-950 text-white z-50 flex flex-col transform transition-transform duration-300 ${mobileOpen ? "translate-x-0" : "-translate-x-full"}'}>
        {sidebarContent}
      </aside>
    </>
  );
};

export default Sidebar;
