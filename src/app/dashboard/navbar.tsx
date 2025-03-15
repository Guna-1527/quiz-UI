"use client";

import { Bell, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <h2 className="text-xl font-semibold">Dashboard</h2>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <Bell className="text-gray-600 cursor-pointer hover:text-blue-600 transition" />
        <div className="flex items-center gap-2 cursor-pointer">
          <User className="text-gray-600" />
          <span className="text-gray-700 font-medium">John Doe</span>
        </div>
      </div>
    </header>
  );
}
