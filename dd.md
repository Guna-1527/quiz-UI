"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";
import QuizLayout from "../layout";

export default function SubcategoryPage() {
  const params = useParams();
  const router = useRouter();
  const categoryId = params?.categoryId as string;

  const [subcategories, setSubcategories] = useState<{ id: string; name: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSubcategories() {
      if (!categoryId) return; // Prevent unnecessary queries

      const { data, error } = await supabase
        .from("aptitude_subcategories")
        .select("id, name")
        .eq("category_id", categoryId);

      if (error) setError(error.message);
      else setSubcategories(data || []);

      setLoading(false);
    }

    fetchSubcategories();
  }, [categoryId]);

  if (loading) return <p className="text-center text-gray-500">Loading subcategories...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <QuizLayout>
      <div className="p-6 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-center">Select a Subcategory</h1>

        {subcategories.length > 0 ? (
          <ul className="space-y-4">
            {subcategories.map((sub) => (
              <li
                key={sub.id}
                className="p-4 bg-gray-200 hover:bg-gray-300 rounded-md cursor-pointer"
                onClick={() => router.push(`/quiz/${categoryId}/${sub.id}`)} // Using router.push()
              >
                {sub.name}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No subcategories available.</p>
        )}
      </div>
    </QuizLayout>
  );
}


=====================================

{/* Show Subcategories if a Category is Selected */}
        {categoryIdFromUrl && (
          <>
            <h3 className="text-md font-semibold mt-6 mb-2">Subcategories</h3>
            {subcategories.length > 0 ? (
              <ul>
                {subcategories.map((subcategory) => (
                  <li
                    key={subcategory.id}
                    className="cursor-pointer p-2 bg-gray-700 hover:bg-gray-600 rounded mb-2 transition"
                    onClick={() => router.push(`/quiz/${categoryIdFromUrl}/${subcategory.id}`)}
                  >
                    {subcategory.name}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-400">No subcategories found.</p>
            )}
          </>
        )}