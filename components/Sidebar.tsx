"use client";

import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <div className="relative w-8 h-8 mr-4">
          <Image fill src="/logo.png" alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
