"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../lib/supabase";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { useAuth } from "../providers/AuthProvider"; // Import AuthContext

const Signup = () => {
  const router = useRouter();
  const { setUser } = useAuth(); // Get setUser from AuthContext
  
  // Form state
  const [formData, setFormData] = useState({ email: "", password: "", username: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // Email confirmation message

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Clear errors when typing
  };

  // Handle signup
  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccessMessage("");

    try {
      // Step 1: Sign up user in Supabase
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });

      if (error) {
        throw error;
      }

      const user = data.user;
      if (!user) {
        setSuccessMessage("Check your email to verify your account before logging in.");
        setLoading(false);
        return;
      }

      // Step 2: Insert user details into "users" table
      const { error: insertError } = await supabase
        .from("users")
        .insert([{ id: user.id, username: formData.username, email: formData.email }]);

      if (insertError) {
        throw insertError;
      }

      // Step 3: Set user session
      setUser(user); // Update context with user

      setLoading(false);
      router.push("/dashboard"); // Redirect to dashboard
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">Sign Up</h1>
        
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {successMessage && <p className="text-green-500 text-center mb-4">{successMessage}</p>}

        <form onSubmit={handleSignup} className="space-y-4">
          {/* Username Field */}
          <div>
            <label className="block text-sm font-medium text-gray-600">Username</label>
            <div className="flex items-center border rounded p-2 mt-1 bg-white">
              <FaUser className="text-gray-500 mr-2" />
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full outline-none bg-transparent"
                placeholder="Enter your username"
                required
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <div className="flex items-center border rounded p-2 mt-1 bg-white">
              <FaEnvelope className="text-gray-500 mr-2" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full outline-none bg-transparent"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-600">Password</label>
            <div className="flex items-center border rounded p-2 mt-1 bg-white">
              <FaLock className="text-gray-500 mr-2" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full outline-none bg-transparent"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            disabled={loading}
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>

        {/* Login Redirect */}
        <p className="text-sm text-gray-600 mt-4 text-center">
          Already have an account?{" "}
          <a href="/auth/login" className="text-blue-600 hover:underline">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
