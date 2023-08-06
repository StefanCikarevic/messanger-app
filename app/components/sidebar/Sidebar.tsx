"use client";
import React from "react";

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  return <div className="h-full">{children}</div>;
};

export default Sidebar;
