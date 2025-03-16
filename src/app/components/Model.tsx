"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { FaPlay } from "react-icons/fa";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

interface ModelProps {
  name: string;
}

const Model: React.FC<ModelProps> = ({ name }) => {
  const router = useRouter();
  const [user, setUser] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(!!data?.user);
    };
    checkUser();
  }, []);

  const handleClick = () => {
    if (user) {
      router.push("/quiz");
    } else {
      router.push("/auth/login");
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex flex-wrap justify-between items-center gap-2 bg-white px-4 py-3 shadow-md rounded-lg cursor-pointer border border-gray-300 hover:bg-blue-100 transition w-40 h-20" // Fixed size
      onClick={handleClick}
    >
      <span className="text-sm font-medium text-gray-700 text-center w-full break-words">
        {name}
      </span>
      <button className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition">
        <FaPlay size={14} />
      </button>
    </motion.div>
  );
};

export default Model;
  