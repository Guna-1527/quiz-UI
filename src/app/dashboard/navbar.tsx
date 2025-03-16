"use client";

import { useEffect, useState } from "react";
import { FaBell, FaUser } from "react-icons/fa";
import { supabase } from "../lib/supabase";
import { useAuth } from "../providers/AuthProvider"; // Import Auth Context

export default function Navbar() {
  const { user } = useAuth(); // Get user from AuthContext
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (!user) return; // Prevent unnecessary fetch

    async function fetchUsername() {
      const { data, error } = await supabase
        .from("users")
        .select("username")
        .eq("id", user.id)
        .single();

      if (error) {
        console.error("Error fetching username:", error);
      } else {
        setUsername(data.username);
      }
    }

    fetchUsername();
  }, [user]); // Only runs when `user` changes

  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <h2 className="text-xl font-semibold">Dashboard</h2>

      <div className="flex items-center gap-4">
        <FaBell className="text-gray-600 cursor-pointer hover:text-blue-600 transition" />
        <div className="flex items-center gap-2 cursor-pointer">
          <FaUser className="text-gray-600" />
          <span className="text-gray-700 font-medium">
            {user ? username || "Loading..." : "Guest"}
          </span>
        </div>
      </div>
    </header>
  );
}
