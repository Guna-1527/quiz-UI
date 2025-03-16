"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function CategoryGrid() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function checkUser() {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    }
    checkUser();
  }, []);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const { data, error } = await supabase.from("categories").select("id, name");

        if (error) throw error;

        setCategories(data);
      } catch (err) {
        setError("Failed to load categories.");
      } finally {
        setLoading(false);
      }
    }

    fetchCategories();
  }, []);

  const handleCategoryClick = () => {
    if (user) {
      router.push("/quiz");
    } else {
      router.push("/auth/login");
    }
  };

  if (loading) return <p className="text-center text-gray-600">Loading categories...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="w-full flex flex-wrap gap-4 justify-center p-6">
      {categories.map((category) => (
        <div
          key={category.id}
          className="flex items-center justify-between border border-gray-300 px-4 py-2 rounded-lg shadow-md bg-white hover:bg-gray-100 transition cursor-pointer"
          onClick={handleCategoryClick}
        >
          <span className="text-gray-800 font-medium">{category.name}</span>
          
        </div>
      ))}
    </div>
  );
}
